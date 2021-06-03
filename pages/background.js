//수동설정
var inside = false;
//localStorage.setItem('User', "NULL");
localStorage.setItem('User',"amelia9981@ajou.ac.kr");
//localStorage.setItem("Current membership","PRO");
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text == "hide") {
        inside = false;
    }
    if (msg.UserInfo == "getUser")
        sendResponse({ UserInfo: localStorage.getItem("User") });
    console.log(localStorage.getItem("Current membership"))
    if (msg.Membership == 'getMembership')
        sendResponse({ Membership: localStorage.getItem("Current membership") }); // snub them.
});

chrome.commands.onCommand.addListener(function(command) {
    console.log(inside)
    if(bg_app.user){
        chrome.tabs.update({}, function (tab) {
            if (command == 'search-bar' && inside == false) {
                inside = true;
                chrome.tabs.sendMessage(tab.id, 'searchTabOn')
                //message send to youtube.js
            }
            else if (command == 'search-bar' && inside == true) {
                inside = false;
                chrome.tabs.sendMessage(tab.id, 'searchTabOff')
            }
        });
    }
    else{
        alert("Need to Log In First!");
    }
    // Call 'update' with an empty properties object to get access to the current
    // tab (given to us in the callback function).
    
});

async function init_firebase() {
    let firebase_config_path_src = '../config/firebase_config.json'
    let firebase_config_path = chrome.extension.getURL(firebase_config_path_src);
    firebase_config = await $.getJSON(firebase_config_path);
    firebase.initializeApp(firebase_config);
}

var bg_app = {

    user: null,
    db: null,
    auth: null,
    membership: "FREE",

    init: function() {
        console.log(firebase)
        this.db = firebase.firestore();
        this.auth = firebase.auth();
        this.load_user();
        chrome.runtime.onMessage.addListener(function(message, sender, reply) {
            console.log(message)
            if (message.fn in bg_app) {
                bg_app[message.fn](message, sender, reply)
            }
        });
    },

    add_listener: function() {
        var docRef = this.db.collection("user").doc(this.user.email);
        docRef.onSnapshot((doc) => {
            console.log("Current data: ", doc.data());
            this.membership = doc.data().membership;
            localStorage.setItem("membership", this.membership);
        });
    },

    load_user: function() {
        console.log("state = unknown (until the callback is invoked)");
        this.auth.onAuthStateChanged(user => {
            if (user) {
                console.log("state = definitely signed in" + user.email);
                this.user = user;
                this.add_listener();
                localStorage.setItem("User", this.user);
            } else {
                console.log("state = definitely signed out");
                this.user = null;
                this.membership = 'FREE';
                localStorage.setItem("User", null);
            }
        });
    },

    logOut: function() {
        this.auth.signOut().then(() => {}).catch((error) => {});
        this.user = null;
        localStorage.setItem("User", this.user);
        localStorage.setItem("membership", null);
    },

    get_user_status: function() {
        if (this.user) {
            return this.membership == 'PRO' ? 2 : 1;
        } else {
            return 0;
        }
    },

    get_video_id: function() {
        return window.location.href;
    },

    hide: function(message, sender, reply) {
        inside = false
    },
};

async function init() {
    await init_firebase();
    bg_app.init();
}
init()
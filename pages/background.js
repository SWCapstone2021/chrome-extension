chrome.runtime.onInstalled.addListener(() => {
    let indexdb = window.indexedDB.open("firebaseLocalStorageDb", 1);
    indexdb.onsuccess = function() {
        let db = indexdb.result;
        var objectStorageName = db.objectStoreNames[0];
        if (objectStorageName == "firebaseLocalStorage") {
            console.log("object storage already exists")
        } else {
            db.createObjectStore("firebaseLocalStorage", { keyPath: "fbase_key" });
            console.log("object storage is created")
        }
    };
});

var inside=false;
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text == "hide") {
        inside = false;
    }
    if (msg.UserInfo == "getUser")
        sendResponse({ UserInfo: localStorage.getItem("User") });
        console.log(localStorage.getItem("Current membership"))
    if (msg.Membership=='getMembership')
        sendResponse({ Membership: localStorage.getItem("Current membership")}); // snub them.
});

chrome.commands.onCommand.addListener(function (command) {
    console.log(inside)
    // Call 'update' with an empty properties object to get access to the current
    // tab (given to us in the callback function).
    chrome.tabs.update({}, function (tab) {
        if (command == 'search-bar'&& inside==false) {
            inside=true;
            chrome.tabs.sendMessage(tab.id,'searchTabOn')
            //message send to youtube.js
        }
        else{
            inside=false;
            chrome.tabs.sendMessage(tab.id,'searchTabOff')
        }
    });
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
        });
    },

    load_user: function() {
        console.log("state = unknown (until the callback is invoked)");
        this.auth.onAuthStateChanged(user => {
            if (user) {
                console.log("state = definitely signed in"+user.email);
                this.user = user;
                this.load_membership();
                localStorage.setItem("User",this.user);
            } else {
                console.log("state = definitely signed out");
                this.user = null;
                this.membership = 'FREE';
                localStorage.setItem("User", null);
            }
        });
    },

    load_membership: function() {
        var docRef = this.db.collection("user").doc(this.user.email);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("load_membership:", doc.data());
                this.add_listener();
                this.membership = doc.data().membership
                localStorage.setItem("Current membership", this.membership);
            } else {
                // doc.data() will be undefined in this case
                console.log("load_membership: no document");
                this.membership = "FREE"
                localStorage.setItem("Current membership", this.membership);
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    },

    logIn: function(message, sender, reply) {
        console.log("Received %o from %o, frame", message, sender.tab, sender.frameId);
        var user = message.text;
        let indexdb = window.indexedDB.open("firebaseLocalStorageDb", 1);
        indexdb.onsuccess = function() {
            let db = indexdb.result;
            let transaction = db.transaction("firebaseLocalStorage", "readwrite");
            let storage = transaction.objectStore("firebaseLocalStorage");
            let request = storage.getAll();
            request.onsuccess = function(event) {
                console.log("login")
                console.log(user);
                console.log(user.value);
                console.log(request.result)
                storage.add(user);
            };
        };
        this.user = user;
        reply("Gotcha!");
    },

    logOut: function(message, sender, reply) {
        console.log("Received %o from %o, frame", message, sender.tab, sender.frameId);
        this.logOut_fn();
        reply("Gotcha!");
    },

    logOut_fn: function() {
        this.auth.signOut().then(() => {}).catch((error) => {});
        this.user = null;
        localStorage.setItem("User", this.user);
        localStorage.setItem("Current membership", null);
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
    }
};

async function init() {
    await init_firebase();
    bg_app.init();
}
init()
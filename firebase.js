var firebaseConfig={
    apiKey:"AIzaSyA0pL64xTd1VMWhLJULY4NJR2wKhDa0Z5c",
    authDomain:"apcfindu.firebaseapp.com",
    projectId:"apcfindu",
    storageBucket:"apcfindu.appspot.com",
    messagingSenderId:"599927951202",
    appId:"1: 599927951202: web: a6f4cb8a43e202452fe63b",
    measurementId:"G - LKDKLT4ET4"
}

firebase.initializeApp(firebaseConfig)
console.log(firebase)

var shown = false;
chrome.commands.onCommand.addListener(function (command) {
    // Call 'update' with an empty properties object to get access to the current
    // tab (given to us in the callback function).
    chrome.tabs.update({}, function (tab) {
        var loc = tab.url;
        if (command == 'search-bar' && loc.substring(0, 29) == 'https://www.youtube.com/watch' && !shown) {
            //send message to main.js
            chrome.tabs.sendMessage(tab.id, "insideTrue");
            shown = true;
            //get data from firebase 
            /*var db = firebase.firestore().collection("users").doc("amelia9981@naver.com");
            db.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });*/
        }
        else if (shown) {
            chrome.tabs.sendMessage(tab.id, "insideFalse");
            shown = false
        }

    });
});

chrome.runtime.onMessage.addListener((msg, sender, resp) => {
    if (msg.command == "fetch") {
       
    }
    if (msg.command == "post") {

    }
})
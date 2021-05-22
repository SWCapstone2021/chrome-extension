async function init_firebase() {
    let firebase_config_path_src = 'config/firebase_config.json'
    let firebase_config_path = chrome.extension.getURL(firebase_config_path_src);
    firebase_config = await $.getJSON(firebase_config_path);
    console.log(firebase_config_path)
    firebase.initializeApp(firebase_config);
}

function check_login() {
    console.log("state = unknown (until the callback is invoked)");
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("state = definitely signed in");
            if (!("indexedDB" in window)) {
                alert("This browser doesn't support IndexedDB");
            } else {
                let indexdb = window.indexedDB.open("firebaseLocalStorageDb", 1);
                indexdb.onsuccess = function() {
                    let db = indexdb.result;
                    let transaction = db.transaction("firebaseLocalStorage", "readwrite");
                    let storage = transaction.objectStore("firebaseLocalStorage");
                    let request = storage.getAll();
                    request.onsuccess = function(event) {
                        sendBackground("logIn", request.result[0]);
                    };
                };
            }
        } else {
            console.log("state = definitely signed out");
            sendBackground("logOut", "logout")
        }
    });
}

function sendBackground(fn, msg) {
    chrome.runtime.sendMessage({ fn: fn, text: msg }, function(response) {
        console.log("Response: ", response);
    });
}

async function init() {
    await init_firebase();
    check_login();
}

init();
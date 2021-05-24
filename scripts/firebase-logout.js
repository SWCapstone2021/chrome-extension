async function init_firebase() {
    let firebase_config_path_src = 'config/firebase_config.json'
    let firebase_config_path = chrome.extension.getURL(firebase_config_path_src);
    firebase_config = await $.getJSON(firebase_config_path);
    console.log(firebase_config_path)
    firebase.initializeApp(firebase_config);
    console.log("firebase-logout")
    firebase.auth().signOut().then(() => {}).catch((error) => {});
}

init_firebase();

// if (!("indexedDB" in window)) {
//     alert("This browser doesn't support IndexedDB");
// } else {
//     console.log("firebase-logout")
//     let indexdb = window.indexedDB.open("firebaseLocalStorageDb", 1);
//     indexdb.onsuccess = function() {
//         let db = indexdb.result;
//         let transaction = db.transaction("firebaseLocalStorage", "readwrite");
//         let storage = transaction.objectStore("firebaseLocalStorage");
//         let request = storage.getAll();
//         console.log("firebase-logout: request")
//         request.onsuccess = function(event) {
//             storage.delete(request.result[0]);
//         };
//     };
// }
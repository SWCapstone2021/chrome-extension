var firebaseConfig = {
    apiKey: "AIzaSyA0pL64xTd1VMWhLJULY4NJR2wKhDa0Z5c",
    authDomain: "apcfindu.firebaseapp.com",
    projectId: "apcfindu",
    storageBucket: "apcfindu.appspot.com",
    messagingSenderId: "599927951202",
    appId: "1: 599927951202: web: a6f4cb8a43e202452fe63b",
    measurementId: "G - LKDKLT4ET4"
}

firebase.initializeApp(firebaseConfig)
console.log(firebase)
user = firebase.auth().currentUser;
console.log(user)

function login() {
    var x = document.getElementById("login");
    if (user) {
        console.log("user login");
        x.style.display = "none";
    } else {
        x.style.display = "block";
        console.log("user not login");
    }
}

login()
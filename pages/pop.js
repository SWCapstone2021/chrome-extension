var background = chrome.extension.getBackgroundPage();
var user_status = background.bg_app.get_user_status();
console = background.console

async function init_firebase() {
    let firebase_config_path_src = '../config/firebase_config.json'
    let firebase_config_path = chrome.extension.getURL(firebase_config_path_src);
    firebase_config = await $.getJSON(firebase_config_path);
    firebase.initializeApp(firebase_config);
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth())
    }
    const uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult(authResult, redirectUrl) {
                update();
                return false
            },
            uiShown() {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none'
            },
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        // eslint-disable-next-line no-undef
        // signInSuccessUrl: `/popup`,
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        // tosUrl: '/profile',
        // Privacy policy url.
        // privacyPolicyUrl: '<your-privacy-policy-url>'
    }

    ui.start('#firebaseui-auth-container', uiConfig)
}

async function isUserLogin() {
    if (user_status == 0) {
        document.getElementById("login").style.display = "blcok";
        document.getElementById("not_login").style.display = "none";
        init_firebase();
    } else {
        document.getElementById("not_login").style.display = "block";
        document.getElementById("login").style.display = "none";
    }
}

async function init() {
    isUserLogin()
    document.getElementById("sign_out_btn").onclick = function() {
        background.bg_app.logOut()
    }
    if (user_status != 0) {
        //     var user_name = background.bg_app.user.displayName;
        console.log(background.bg_app.user.email)
        var user_email = background.bg_app.user.email;
        document.getElementById("email").innerText = user_email
        document.getElementById("plan").innerText = user_status == 2 ? "PRO" : "FREE"
    }
}

function update() {}

init()
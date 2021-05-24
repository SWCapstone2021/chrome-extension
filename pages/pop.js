var background = chrome.extension.getBackgroundPage();
var user_status = background.bg_app.get_user_status()
console = background.console

function isUserLogin() {
    if (user_status == 0) {
        document.getElementById("not_login").style.display = "none";
    } else {
        document.getElementById("login").style.display = "none";
    }
}

function init() {
    isUserLogin();
    document.getElementById("sign_out_btn").onclick = function() {
        background.bg_app.logOut_fn()
    }
}

init()
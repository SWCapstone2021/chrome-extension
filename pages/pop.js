var background = chrome.extension.getBackgroundPage();
var user_status = background.bg_app.get_user_status()
console = background.console

console.log(user_status)

if (user_status == 0) {
    document.getElementById("not_login").style.display = "none";
} else {
    document.getElementById("login").style.display = "none";
}
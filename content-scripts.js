var imgURL = chrome.runtime.getURL("images/good.png");
var title = document.querySelectorAll('#metadata-line');
for (i = 0; i < title.length; i++) {
    var node = document.createElement("SPAN");
    var textnode = document.createTextNode(`키워드 ${i}`);
    var imagenode = document.createElement("img")
    imagenode.src = imgURL;
    node.style.color = "red";
    node.appendChild(textnode);
    node.append(imagenode)
    title[i].appendChild(node);
}
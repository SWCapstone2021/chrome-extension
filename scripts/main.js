

function main(loc) {
    var position = document.querySelector('ytd-two-column-search-results-renderer')
    console.log(position)
    var currentstate = document.readyState;
    console.log(currentstate + loc)
    if (loc.substring(0, 44) == 'https://www.youtube.com/results?search_query') {
            var title = document.querySelectorAll('#metadata-line');
            console.log(title)
            for (i = 0; i < title.length; i++) {
                var node = document.createElement("SPAN");
                var textnode = document.createTextNode(`키워드 ${i}`);
                node.style.color = "red";
                node.appendChild(textnode);
                title[i].appendChild(node);
            }
            chrome.runtime.reload()

    }
    
    
    /*if (loc.substring(0, 44) =='https://www.youtube.com/results?search_query' && position){
        var title = position.querySelectorAll('#metadata-line');
        console.log(title)
        for (i = 0; i < title.length; i++) {
            var node = document.createElement("SPAN");
            var textnode = document.createTextNode(`키워드 ${i}`);
            node.style.color = "red";
            node.appendChild(textnode);
            title[i].appendChild(node);
        }
    }*/
    if (loc.substring(0, 29) == 'https://www.youtube.com/watch') {
        
}
helpers.onUrlChange(main);


//ctrl+shift+F 한번에 show 두번에 hide
var insideTab = document.createElement('iframe');
insideTab.classList.add('insideTab');
insideTab.id = 'innerTab';
insideTab.width="0px";
insideTab.height="0px";
var search_tab_loc = document.querySelector("#container .html5-video-player");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message)
    if (message == "insideTrue") {
        insideTab.width = "250px";
        insideTab.height = "300px";
        insideTab.style = "top:10%;left:60%;position:absolute;z-index:99999;overflow:hidden;";
        insideTab.src = "chrome-extension://" + chrome.runtime.id + "/pages/innerSearch.html";
    } else if (message == "insideFalse") {
        insideTab.width = "0px";
        insideTab.height = "0px";
    } else if (message == "overlayOn") {
        renderTime(200)
    }
}

var head=document.querySelector('head')
var meta = document.createElement('meta')
meta.httpEquiv="Content-Security-Policy"
meta.content="upgrade-insecure-requests"
head.append(meta)

var sideDiv = document.createElement('div');
var sideTab = document.createElement('iframe');
sideTab.id = 'tab_frame'
sideTab.height = "0"
sideTab.width ="0"
var searchTabShown = false;
var summaryTabShown = false;

var sideBarDiv = document.createElement('div');
sideBarDiv.id = 'sideBarDiv';
sideBarDiv.style.width='70px';

var sideButtonSearch = document.createElement('button');
sideButtonSearch.id='sideButtonSearch';
sideButtonSearch.innerHTML = '<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>	<g>		<path d="M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474 c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323 		c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848 S326.847,409.323,225.474,409.323z"/>	</g></g><g>	<g>		<path d="M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328 			c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
sideButtonSearch.addEventListener('click',()=>{
    if (searchTabShown){
        searchTabShown = false;
        summaryTabShown = false;
        settingTabShown = false;
        sideTab.height = "1px"
        sideTab.width = "1px"
        sideTab.style.border = "0px"
        sideButtonSearch.style.backgroundColor = "#ffffff";
    }
    else{
        searchTabShown=true;
        summaryTabShown = false;
        settingTabShown = false;
        sideTab.height = "500px"
        sideTab.width = "100%"
        sideTab.style.border = "1px solid #3c98c0"
        sideTab.src = "chrome-extension://" + chrome.runtime.id + "/pages/searchTab.html"
        sideButtonSearch.style.backgroundColor = "#90CAF9";
        sideButtonSummary.style.backgroundColor = "#ffffff";
    }
})

var sideButtonSummary = document.createElement('button');
sideButtonSummary.id = 'sideButtonSummary';
sideButtonSummary.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height ="100%" viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 469.333 469.333;" xml:space="preserve"><g>	<g>	<g>	<path d="M53.333,106.667H416c29.417,0,53.333-23.927,53.333-53.333S445.417,0,416,0H53.333C23.917,0,0,23.927,0,53.333 S23.917,106.667,53.333,106.667z M53.333,21.333H416c17.646,0,32,14.354,32,32c0,17.646-14.354,32-32,32H53.333 c-17.646,0-32-14.354-32-32C21.333,35.687,35.687,21.333,53.333,21.333z"/><path d="M416,181.333H53.333C23.917,181.333,0,205.26,0,234.667S23.917,288,53.333,288H416c29.417,0,53.333-23.927,53.333-53.333 S445.417,181.333,416,181.333z M416,266.667H53.333c-17.646,0-32-14.354-32-32s14.354-32,32-32H416c17.646,0,32,14.354,32,32 				S433.646,266.667,416,266.667z"/>			<path d="M416,362.667H53.333C23.917,362.667,0,386.594,0,416s23.917,53.333,53.333,53.333H416 c29.417,0,53.333-23.927,53.333-53.333S445.417,362.667,416,362.667z M416,448H53.333c-17.646,0-32-14.354-32-32 c0-17.646,14.354-32,32-32H416c17.646,0,32,14.354,32,32C448,433.646,433.646,448,416,448z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
sideButtonSummary.addEventListener('click', () => {
    if (summaryTabShown) {
        sideTab.height = "1px"
        sideTab.width = "1px"
        sideTab.style.border = "0px"
        searchTabShown = false;
        summaryTabShown=false;
        settingTabShown = false;
        sideButtonSummary.style.backgroundColor = "#ffffff";
    }
    else {
        summaryTabShown=true;
        searchTabShown = false;
        settingTabShown = false;
        sideTab.height = "500px";
        sideTab.width = "100%";
        sideTab.style.border = "1px solid #3c98c0"
        sideTab.src = "chrome-extension://" + chrome.runtime.id + "/pages/summaryTab.html"
        sideButtonSummary.style.backgroundColor = "#90CAF9";
        sideButtonSearch.style.backgroundColor="#ffffff";
    }
})

var searchShown = false;
var SideBarShown = false;
var loc = window.location.href;

async function sendData(loc){
    if(loc.substring(0,29)=="https://www.youtube.com/watch"){
        var videoID = loc.substring(32, loc.length)
        $.get("http://202.30.30.3:5678/api/scripts", function (data) {
            console.log("Load was performed.");
        });
    }
    if(loc.substring(0,44)=="https://www.youtube.com/results?search_query"){

    }
}

const helpers = {
    onUrlChange(callback) {
        let href = "";
        return setInterval(function () {
            if (href !== window.location.href) {
                href = window.location.href;
                callback(href);
            }
        }, 1);
    },
    isVideoURL(url) {
        return url.indexOf(`https://${window.location.host}/watch`) === 0;
    }
};

function main(loc) {
    if (loc.substring(0, 44) =='https://www.youtube.com/results?search_query'){
        var title = document.querySelectorAll('#metadata-line');
        for (i = 0; i < title.length; i++) {
            var node = document.createElement("SPAN");
            var textnode = document.createTextNode(`키워드 ${i}`);
            //var imagenode = document.createElement("img")
            //imagenode.src = imgURL;
            node.style.color = "red";
            node.appendChild(textnode);
            //node.append(imagenode)
            title[i].appendChild(node);
        }
    }
    if (loc.substring(0, 29) == 'https://www.youtube.com/watch') {
        sideButtonSearch.classList.add('sideButtonSearch');
        sideButtonSummary.classList.add('sideButtonSummary');
        ;(function insertEl(){
            var side = document.evaluate(
                '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]',
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue;
            if(side!=null && side.className != null){
                side.append(sideBarDiv);
                sideBarDiv.appendChild(sideButtonSearch);
                sideBarDiv.appendChild(sideButtonSummary);
                SideBarShown = true;
            } else{
                setTimeout(insertEl,200);
            }
        })()
        sideDiv.classList.add('sideDiv');
        sideTab.classList.add('sideTab');
        var side_tab_loc = document.evaluate(
            '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]/div[2]/div',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
        side_tab_loc.insertBefore(sideDiv,side_tab_loc.firstChild);
        sideDiv.appendChild(sideTab);
    }
}

helpers.onUrlChange(main);


//ctrl+shift+F 한번에 show 두번에 hide
var insideTab = document.createElement('iframe');
insideTab.classList.add('insideTab');
insideTab.id = 'innerTab';
insideTab.width="0px";
insideTab.height="0px";
var search_tab_loc = document.querySelector("#container .html5-video-player");
var tri_loc = document.querySelector("#container .html5-video-player .ytp-timed-markers-container")
search_tab_loc.appendChild(insideTab);
var tri = document.createElement('img');
var triUrl=chrome.runtime.getURL("../pages/img/triangle.svg")
tri.src = triUrl
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendResponse){
    console.log(message)
    if(message=="insideTrue"){
        insideTab.width = "250px";
        insideTab.height = "300px";
        insideTab.style = "top:10%;left:60%;position:absolute;z-index:99999;overflow:hidden;";
        insideTab.src = "chrome-extension://" + chrome.runtime.id + "/pages/innerSearch.html";
        tri.style = "left: 20%; bottom:14.3px;position: absolute; z-index: 99999; overflow: hidden;"
        tri_loc.appendChild(tri)
    }
    else if(message =="insideFalse"){
        insideTab.width = "0px";
        insideTab.height = "0px";
    }
    else if(message == "overlayOn"){
        tri.style ="left: 20%; bottom:14.3px;position:absolute;z-index:99999;overflow:hidden;"
        search_tab_loc.appendChild(tri)
    }
}

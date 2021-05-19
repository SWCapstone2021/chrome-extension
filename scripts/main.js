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
var settingTabShown = false;

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
        sideButtonSetting.style.backgroundColor = "#ffffff";
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
        sideButtonSetting.style.backgroundColor="#ffffff";
    }
})

var sideButtonSetting = document.createElement('button');
sideButtonSetting.id = 'sideButtonSetting';
sideButtonSetting.innerHTML = '<svg id="Layer_1" enable-background="new 0 0 24 24" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><g><path d="m13.12 24h-2.24c-.757 0-1.396-.567-1.486-1.32l-.239-1.876c-.477-.155-.937-.346-1.374-.569l-1.494 1.161c-.606.469-1.459.415-1.985-.126l-1.575-1.575c-.537-.521-.591-1.374-.122-1.979l1.161-1.495c-.224-.437-.415-.897-.569-1.374l-1.88-.239c-.75-.092-1.317-.731-1.317-1.488v-2.24c0-.757.567-1.396 1.32-1.486l1.876-.239c.155-.477.346-.937.569-1.374l-1.16-1.494c-.47-.606-.415-1.46.127-1.986l1.575-1.575c.521-.537 1.375-.59 1.979-.122l1.494 1.162c.437-.223.897-.414 1.375-.569l.239-1.88c.09-.75.729-1.317 1.486-1.317h2.24c.757 0 1.396.567 1.486 1.32l.239 1.876c.478.155.938.346 1.375.569l1.494-1.161c.607-.469 1.459-.415 1.985.127l1.575 1.575c.537.521.591 1.374.122 1.979l-1.161 1.495c.224.437.415.897.569 1.374l1.88.239c.749.091 1.316.73 1.316 1.487v2.24c0 .757-.567 1.396-1.32 1.486l-1.876.239c-.155.477-.346.937-.569 1.374l1.161 1.494c.47.606.415 1.459-.127 1.985l-1.575 1.575c-.521.537-1.375.592-1.979.122l-1.495-1.161c-.437.224-.897.415-1.374.569l-.239 1.88c-.091.75-.73 1.317-1.487 1.317zm-5.39-4.86c.083 0 .168.021.244.063.551.308 1.148.556 1.774.736.192.055.333.219.358.417l.28 2.2c.03.251.247.444.494.444h2.24c.247 0 .464-.193.493-.439l.281-2.204c.025-.198.166-.362.358-.417.626-.18 1.223-.428 1.774-.736.175-.098.393-.081.55.042l1.75 1.36c.201.156.483.143.655-.034l1.585-1.585c.181-.176.195-.458.039-.66l-1.36-1.75c-.123-.158-.14-.375-.042-.55.308-.551.556-1.148.736-1.774.055-.192.219-.333.417-.358l2.2-.28c.251-.031.444-.248.444-.495v-2.24c0-.247-.193-.464-.439-.493l-2.204-.281c-.198-.025-.362-.166-.417-.358-.18-.626-.428-1.223-.736-1.774-.098-.175-.082-.392.042-.55l1.36-1.75c.157-.202.143-.484-.033-.654l-1.585-1.585c-.175-.182-.458-.196-.66-.039l-1.75 1.36c-.159.123-.376.14-.551.042-.549-.308-1.146-.555-1.774-.736-.192-.055-.333-.219-.358-.417l-.28-2.2c-.031-.252-.248-.445-.495-.445h-2.24c-.247 0-.464.193-.493.439l-.281 2.204c-.025.198-.166.362-.358.418-.628.18-1.225.428-1.774.735-.175.099-.392.081-.551-.041l-1.75-1.36c-.202-.157-.483-.143-.654.033l-1.585 1.586c-.181.176-.195.458-.039.66l1.36 1.75c.123.158.14.375.042.55-.309.551-.556 1.148-.736 1.774-.055.192-.219.333-.417.358l-2.2.28c-.251.03-.444.247-.444.494v2.24c0 .247.193.464.439.493l2.204.281c.198.025.362.166.417.358.18.626.428 1.223.736 1.774.098.175.082.392-.042.55l-1.36 1.75c-.157.202-.143.484.033.654l1.585 1.585c.175.181.456.195.66.039l1.75-1.36c.091-.068.199-.104.308-.104z"/></g><g><path d="m12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"/></g></svg>'

sideButtonSetting.addEventListener('click', () => {
    if (settingTabShown) {
        sideTab.height = "1px"
        sideTab.width = "1px"
        sideTab.style.border = "0px"
        settingTabShown=false;
        summaryTabShown = false;
        searchTabShown = false;
        sideButtonSetting.style.backgroundColor = "#ffffff";
    }
    else {
        settingTabShown=true;
        summaryTabShown = false;
        searchTabShown = false;
        sideTab.height = "500px"
        sideTab.width = "100%"
        sideTab.style.border = "1px solid #3c98c0"
        sideTab.src = "chrome-extension://" + chrome.runtime.id + "/pages/settingTab.html"
        sideButtonSetting.style.backgroundColor = "#90CAF9";
        sideButtonSearch.style.backgroundColor = "#ffffff";
        sideButtonSummary.style.backgroundColor = "#ffffff";
    }
})

var searchShown = false;
var SideBarShown = false;
var loc = window.location.href;

async function main(loc) {
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
        var videoID=loc.substring(32, loc.length)
        $.get("http://202.30.30.3:5678/api/scripts", function (data) {
            console.log("Load was performed.");
        });
        /*$.get("https://naver.com/", function(data){
            console.log("Problem solved", data);
        })*/
        sideButtonSearch.classList.add('sideButtonSearch');
        sideButtonSummary.classList.add('sideButtonSummary');
        sideButtonSetting.classList.add('sideButtonSetting');
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
                sideBarDiv.appendChild(sideButtonSetting);
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
main(loc)


//ctrl+shift+F 한번에 show 두번에 hide
var insideTab = document.createElement('iframe');
insideTab.classList.add('insideTab');
insideTab.id = 'innerTab';
insideTab.width="0px";
insideTab.height="0px";
var search_tab_loc = document.querySelector("#container .html5-video-player");
search_tab_loc.appendChild(insideTab);

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendResponse){
    console.log(message)
    if(message=="insideTrue"){
        insideTab.width = "250px";
        insideTab.height = "300px";
        insideTab.style = "top:10%;left:60%;position:absolute;z-index:99999;overflow:hidden;";
        insideTab.src = "chrome-extension://" + chrome.runtime.id + "/pages/innerSearch.html"
    }
    else{
        insideTab.width = "0px";
        insideTab.height = "0px";
    }
}

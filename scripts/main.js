

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
        sideButtonSearch.classList.add('sideButtonSearch');
        sideButtonSummary.classList.add('sideButtonSummary');
        sideButtonSetting.classList.add('sideButtonSetting');
        (function insertEl() {
            var side = document.evaluate(
                '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]',
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue;
            if (side != null && side.className != null) {
                side.append(sideBarDiv);
                sideBarDiv.appendChild(sideButtonSearch);
                sideBarDiv.appendChild(sideButtonSummary);
                sideBarDiv.appendChild(sideButtonSetting);
                SideBarShown = true;
            } else {
                setTimeout(insertEl, 200);
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
        side_tab_loc.insertBefore(sideDiv, side_tab_loc.firstChild);
        sideDiv.appendChild(sideTab);
        renderTime(200);
    }
}
helpers.onUrlChange(main);

var code = document.getElementsByClassName("video-stream");
var wholeT = code[0].duration;
wholeT = parseInt(wholeT)
console.log(timeToString(wholeT)); // 분 & 초로 변경

var resultT = []

function renderTime(time) {
    var current = time * 100 / wholeT; //타임스탬프찍은거 비율 계산
    //삼각형 추가부분 넣기
    var tri_loc = document.querySelector("#container .html5-video-player .ytp-timed-markers-container")
    var tri = document.createElement('img');
    var triUrl = chrome.runtime.getURL("../pages/img/triangle.svg")
    tri.src = triUrl
    tri.style = "bottom:5%; position: absolute; z-index: 99999; overflow: hidden;"
    tri_loc.appendChild(tri)
    console.log(current);
}

//ctrl+shift+F 한번에 show 두번에 hide
var insideTab = document.createElement('iframe');
insideTab.classList.add('insideTab');
insideTab.id = 'innerTab';
insideTab.width = "0px";
insideTab.height = "0px";
var search_tab_loc = document.querySelector("#container .html5-video-player");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message)
    if (message == "ine") {
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




//분 -> 초 & 초->분
function stringToTime(timeString) {
    timeString = timeString.replace("s", "").replace("m", "").replace("h", "");
    var timeSecond = 0;
    weight = 0.1;
    var _tl = timeString.length;
    for (var i = 0; i < _tl; i++) {
        if (i != 0 && i % 2 == 0) { weight *= 6; } else { weight *= 10; }
        timeSecond += weight * Number(timeString[_tl - i - 1]);
        //console.log (timeSecond + ' ' + timeString[_tl-i-1]);
    }
    return timeSecond;
}

function timeToString(timeSecond) {
    if (timeSecond < 60)
        return "00:" + (timeSecond % 60);
    else if (timeSecond < 3600)
        return parseInt(timeSecond / 60) + ":" + (timeSecond % 60); //' + "s";
    else
        return parseInt(timeSecond / 3600) + ":" + parseInt((timeSecond % 3600) / 60) + ":" + (timeSecond % 60);
}

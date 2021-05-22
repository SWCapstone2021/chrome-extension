var head = document.querySelector('head')
var meta = document.createElement('meta')
meta.httpEquiv = "Content-Security-Policy"
meta.content = "upgrade-insecure-requests"
head.append(meta)
var url = window.location.href;

const helpers = {
    onUrlChange(callback) {
        let href = "";
        return setInterval(function() {
            if (href !== window.location.href) {
                href = window.location.href;
                callback(href);
            }
        }, 111);
    },
    isVideoURL(url) {
        return url.indexOf(`https://${window.location.host}/watch`) === 0;
    }
};
const Search = {
    imgurl: '../pages/img/loupe.svg',
    taburl: "chrome-extension://" + chrome.runtime.id + "/pages/searchTab.html",
    tabshown: false
}
const Summary = {
    imgurl: '../pages/img/menu.svg',
    taburl: "chrome-extension://" + chrome.runtime.id + "/pages/summaryTab.html",
    tabshown: false
}
const Setting = {
    imgurl: '../pages/img/settings.svg',
    taburl: "chrome-extension://" + chrome.runtime.id + "/pages/settingTab.html",
    tabshown: false
}
const render = {

    sideTab: null,
    sideTabVisible: false,

    init() {
        this.sideTabS();
        this.sideTab.height = "0px";
        this.sideTab.width = "0px";
        this.sideTab.src = "";
    },
    sideTabS() {
        this.sideTab = document.createElement('iframe');
        this.sideTab.id = 'tab_frame'
        this.sideTab.height = "500px";
        this.sideTab.width = "100%";
        this.sideTab.src = "";
        this.sideTab.style.border = "1px solid #3c98c0";
        var check = document.querySelector('tab_frame');
        if (!check) {
            var side_tab_loc = document.querySelector('div#secondary.style-scope.ytd-watch-flexy')
            side_tab_loc.insertBefore(this.sideTab, side_tab_loc.firstChild);
        }
    },
    baseButton() {
        const button = document.createElement("button");
        button.id = 'side-button'
        button.style.display = "flex";
        button.style.textAlign = "center";
        button.classList.add("sideButton");
        return button;
    },
    makeButton(tab_name) {
        this.init();
        const button = render.baseButton();
        const insideImg = document.createElement('img');
        insideImg.src = chrome.runtime.getURL(tab_name.imgurl);
        button.appendChild(insideImg);
        button.addEventListener('click', () => {
            if (tab_name.tabshown) {
                this.sideTab.width = "0px";
                this.sideTab.height = "0px";
                Search.tabshown = false;
                Setting.tabshown = false;
                Summary.tabshown = false;
            } else {
                Search.tabshown = false;
                Setting.tabshown = false;
                Summary.tabshown = false;
                tab_name.tabshown = true;
                this.sideTab.height = "500px";
                this.sideTab.width = "100%";
                this.sideTab.src = tab_name.taburl
            }
        })
        return button;
    },
    //side button render
    sideBar() {
        var sideButtonBar = document.createElement('div');
        sideButtonBar.id = 'sideBarDiv';
        sideButtonBar.style.width = '70px';
        const searchB = render.makeButton(Search);
        const summaryB = render.makeButton(Summary);
        const settingB = render.makeButton(Setting);
        sideButtonBar.appendChild(searchB);
        sideButtonBar.appendChild(summaryB);
        sideButtonBar.appendChild(settingB);
        return sideButtonBar;
    },
    triangle(leftpercent) {
        const tri_loc = document.querySelector("#container .html5-video-player .ytp-timed-markers-container")
        const tri = document.createElement('img');
        tri.src = chrome.runtime.getURL("../pages/img/triangle.svg");
        tri.style = "bottom:5%; position: absolute; z-index: 99999; overflow: hidden;"
        tri_loc.appendChild(tri)

    }
}

function showTimeStamp(time) {
    var code = document.getElementsByClassName("video-stream");
    var wholeT = code[0].duration;
    wholeT = parseInt(wholeT)
    console.log(timeToString(wholeT)); // 분 & 초로 변경
    var current = time * 100 / wholeT; //타임스탬프찍은거 비율 계산
    render.triangle(current)
}

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


function main(url) {
    //신뢰도
    if (url.substring(0, 44) == 'https://www.youtube.com/results?search_query') {
        // var title = document.querySelectorAll('#metadata-line');
        // console.log(title)
        // for (i = 0; i < title.length; i++) {
        //     var node = document.createElement("SPAN");
        //     var textnode = document.createTextNode(`키워드 ${i}`);
        //     node.style.color = "red";
        //     node.appendChild(textnode);
        //     title[i].appendChild(node);
        // }
        // chrome.runtime.reload()
    }
    //사이드 버튼 처리
    if (url.substring(0, 29) == 'https://www.youtube.com/watch') {
        const sidebar = render.sideBar();
        const sidebarposition = document.querySelector('div#columns.style-scope.ytd-watch-flexy');
        sidebarposition.append(sidebar);
    }
}

helpers.onUrlChange(main);
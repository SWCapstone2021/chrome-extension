var head = document.querySelector('head')
var meta = document.createElement('meta')
meta.httpEquiv = "Content-Security-Policy"
meta.content = "upgrade-insecure-requests"
head.append(meta)

const helpers = {
    onUrlChange(callback) {
        let href = "";
        return setInterval(function () {
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

const render = {
    
    sideTab: null,
    sideTabVisible: false,

    init(){
        this.sideTabS();
    },
    sideTabS() {
        this.sideTab = document.createElement('iframe');
        this.sideTab.id = 'tab_frame'
        this.sideTab.height = "500px";
        this.sideTab.width = "100%";
        this.sideTab.src = "";
        this.sideTab.style.border = "1px solid #3c98c0";
        var check= document.querySelector('tab_frame');
        if(!check){
            var side_tab_loc = document.querySelector('div#secondary.style-scope.ytd-watch-flexy')
            side_tab_loc.insertBefore(this.sideTab, side_tab_loc.firstChild);
        }
        if(this.sideTabVisible==false){
            this.sideTab.width="0px";
            this.sideTab.height="0px";
        }
    },
    baseButton() {
        const button = document.createElement("button");
        button.id='side-button'
        button.style.display = "flex";
        button.style.textAlign = "center";
        button.classList.add("sideButton");
        return button;
    },
    searchButton() {
        this.init();
        const button = render.baseButton();
        const insideImg = document.createElement('img');
        insideImg.src = chrome.runtime.getURL('../pages/img/loupe.svg');
        button.appendChild(insideImg);
        button.addEventListener('click', () => {
            if (this.sideTabVisible) {
                this.sideTabVisible=false;
                this.sideTab.width = "0px";
                this.sideTab.height = "0px";
            } else {
                this.sideTabVisible=true;
                this.sideTab.height = "500px";
                this.sideTab.width = "100%";
                this.sideTab.src = "chrome-extension://" + chrome.runtime.id + "/pages/searchTab.html"
            }
        })
        return button;
    },
    summaryButton() {
        this.init();
        const button = render.baseButton();
        const insideImg = document.createElement('img');
        insideImg.src = chrome.runtime.getURL('../pages/img/menu.svg');
        button.appendChild(insideImg);
        button.addEventListener('click', () => {
            if (this.sideTabVisible) {
                this.sideTabVisible=false;
                this.sideTab.width = "0px";
                this.sideTab.height = "0px";
            } else {
                this.sideTabVisible=true;
                this.sideTab.height = "500px";
                this.sideTab.width = "100%";
                this.sideTab.src = "chrome-extension://" + chrome.runtime.id + "/pages/summaryTab.html"
            }
        })
        return button;
    },
    settingButton() {
        this.init();
        const button = render.baseButton();
        const insideImg = document.createElement('img');
        insideImg.src = chrome.runtime.getURL('../pages/img/settings.svg');
        button.appendChild(insideImg);
        button.addEventListener('click', () => {
            if (this.sideTabVisible) {
                this.sideTabVisible=false;
                this.sideTab.width = "0px";
                this.sideTab.height = "0px";
            } else {
                this.sideTabVisible=true;
                this.sideTab.height = "500px";
                this.sideTab.width = "100%";
                this.sideTab.src = "chrome-extension://" + chrome.runtime.id + "/pages/settingTab.html"
            }
        })        
        return button;
    },
    //side button render
    sideBar() {
        var sideButtonBar = document.createElement('div');
        sideButtonBar.id = 'sideBarDiv';
        sideButtonBar.style.width = '70px';
        const search = render.searchButton();
        const summary = render.summaryButton();
        const setting = render.settingButton();
        sideButtonBar.appendChild(search);
        sideButtonBar.appendChild(summary);
        sideButtonBar.appendChild(setting);
        return sideButtonBar;
    },
    triangle(){
        const tri_loc = document.querySelector("#container .html5-video-player .ytp-timed-markers-container")
        const tri = document.createElement('img');
        tri.src = chrome.runtime.getURL("../pages/img/triangle.svg");
        tri.style = "bottom:5%; position: absolute; z-index: 99999; overflow: hidden;"
    }
}

var url = window.location.href;

function main(url){
    //신뢰도
    if(url.substring(0,44)==''){

    }
    //사이드 버튼 처리
    if(url.substring(0,29)=='https://www.youtube.com/watch'){
        const sidebar = render.sideBar();
        const sidebarposition = document.querySelector('div#columns.style-scope.ytd-watch-flexy');
        sidebarposition.append(sidebar);
    }
}

helpers.onUrlChange(main);
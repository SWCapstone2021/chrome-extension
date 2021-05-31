/*var head = document.querySelector('head')
var meta = document.createElement('meta')
meta.httpEquiv = "Content-Security-Policy"
meta.content = "upgrade-insecure-requests"
head.append(meta)*/
var url = window.location.href;
var user=null;
var membership = null;
//만약 user null 이면 로그인 필요 , user !null 이고 membership FREE이면 구독 필요
//여기서는 신뢰도만 제한
//검색 & 요약은 거기서 제약 적용함
chrome.runtime.sendMessage({ UserInfo: "getUser" }, function (response) {
    user = response.UserInfo; 
    if(response.UserInfo){
        chrome.runtime.sendMessage({Membership:"getMembership"},function(response){
            membership = response.Membership;
            console.log(response.Membership)
        })
    }
});

const helpers = {
    onUrlChange(callback) {
        let href = "";
        return setInterval(function() {
            if (href !== window.location.href) {
                href = window.location.href;
                callback(href);
            }
        }, 500);
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
            if(user != "NULL"){
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
            }
            else{
                alert("Need to Log In First!");
            }
        })
        return button;
    },
    //side button render
    sideBar() {
        var check = document.getElementById('sideBarDiv');
        if(!check){
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
        }
    },
    triangle(leftpercent) {
        const tri_loc = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar > div.ytp-chapters-container > div > div.ytp-progress-bar-padding")
        const tri = document.createElement('img');
        tri.id = 'triangle'
        tri.src = chrome.runtime.getURL("../pages/img/triangle.svg");
        tri.style = "left:" + leftpercent + "px; bottom: 5px; position: absolute; z-index: 99999; overflow: hidden;"
        tri_loc.appendChild(tri)
        console.log(tri);
    }
}

function showTimeStamp(time) {
    var code = document.getElementsByClassName("video-stream");
    var wholeT = code[0].duration;
    wholeT = parseInt(wholeT)
    console.log(wholeT)
    var current = time * 100 / wholeT; //타임스탬프찍은거 비율 계산
    var pad = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar > div.ytp-chapters-container > div > div.ytp-progress-bar-padding")
    var barpixel = pad.offsetWidth;
    var pixel = (barpixel*current / 100) - 10;
    console.log(pixel)
    render.triangle(pixel);
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
        /*if(user=="NULL"){
            alert("To Use FindU Need to Log In First");
        }*/
        var start = 0;
        var a = document.querySelector('ytd-search')
        console.log(a)
        if (a && user != "NULL") {
            console.log(a.querySelectorAll('#metadata-line'))
            setTimeout(function () {
                search_word = document.querySelector("input").value;
                var metatags = a.querySelectorAll('#metadata-line');
                var titles = a.querySelectorAll('#video-title.yt-simple-endpoint.style-scope.ytd-video-renderer');
                var prefix_len = "https://www.youtube.com/watch?v=".length
                var video_ids = []
                for (i = start; i < (titles.length > 10 ? 10 : titles.length); i++) {
                    var title = titles[i].href.split('=')[1].split('&')[0];
                    video_ids.push(title.substring(prefix_len, title.length))
                }
                var body = {
                    "video_id": video_ids
                }

                console.log(body)
                $.post("https://findyouu.xyz/api/ml/freq", body, function (data) {
                    console.log(data)
                    for (i = start; i < (data.result.length > 10 ? 10 : data.result.length); i++) {
                        var node = document.createElement("SPAN");
                        if (data.result[i].credibility == 'No subs') {
                            var textnode = document.createTextNode(`${data.result[i].credibility}`);
                            node.style.color = "black";
                            node.style.fontWeight = "900";
                        } else {
                            node.style.color = "red";
                            node.style.fontWeight = "900";
                            if (data.result[i].credibility == '0.00') {
                                node.style.color = "black";
                                node.style.fontWeight = "900";
                            }
                            var textnode = document.createTextNode(`신뢰도 ${data.result[i].credibility}`);
                        }
                        if (!metatags[i].innerText.includes("신뢰도") && !metatags[i].innerText.includes('No subs')) {
                            node.appendChild(textnode);
                            metatags[i].appendChild(node);
                            console.log("add reliablity")
                        }

                    }

                }, "json");
                title.length > 10 && start < title.length ? start += 10 : start = 0;
                chrome.runtime.reload();
                console.log(start)
            }, 1000);
        }

        //사이드 버튼 처리
        if (url.substring(0, 29) == 'https://www.youtube.com/watch') {
            var tabopen = document.getElementById('tab_frame');
            var intab = document.getElementById('innerTab')

            //if side tab open-> close
            if (tabopen) {
                tabopen.height = '0px';
                tabopen.width = '0px';
                Setting.tabshown = false;
                Search.tabshown = false;
                Summary.tabshown = false;
            }

            //if inside tab open -> close
            if (intab) {
                //send to background sideTabOff request
                chrome.runtime.sendMessage({ text: "hide" }, function (response) {
                    console.log("Response: ", response);
                });
                intab.width = '0px';
                intab.height = '0px';
                var pos = document.querySelector('div.ytp-progress-bar-padding')
                var result = document.querySelectorAll('#triangle')
                if (result) {
                    for (let i = 0; i < result.length; i++) {
                        pos.removeChild(result[i])
                    }
                }
            }
            else {
                var insideTab = document.createElement('iframe');
                insideTab.classList.add('insideTab');
                insideTab.id = 'innerTab';
                insideTab.width = "0px";
                insideTab.height = "0px";
                var search_tab_loc = document.querySelector("#container .html5-video-player");
                search_tab_loc.appendChild(insideTab)
            }
            var check = document.getElementById('sideBarDiv');
            console.log('sidebar check' + check)
            if (check == null) {
                var sideButtonBar = document.createElement('div');
                sideButtonBar.id = 'sideBarDiv';
                sideButtonBar.style.width = '70px';
                const searchB = render.makeButton(Search);
                const summaryB = render.makeButton(Summary);
                const settingB = render.makeButton(Setting);
                sideButtonBar.appendChild(searchB);
                sideButtonBar.appendChild(summaryB);
                sideButtonBar.appendChild(settingB);
                const sidebarposition = document.querySelector('div#columns.style-scope.ytd-watch-flexy');
                sidebarposition.append(sideButtonBar);
            }

            //to show result on the video
            window.addEventListener('message', function (e) {
                console.log(e.data)
                if (e.data.eraseData) {
                    var pos = document.querySelector('div.ytp-progress-bar-padding')
                    var result = document.querySelectorAll('#triangle')
                    if (result) {
                        for (let i = 0; i < result.length; i++) {
                            pos.removeChild(result[i])
                        }
                    }
                }
                if (e.data.childData) {
                    showTimeStamp(e.data.childData);
                }
                if (e.data.currentTime) {
                    console.log('inside')
                    var code = document.querySelector('#movie_player div.html5-video-container video');
                    code.currentTime = e.data.currentTime;
                }
                
            });

            //for opening inside search tab
            chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
                var insideTab = document.getElementById('innerTab')
                if (message == "searchTabOn") {
                    insideTab.width = "230px";
                    insideTab.height = "50px";
                    insideTab.style = "top:10%;left:50%;position:absolute;z-index:99999;overflow:hidden;";
                    insideTab.src = "chrome-extension://" + chrome.runtime.id + "/pages/innerSearch.html";
                }
                else if (message == 'searchTabOff') {
                    insideTab.width = "0px";
                    insideTab.height = "0px";
                }
            });
        }
    
}

helpers.onUrlChange(main)


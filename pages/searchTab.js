var videoID=0;
function getCurrentTabUrl(callback) {
    var queryInfo = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(queryInfo, function (tabs) {
        var tab = tabs[0];
        var url = tab.url;
        callback(url);
    })
}

function renderURL(statusText) {
    if (statusText.includes("watch?v=")) {
        videoID = statusText.split('v=')[1].split('&')[0];
        // document.getElementById('urls').textContent = "videoID = " + statusText.split('v=')[1].split('&')[0];
    }
}

getCurrentTabUrl(function (url) {
    renderURL(url);
    document.getElementById("btn_add").onclick = function () {
        console.log(videoID)
        var myList = document.getElementsByClassName('myList');
        var keyword = document.getElementById("txt_add").value;
        if (keyword != "") {
            //keyword 보내고 결과 받아야!!
            $.post(`https://findyouu.xyz/api/scripts/find-word`, { "video_id": videoID, "keyword": keyword }, function (data) {
                var data = data.result;
                console.log(data)
                for (var i = 0; i < data.length; i++)
                    myList[0].innerHTML += "<li><a target='_parent' href='https://www.youtube.com/watch?v=" + videoID + "&t=" + parseInt(data[i].start) + "s'>" + timeToString(parseInt(data[i].start)) + "</a><p>" + data[i].script + "</p></li>";
                for (var i = 0; i < data.length; i ++) {
                    window.parent.postMessage({ childData: data[i].start }, '*');
                }
            }, "json");

            before_document = document
        }
    }
        /*$('#sample_ui').on('click', function() {
console.log('hello')
var $video_container = before_document.getElementsByClassName('html5-video-player')[0];
console.log($video_container)
$("#container .html5-video-player").load("https://www.youtube.com/watch?" + video_id + "&t=55s");
})
} else {
alert("검색어가 없습니다!");
}

*/
})
function timeToString(timeSecond) {
    if (timeSecond < 60)
        return "00:" + (timeSecond % 60);
    else if (timeSecond < 3600)
        return parseInt(timeSecond / 60) + ":" + (timeSecond % 60); //' + "s";
    else
        return parseInt(timeSecond / 3600) + ":" + parseInt((timeSecond % 3600) / 60) + ":" + (timeSecond % 60);
}

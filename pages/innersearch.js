var videoID = 0;
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
    document.getElementById("inside_btn").onclick = function () {
        console.log(videoID)
        var keyword = document.getElementById("txt").value;
        if (keyword != "") {
            //keyword 보내고 결과 받아야!!
            $.post(`https://findyouu.xyz/api/scripts/find-word`, { "video_id": videoID, "keyword": keyword }, function (data) {
                var data = data.result;
                for (var i = 0; i < data.length; i++) {
                    window.parent.postMessage({ childData: data[i].start }, '*');
                }
            }, "json");

            before_document = document
        }
    }
})
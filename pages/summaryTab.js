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
    document.getElementById("btn_sum").onclick = function () {
        $.post(`https://findyouu.xyz/api/ml/summarization`, { "video_id": videoID}, function (data) {
            var data = data.result;
            console.log(data)
            var result = document.getElementById('result');
            result.append(data)
        }, "json");
    }
})
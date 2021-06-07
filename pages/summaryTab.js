var videoID = 0;
var user_membership = localStorage.getItem("membership");

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
    var click = false;
    document.getElementById("btn_sum").onclick = function () {
        var summarize =""
        if(user_membership=="PRO"){
            if(!click){
                $.post(`https://findyouu.xyz/api/ml/summarization`, { "video_id": videoID }, function (data) {
                    summarize = data.summarization;
                    var result = document.getElementById('result');
                    var script = document.createElement('a');
                    script.id = 'script';
                    script.style = "margin:20px;font-size: 15px;font-family: Segoe UI;"
                    script.innerText = summarize;
                    result.appendChild(script);
                }, "json");
                click = true;
            }
        }
            
        else{
            alert("Need to Subscribe!");
        }
    }
})
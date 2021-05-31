var videoID = 0;
var user_membership = localStorage.getItem("Current membership");

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
        if(user_membership=="PRO"){
            /*$.post(`https://findyouu.xyz/api/ml/summarization`, { "video_id": videoID }, function (data) {
                var data = data.result;
                console.log(data)
                var result = document.getElementById('result');
                result.append(data)
            }, "json");*/
                var result = document.getElementById('result');
            
            //for (var i = 0; i < data.length; i++) {
                var item = document.createElement('li');
                item.id = 'item'
                var span = document.createElement('span');
                var timestamp = document.createElement('p');
                timestamp.id = 'timestamp';
                timestamp.innerText='aa'
                //timestamp.innerText = timeToString(parseInt(data[i].start))
                //timestamp.href = '#'

                //영상 위치 이동
                /*timestamp.addEventListener('click', (event) => {
                    var time = event.target.innerText;
                    var timeSplit = time.split(':');
                    var start = 0;
                    console.log(time[0])
                    if (timeSplit.length == 2) {
                        var min = parseInt(timeSplit[0]);;
                        var sec = parseInt(timeSplit[1]);
                        start = min * 60 + sec;
                    }
                    else if (timeSplit.length == 3) {
                        var hour = parseInt(timeSplit[0]);
                        var min = parseInt(timeSplit[1]);
                        var sec = parseInt(timeSplit[2]);
                        start = hour * 3600 + min * 60 + sec;
                    }
                    window.parent.postMessage({ currentTime: start }, '*')
                })
                */
                var script = document.createElement('a');
                script.id = 'script';
                script.innerText='cc'
                //script.innerText = data[i].script;

                span.appendChild(timestamp);
                span.appendChild(script);
                item.appendChild(span);
                result.appendChild(item);
        }
        else{
            alert("Need to Subscribe!");
        }
    }
})
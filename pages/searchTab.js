var videoID=0;
var user = localStorage.getItem("User");
var search_option = localStorage.getItem('search_option')
console.log(search_option)
console.log(localStorage.getItem('User'))
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
    var search = false;
    $.post(`https://findyouu.xyz/api/scripts/load`,{"video_id":videoID},function(data){
    })
    document.getElementById("btn_add").onclick = function () {

            if (search) {
                var resultList = document.querySelector('.myList');
                var result = document.querySelectorAll('#item')
                if (result) {
                    for (let i = 0; i < result.length; i++) {
                        resultList.removeChild(result[i])
                    }
                }
            }
            console.log("Video_ID: " + videoID)
            var myList = document.getElementsByClassName('myList');
            var keyword = document.getElementById("txt_add").value;

            //keyword option result
            if (search_option == 'Keyword'|| search_option=="undefined") {
                if (keyword != "") {
                    //keyword 보내고 결과 받아야!!
                    $.post(`https://findyouu.xyz/api/scripts/find-word`, { "video_id": videoID, "keyword": keyword }, function (data) {    
                    var data = data.result;
                        console.log(data)
                        if(data.length == 0){
                            var item = document.createElement('li');
                            item.id = 'item'
                            var span = document.createElement('span');
                            var script = document.createElement('a');
                            script.id = 'script';
                            script.innerText = "No Result";
                            span.appendChild(script);
                            item.appendChild(span);
                            myList[0].appendChild(item);
                        }
                        for (var i = 0; i < data.length; i++) {
                            
                            var item = document.createElement('li');
                            item.id = 'item'
                            var span = document.createElement('span');
                            var timestamp = document.createElement('a');
                            timestamp.id = 'timestamp';
                            timestamp.innerText = timeToString(parseInt(data[i].start))
                            timestamp.href = '#'

                            //영상 위치 이동
                            timestamp.addEventListener('click', (event) => {
                                console.log(event.target.innerText.length)
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

                            var script = document.createElement('a');
                            script.id = 'script';
                            script.innerText = data[i].script;

                            span.appendChild(timestamp);
                            span.appendChild(script);
                            item.appendChild(span);
                            myList[0].appendChild(item);
                            //myList[0].innerHTML += "<li><span><a href='#' onclick=??>" + timeToString(parseInt(data[i].start)) +"</a><p>"+ data[i].script + "</p></span></li>";
                            console.log(document.querySelector('.myList'))
                        }//함수 호출하도록 postMessage
                    }, "json");

                    before_document = document
                }
            }

            //related word option result
            else if (search_option == 'Related Keyword'&&user_membership=="PRO") {
                if (keyword != "") {
                    //keyword 보내고 결과 받아야!!
                    $.post(` https://findyouu.xyz/api/ml/association`, { "video_id": videoID, "keyword": keyword }, function (data) {
                        var data = data.result;
                        console.log(data)
                        if (data.length == 0) {
                            var item = document.createElement('li');
                            item.id = 'item'
                            var span = document.createElement('span');
                            var script = document.createElement('a');
                            script.id = 'script';
                            script.innerText = "No Result";
                            span.appendChild(script);
                            item.appendChild(span);
                            myList[0].appendChild(item);
                        }
                        for (var i = 0; i < data.length; i++) {
                            var item = document.createElement('li');
                            item.id = 'item'
                            var span = document.createElement('span');
                            var timestamp = document.createElement('a');
                            timestamp.id = 'timestamp';
                            timestamp.innerText = timeToString(parseInt(data[i].start))
                            timestamp.href = '#'

                            //영상 위치 이동
                            timestamp.addEventListener('click', (event) => {
                                console.log(event.target.innerText.length)
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

                            var script = document.createElement('a');
                            script.id = 'script';
                            script.innerText = data[i].text;

                            span.appendChild(timestamp);
                            span.appendChild(script);
                            item.appendChild(span);
                            myList[0].appendChild(item);
                            //myList[0].innerHTML += "<li><span><a href='#' onclick=??>" + timeToString(parseInt(data[i].start)) +"</a><p>"+ data[i].script + "</p></span></li>";
                            console.log(document.querySelector('.myList'))
                        }//함수 호출하도록 postMessage
                    }, "json");

                    before_document = document
                }
            }

            //QA option
            else if (search_option == 'Query' && user_membership == "PRO") {
                if (keyword != "") {
                    //keyword 보내고 결과 받아야!!
                    $.post(`https://findyouu.xyz/api/ml/qa`, { "video_id": videoID, "question": keyword }, function (data) {
                        if (data.length == 0) {
                            var item = document.createElement('li');
                            item.id = 'item'
                            var span = document.createElement('span');
                            var script = document.createElement('a');
                            script.id = 'script';
                            script.innerText = "No Result";
                            span.appendChild(script);
                            item.appendChild(span);
                            myList[0].appendChild(item);
                        }
                        var data = data.answer;
                        console.log(data)
                        for (var i = 0; i < data.length; i++) {
                            var item = document.createElement('li');
                            item.id = 'item'
                            var span = document.createElement('span');
                            var timestamp = document.createElement('a');
                            timestamp.id = 'timestamp';
                            timestamp.innerText = timeToString(parseInt(data[i].start))
                            timestamp.href = '#'

                            //영상 위치 이동
                            timestamp.addEventListener('click', (event) => {
                                console.log(event.target.innerText.length)
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

                            var script = document.createElement('a');
                            script.id = 'script';
                            script.innerText = data[i].text;

                            span.appendChild(timestamp);
                            span.appendChild(script);
                            item.appendChild(span);
                            myList[0].appendChild(item);
                            //myList[0].innerHTML += "<li><span><a href='#' onclick=??>" + timeToString(parseInt(data[i].start)) +"</a><p>"+ data[i].script + "</p></span></li>";
                            console.log(document.querySelector('.myList'))
                        }//함수 호출하도록 postMessage
                    }, "json");

                    before_document = document
                }
            }
            else if ((search_option == "Query" || search_option =="Related Keyword")&&user_membership=="FREE"){
                alert("Need to Subscribe!");
            }
            search = true;
        }
        
        
    
    
})

function move(time) {
    window.parent.postMessage({ currentTime: time }, '*')
}
function timeToString(timeSecond) {
    if (timeSecond < 60)
        return "00:" + (timeSecond % 60);
    else if (timeSecond < 3600)
        return parseInt(timeSecond / 60) + ":" + (timeSecond % 60); //' + "s";
    else
        return parseInt(timeSecond / 3600) + ":" + parseInt((timeSecond % 3600) / 60) + ":" + (timeSecond % 60);
}

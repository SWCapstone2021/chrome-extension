function timeToString(timeSecond) {
    if (timeSecond < 60)
        return "00:" + (timeSecond % 60);
    else if (timeSecond < 3600)
        return parseInt(timeSecond / 60) + ":" + (timeSecond % 60); //' + "s";
    else
        return parseInt(timeSecond / 3600) + ":" + parseInt((timeSecond % 3600) / 60) + ":" + (timeSecond % 60);
}

document.getElementById("btn_add").onclick = function() {
    var myList = document.getElementsByClassName('myList');
    var keyword = document.getElementById("txt_add").value;
    if (keyword != "") {
        var video_id = "stwCk_f3sCw"
            //keyword 보내고 결과 받아야!!
        $.post(`https://202.30.30.3:5678/api/scripts/find-word`, { "video_id": video_id, "keyword": keyword }, function(data) {
            var data = data.result;
            console.log(data);
            for (var i = 0; i < data.length / 2; i++)
                myList[0].innerHTML += "<li><a target='_parent' href='https://www.youtube.com/watch?v=" + video_id + "&t=" + parseInt(data[i].start) + "s'>" + timeToString(parseInt(data[i].start)) + "</a><p>" + data[i].script + "</p></li>";
        }, "json");

        before_document = document
        $('#sample_ui').on('click', function() {
            console.log('hello')
            var $video_container = before_document.getElementsByClassName('html5-video-player')[0];
            console.log($video_container)
            $("#container .html5-video-player").load("https://www.youtube.com/watch?" + video_id + "&t=55s");
        })
    } else {
        alert("검색어가 없습니다!");
    }

}
async function getData(videoID, keyword) {
    await $.post(`https://202.30.30.3:5678/api/unit-find`, { "video_id": videoID, "keyword": keyword }, function(data) { console.log(data) });
}

document.getElementById("btn_add").onclick = function() {
    var myList = document.getElementsByClassName('myList');
    var keyword = document.getElementById("txt_add").value;
    if (keyword != "") {
        //keyword 보내고 결과 받아야!!
        getData("2M90FlZB8PU", keyword);
        var temp = [
            ["0:55", "blablabla"],
            ["1:34", "blablabla"],
            ["3:12", "blablabla"]
        ];
        for (var i = 0; i < temp.length; i++)
            myList[0].innerHTML += "<li>" + temp[i][0] + "<p>" + temp[i][1] + "</p></li>";
        myList[0].innerHTML += "<li><button id='sample_ui'>0:55</a></li>";
        before_document = document
        /*$('#sample_ui').on('click', function() {
            console.log('hello')
            var $video_container = before_document.getElementsByClassName('html5-video-player')[0];
            console.log($video_container)
            $("#container .html5-video-player").load("https://www.youtube.com/watch?v=Ba19NCNJehg&t=55s");
        })*/
    } else {
        alert("검색어가 없습니다!");
    }

}
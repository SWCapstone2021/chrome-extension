async function getData(videoID,keyword){
    await $.post(`https://202.30.30.3:5678/unit-find`,{"video_id":videoID,"keyword":keyword},function(data){console.log(data)});
}

document.getElementById("btn_add").onclick = function () {
        var myList = document.getElementsByClassName('myList');
        var keyword = document.getElementById("txt_add").value;
        if (keyword != "") {
            //keyword 보내고 결과 받아야!!
            getData("GHxUB4_MIqw", keyword);
            var temp = ["0:55", "1:34", "3:12"];
            for (var i = 0; i < temp.length; i++)
                myList[0].innerHTML += "<li>" + temp[i] + "</li>";
            myList[0].innerHTML += "<li><a href='https://www.youtube.com/watch?v=Ba19NCNJehg&t=55s' target='_parent'>0:55</a></li>";
        } else {
            alert("검색어가 없습니다!");
        }

}


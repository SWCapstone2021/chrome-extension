document.getElementById("btn_add").onclick = function () {
    if (document.getElementById("txt_add").value != "") {
        //myList[0].innerHTML += "<li>" + document.getElementById("txt_add").value + "<div class=\"t\" id=" + a + ">삭제하기</div></li>";
        localStorage.setItem(a, document.getElementById("txt_add").value);

    } else {
        alert("검색어가 없습니다!");
    }

}
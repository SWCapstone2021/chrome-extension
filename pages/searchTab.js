document.getElementById("btn_add").onclick = function () {
    if (document.getElementById("txt_add").value != "") {

        
        localStorage.setItem(a, document.getElementById("txt_add").value);

    } else {
        alert("검색어가 없습니다!");
    }

}
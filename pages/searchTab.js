
document.getElementById("btn_add").onclick = function () {
    var keyword = document.getElementById("txt_add").value;
    if (keyword!= "") {
        //keyword 보내고 결과 받아야!!
        console.log(keyword)
        
    } else {
        alert("검색어가 없습니다!");
    }

}
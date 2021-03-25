var findText = {
    init: function() {
        var $user = document.getElementById("user");
        var $button = document.getElementById("changeColor");

        //1. load contents page 
        //2. assign it to bodyText 
        var bodyText = document.querySelector('body').innerText;

        // When text in textarea of popup page is changed
        $user.addEventListener('change', function() {
            findText["countContents"]();
        })
    },

    // This is for contents page
    getContents: function() {
        var bodyText = document.querySelector('body').innerText;
        return bodyText;
    },

    countContents: function() {
        var user = document.querySelector('#user').value;
        // 1. get tabs async
        chrome.tabs.query({ active: true, currentWindow: true },
            // 2. callback function
            function(tabs) {
                // 3. execute function or script
                // tips: In this function document object is for content page
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: findText["getContents"],
                    // 4. this handling function
                    // tips: all results are contained in array and you can get a result by .result property
                }, function(result) {
                    // body안에 있는 모든 텍스트를 추출
                    var bodyText = result[0].result;
                    // bodyText의 모든 단어를 추출하고 숫자를 센다
                    var bodyNum = bodyText.split(' ').length;
                    // bodyText에서 자신이 알고 있는 단어(the)가 몇번 등장하는지를 알아본다. 그 결과를 MyNum에 담는다.
                    var match = bodyText.match(new RegExp('\\b(' + user + ')\\b', 'gi'));
                    if (match == null) return;

                    var myNum = match.length;

                    var per = myNum / bodyNum * 100;
                    per = per.toFixed(2);

                    // get object whose id is result
                    document.querySelector('#result').innerText = myNum + '/' + bodyNum + '(' + (per) + '%)';
                });


            }
        );
    }
}

document.addEventListener("DOMContentLoaded", function() {
    findText.init();
})
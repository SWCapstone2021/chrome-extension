var userInfo = localStorage.getItem("User");
var membershipInfo = localStorage.getItem("membership");
var app = {

    init: function() {
        $selection = document.getElementById('search');
        $selected_search = document.getElementById("selected_search");
        //$selected_ui = document.getElementById("selected_ui");
        $option_search = document.getElementById("search");
        $option_ui = document.getElementById("ui");

        if(!userInfo){
            $selection_search.innerHTML="Please Log In First!"
        }
        else{
            if(membershipInfo=='FREE'){
                $selection.innerHTML ='<option value="Keyword">Keyword</option>'
            }
            else{
                $selection.innerHTML = '<option value="Keyword">Keyword</option><option value="Related Keyword">Related Keyword</option><option value="Query">Query</option>'
            }
        }
        // 1. load option 1
        chrome.storage.sync.get('selected_search', function(result) {
            if (!userInfo){
                $selected_search.innerHTML = 'Need to Log In'
            }
            else{
                $selected_search.innerHTML = localStorage.getItem('search_option');
            }
        });

        /*// 2. load option 2
        chrome.storage.sync.get('selected_ui', function(result) {
            $selected_ui.innerHTML = result.selected_ui;
        });*/

        // 3. add event listeners

        $option_search.onclick = function() {
            var value = $option_search.value;
            $selected_search.innerHTML = "You selected: " + value;
            localStorage.setItem('search_option',value);
        }

        //$option_ui.onclick = function() {
        //    var value = $option_ui.value;
        //    $selected_ui.innerHTML = "You selected: " + value;
        //}


        // $button.addEventListener("click", async() => {
        //     // chrome.runtime.sendMessage({ fn: "debug", debug: $user.value });
        //     chrome.runtime.sendMessage({ fn: "setUser", user: $user.value });

        //     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        //     chrome.scripting.executeScript({
        //         target: { tabId: tab.id },
        //         function: app['setPageBackgroundColor'],
        //     });
        // });
    },

    // The body of this function will be executed as a content script inside the
    // current page
    // setPageBackgroundColor: function() {
    //     chrome.storage.sync.get("color", ({ color }) => {
    //         document.body.style.backgroundColor = color;
    //     });
    // }
}

document.addEventListener("DOMContentLoaded", function() {
    app.init();
})
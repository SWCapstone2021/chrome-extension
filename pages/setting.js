var app = {

    init: function() {
        $selected_search = document.getElementById("selected_search");
        $selected_ui = document.getElementById("selected_ui");
        $option_search = document.getElementById("search");
        $option_ui = document.getElementById("ui");

        // 1. load option 1
        chrome.storage.sync.get('selected_search', function(result) {
            $selected_search.innerHTML = result.selected_search;
        });

        // 2. load option 2
        chrome.storage.sync.get('selected_ui', function(result) {
            $selected_ui.innerHTML = result.selected_ui;
        });

        // 3. add event listeners

        $option_search.onclick = function() {
            var value = $option_search.value;
            $selected_search.innerHTML = "You selected: " + value;
        }

        $option_ui.onclick = function() {
            var value = $option_ui.value;
            $selected_ui.innerHTML = "You selected: " + value;
        }


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
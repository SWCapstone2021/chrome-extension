var app = {
    init: function() {
        var $user = document.getElementById("user");
        var $button = document.getElementById("changeColor");

        // 1. color button
        chrome.storage.sync.get('color', function(result) {
            $button.style.backgroundColor = result.color;
        });

        // 2. load some cache
        chrome.runtime.sendMessage({ fn: "getUser" }, function(response) {
            // chrome.runtime.sendMessage({ fn: "debug", debug: response });
            $user.value = response;
        });

        // 3. add event listener
        $button.addEventListener("click", async() => {
            // chrome.runtime.sendMessage({ fn: "debug", debug: $user.value });
            chrome.runtime.sendMessage({ fn: "setUser", user: $user.value });

            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: app['setPageBackgroundColor'],
            });
        });
    },

    // The body of this function will be executed as a content script inside the
    // current page
    setPageBackgroundColor: function() {
        chrome.storage.sync.get("color", ({ color }) => {
            document.body.style.backgroundColor = color;
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    app.init();
})
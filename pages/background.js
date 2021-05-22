// var console = chrome.extension.getBackgroundPage().console;
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});
/*
chrome.webNavigation.onCompleted.addListener(function () {
    alert("This is my favorite website!");
}, { url: [{ urlMatches: 'https://*.youtube.com/*' }] });
alert("This is my favorite website!");
// chrome.webNavigation.onCompleted.addListener(function() {
//     alert("this is my favorite website!");
// }, { url: [{ urlMatches: 'https://www.google.com/' }] });
*/
var background = {

    user: "",

    init: function() {
        chrome.runtime.onMessage.addListener(function(message, sender, reply) {
            if (message.fn in background) {
                background[message.fn](message, sender, reply)
            }
        });
    },

    setUser: function(message, sender, reply) {
        this.user = message.user;
    },

    getUser: function(message, sender, reply) {
        reply(this.user);
    },

    debug: function(message, sender, reply) {
        console.log("eere")
        chrome.storage.sync.set({ debug: message.debug }, function() {
            console.log("Set key to ", message.debug);
        });
        // 1. get tabs async
        chrome.tabs.query({ active: true, currentWindow: true },
            // 2. callback function
            function(tabs) {
                // 3. execute function or script
                // tips: In this function document object is for content page
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: background["print"],
                    // 4. this handling function
                    // tips: all results are contained in array and you can get a result by .result property
                });
            }
        );
    },

    print: function() {
        chrome.storage.sync.get('debug', function(result) {
            console.log(result.debug)
        });
    }
};

background.init();

chrome.commands.onCommand.addListener(function (command) {
    // Call 'update' with an empty properties object to get access to the current
    // tab (given to us in the callback function).
    chrome.tabs.update({}, function (tab) {
        var loc=tab.url;
        if (command == 'search-bar' && loc.substring(0, 29) == 'https://www.youtube.com/watch') {
            //send message to main.js
            chrome.tabs.sendMessage(tab.id,"hello");
        }
    });
});
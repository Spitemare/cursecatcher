(function(undefined) {

    chrome.runtime.onInstalled.addListener(function(details) {
        if (details.reason !== 'update' || details.previousVersion !== '1.0') return;
        chrome.storage.sync.clear();
    });

})();

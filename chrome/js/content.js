const websiteLocalStorage = window.localStorage;


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getLocalStorage') {
        const data = websiteLocalStorage.getItem(request.key);
        sendResponse({ data });
    }
});

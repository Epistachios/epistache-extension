const websiteLocalStorage = window.localStorage

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getLocalStorage') {
        const data = websiteLocalStorage.getItem(request.key)
        sendResponse({ data })
    }
})

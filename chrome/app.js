function showCookiesForTab() {
    var gettingCookie = chrome.cookies.get({ url: "https://intra.epitech.eu/", name: "user" });

    gettingCookie.then((cookie) => {
        var cookieInput = document.getElementById('cookie-input');
        if (cookie) {
            cookieInput.value = cookie.value;
        }
    });
}

function getActiveTab() {
    return chrome.tabs.query({ currentWindow: true, active: true });
}

getActiveTab().then(() => {
    showCookiesForTab()
});
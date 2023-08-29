async function getIntraToken() {
    const cookie = await chrome.cookies.get({ url: "https://intra.epitech.eu/", name: "user" });
    var cookieInput = document.getElementById('cookie-input');

    if (cookie) {
        cookieInput.value = cookie.value;
    }
}

async function getEpitestToken() {
    const [tab] = await chrome.tabs.query({ url: "https://my.epitech.eu/*" });

    if (tab && tab.id) {
        const response = await chrome.tabs.sendMessage(tab.id, { action: 'getLocalStorage', key: 'argos-api.oidc-token' });

        if (response && response.data) {
            const data = response.data;
            var lsInput = document.getElementById('ls-input');
            lsInput.value = data.replace(/"/g, '');
        }
    }
}

getIntraToken();
getEpitestToken();
function getIntraToken() {
    var gettingCookie = browser.cookies.get({ url: "https://intra.epitech.eu/", name: "user" })

    gettingCookie.then((cookie) => {
        var cookieInput = document.getElementById('cookie-input')
        if (cookie) {
            cookieInput.value = cookie.value
        }
    })
}

function getEpitestToken() {
    browser.tabs.query({ url: "https://my.epitech.eu/*" }).then((tabs) => {
        browser.tabs.sendMessage(tabs[0].id, { action: 'getLocalStorage', key: 'argos-api.oidc-token' }).then((response) => {
            const data = response.data
        
            var lsInput = document.getElementById('ls-input')
            lsInput.value = data.replace(/"/g, '')
        })
    })
}

getIntraToken()
getEpitestToken()
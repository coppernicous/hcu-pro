chrome.action.onClicked.addListener(function () {
  const siteUrl = 'https://intranet.usat.edu.pe/campusestudiante/Main.aspx'
  chrome.tabs.create({ url: siteUrl })
})

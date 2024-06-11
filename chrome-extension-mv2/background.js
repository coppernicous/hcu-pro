chrome.browserAction.onClicked.addListener(function(tab) {
  const siteUrl = "https://intranet.usat.edu.pe/campusestudiante/Main.aspx";
  chrome.tabs.create({ url: siteUrl });
});
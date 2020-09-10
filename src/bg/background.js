var strings = [
  "Advertisement · ",
  "Spotify · ",
  "Pubblicita · ",
  "Pubblicità · "
]

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.includes("open.spotify")) {
    if ( strings.some( s => tab.title.includes(s) ) ) {
      chrome.tabs.update(tabId, {muted: true});
    }
    else {
      chrome.tabs.update(tabId, {muted: false});
    }
  }
})
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'search-google',
    title: 'Search Google for "%s"',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'search-google') {
    const query = info.selectionText || '';
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    chrome.tabs.create({ url });
  }
});

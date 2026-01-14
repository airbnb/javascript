document.getElementById('search').addEventListener('click', () => {
  const q = document.getElementById('q').value.trim();
  if (!q) return;
  const url = 'https://www.google.com/search?q=' + encodeURIComponent(q);
  chrome.tabs.create({ url });
});

document.getElementById('open').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://www.google.com/' });
});

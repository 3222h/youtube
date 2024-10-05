document.getElementById('start').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id, allFrames: true },
      function: enableSpoofing
    });
  });
});

document.getElementById('stop').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id, allFrames: true },
      function: disableSpoofing
    });
  });
});

function enableSpoofing() {
  localStorage.setItem('spoofing', 'true');
}

function disableSpoofing() {
  localStorage.setItem('spoofing', 'false');
}

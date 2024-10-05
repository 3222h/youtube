document.getElementById('start').addEventListener('click', () => {
    chrome.scripting.executeScript({
        target: { allFrames: true },
        func: enableSpoofing
    });
    document.getElementById('status').innerText = 'Status: Running';
});

document.getElementById('stop').addEventListener('click', () => {
    chrome.scripting.executeScript({
        target: { allFrames: true },
        func: disableSpoofing
    });
    document.getElementById('status').innerText = 'Status: Not Running';
});

function enableSpoofing() {
    localStorage.setItem('spoofing', 'true');
}

function disableSpoofing() {
    localStorage.setItem('spoofing', 'false');
}

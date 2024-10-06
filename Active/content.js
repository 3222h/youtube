(function activitySpoofing() {
  // Prevent tab from being marked as inactive (visibility spoofing)
  Object.defineProperty(document, 'hidden', { value: false });
  Object.defineProperty(document, 'visibilityState', { value: 'visible' });

  // Select the video element
  const video = document.querySelector('video');
  if (video) {
    setInterval(() => {
      video.pause(); // Pause video
      setTimeout(() => video.play(), 1000); // Resume after 1 second
    }, 2 * 60 * 1000); // Every 2 minutes
  }

  // Random page scrolling to simulate activity
  setInterval(() => {
    window.scrollBy(0, Math.random() * 10 - 5); // Scroll randomly up/down 2 to 10 pixels
  }, Math.random() * 5000 + 2000); // Every 2 to 7 seconds
})();

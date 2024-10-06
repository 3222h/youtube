(function () {
  // Simulate tab being in focus using Page Visibility API spoofing
  function keepTabInFocus() {
    Object.defineProperty(document, 'hidden', { value: false, writable: false });
    Object.defineProperty(document, 'visibilityState', { value: 'visible', writable: false });
    window.dispatchEvent(new Event('focus')); // Dispatch focus event
  }

  // Function to randomly pause and play the video
  function randomPausePlay() {
    let video = document.querySelector('video');
    if (video) {
      // Change interval to every 5 minutes (300000 milliseconds)
      setInterval(() => {
        if (!video.paused) {
          video.pause(); // Pause the video
          setTimeout(() => video.play(), 1000); // Play it again after 1 second
        }
      }, 300000); // 5 minutes
    }
  }

  // Function to skip the video ahead by 5 seconds every 9 minutes
  function randomSkip() {
    let video = document.querySelector('video');
    if (video) {
      setInterval(() => {
        video.currentTime += 5; // Skip ahead 5 seconds
      }, 540000); // Repeat this every 9 minutes
    }
  }

  // Function to randomly scroll down and then back up
  function randomScroll() {
    setInterval(() => {
      let scrollAmount = Math.floor(Math.random() * 21) + 20; // Random scroll between 20 to 40 pixels
      window.scrollBy(0, scrollAmount); // Scroll down
      setTimeout(() => {
        window.scrollBy(0, -scrollAmount); // Scroll back up after 2 seconds
      }, 2000); // Scroll back after 2 seconds
    }, 60000); // Random scroll every 1 minute
  }

  // Keep spoofing tab focus every 0.1 seconds to ensure tab stays "active"
  setInterval(keepTabInFocus, 100); // Every 0.1 seconds

  // Start random pause/play, skip, and random scroll
  randomPausePlay();
  randomSkip();
  randomScroll();
})();

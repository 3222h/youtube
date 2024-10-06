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

  // Function to auto-resume the video if paused for 1 minute
  function autoResumeVideo() {
    let video = document.querySelector('video');
    let pauseStartTime = null; // Variable to track pause start time

    if (video) {
      setInterval(() => {
        if (video.paused) {
          if (!pauseStartTime) {
            pauseStartTime = Date.now(); // Start tracking time when paused
          } else {
            const pausedDuration = (Date.now() - pauseStartTime) / 1000; // Calculate paused duration in seconds
            if (pausedDuration >= 60) {
              video.play(); // Resume the video
              pauseStartTime = null; // Reset pause tracking
            }
          }
        } else {
          pauseStartTime = null; // Reset if the video is playing
        }
      }, 1000); // Check every second
    }
  }

  // Keep spoofing tab focus every 1 second to ensure tab stays "active"
  setInterval(keepTabInFocus, 1000); // Every 1 second

  // Start random pause/play, skip, random scroll, and auto resume
  randomPausePlay();
  randomSkip();
  randomScroll();
  autoResumeVideo(); // Add the auto resume functionality
})();

(function () {
  // Simulate tab being in focus using Page Visibility API spoofing
  function keepTabInFocus() {
    Object.defineProperty(document, 'hidden', { value: false, writable: false });
    Object.defineProperty(document, 'visibilityState', { value: 'visible', writable: false });
    window.dispatchEvent(new Event('focus')); // Dispatch focus event
  }

  // Function to pause for 0.1 seconds and then play the video every 2 minutes
  function pauseAndPlayEveryTwoMinutes() {
    let video = document.querySelector('video');
    if (video) {
      setInterval(() => {
        if (!video.paused) {
          video.pause(); // Pause the video
          setTimeout(() => video.play(), 10000); // Play it again after 0.1 seconds
        }
      }, 120000); // Every 2 minutes (120000 milliseconds)
    }
  }

  // Function to randomly scroll down and then back up
  function randomScroll() {
    setInterval(() => {
      let scrollAmount = Math.floor(Math.random() * 9) + 2; // Scroll by 2 to 10 pixels
      window.scrollBy(0, scrollAmount); // Scroll down
      setTimeout(() => {
        window.scrollBy(0, -scrollAmount); // Scroll back up after random delay
      }, Math.random() * 1500 + 500); // Random delay between 0.5 and 2 seconds for scroll up
    }, Math.random() * 5000 + 2000); // Random scroll every 2 to 7 seconds
  }

  // Keep spoofing tab focus every second to ensure tab stays "active"
  setInterval(keepTabInFocus, 1000);

  // Start pause/play every two minutes and random scroll
  pauseAndPlayEveryTwoMinutes();
  randomScroll();
})();

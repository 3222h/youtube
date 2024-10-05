(function () {
  function keepTabInFocus() {
    Object.defineProperty(document, 'hidden', { value: false, writable: false });
    Object.defineProperty(document, 'visibilityState', { value: 'visible', writable: false });
    window.dispatchEvent(new Event('focus'));
  }

  function randomPausePlay() {
    let video = document.querySelector('video');
    if (video) {
      setInterval(() => {
        if (!video.paused) {
          video.pause();
          setTimeout(() => video.play(), 500);
        }
      }, Math.random() * 10000 + 5000);
    }
  }

  function randomScroll() {
    setInterval(() => {
      let scrollAmount = Math.floor(Math.random() * 9) + 2;
      window.scrollBy(0, scrollAmount);
      setTimeout(() => {
        window.scrollBy(0, -scrollAmount);
      }, Math.random() * 1500 + 500);
    }, Math.random() * 5000 + 2000);
  }

  setInterval(keepTabInFocus, 1000);
  randomPausePlay();
  randomScroll();
})();

function startRandomHovering() {
  const elements = document.querySelectorAll("div, a, span, p"); // Adjust this selector based on what you want to hover over

  setInterval(() => {
    if (elements.length > 0) {
      const randomIndex = Math.floor(Math.random() * elements.length);
      const randomElement = elements[randomIndex];
      
      randomElement.scrollIntoView({ behavior: "smooth", block: "center" });
      randomElement.dispatchEvent(new MouseEvent('mouseover', {
        view: window,
        bubbles: true,
        cancelable: true
      }));
    }
  }, 1000); // Change this interval as needed
}

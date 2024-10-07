// content.js

// Create a fake cursor element with increased size and visible styling
const fakeCursor = document.createElement('div');
fakeCursor.style.width = '20px';  // Larger size for visibility
fakeCursor.style.height = '20px';
fakeCursor.style.backgroundColor = 'red';  // Red color for better visibility
fakeCursor.style.position = 'absolute';
fakeCursor.style.borderRadius = '50%';  // Make it look like a small dot
fakeCursor.style.zIndex = '9999';
fakeCursor.style.pointerEvents = 'none';  // Ensure it doesn't interfere with real mouse interactions

document.body.appendChild(fakeCursor);

// Helper function to move the cursor with zig-zag motion
function moveCursorTo(x, y) {
  fakeCursor.style.left = `${x}px`;
  fakeCursor.style.top = `${y}px`;
  console.log(`Moving cursor to: (${x}, ${y})`);  // Log the cursor position
}

// Get a random position within the window, ensuring some zig-zag variation
function getRandomZigZagPosition(currentX, currentY) {
  const maxStep = 50;  // Maximum step size for each zig-zag movement
  const deltaX = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * maxStep);  // Random horizontal step
  const deltaY = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * maxStep);  // Random vertical step
  
  let newX = currentX + deltaX;
  let newY = currentY + deltaY;

  // Ensure the new position is within the window bounds
  newX = Math.max(0, Math.min(window.innerWidth, newX));
  newY = Math.max(0, Math.min(window.innerHeight, newY));

  return { x: newX, y: newY };
}

// Function to check if the area under the cursor is considered an "empty" space
function isEmptySpace(x, y) {
  const element = document.elementFromPoint(x, y);
  if (!element || element.tagName === 'BODY' || element.tagName === 'HTML') {
    return true;  // Consider empty if the element is the body or html tag
  }
  return false;
}

// Simulate cursor movements and interactions with zig-zag motion
function simulateCursorMovements() {
  // Start from a random position if undefined
  if (!window.fakeCursorX || !window.fakeCursorY) {
    window.fakeCursorX = Math.floor(Math.random() * window.innerWidth);
    window.fakeCursorY = Math.floor(Math.random() * window.innerHeight);
  }

  // Get the next zig-zag position based on the current position
  const { x, y } = getRandomZigZagPosition(window.fakeCursorX, window.fakeCursorY);

  // Move the fake cursor
  moveCursorTo(x, y);

  // Update current cursor position
  window.fakeCursorX = x;
  window.fakeCursorY = y;

  // Check if it's an empty space and click more frequently
  if (isEmptySpace(x, y)) {
    console.log("Clicking on an empty space at:", x, y);  // Log when clicking happens
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      clientX: x,
      clientY: y
    });
    document.dispatchEvent(clickEvent);  // Perform a click in the document at an empty spot
  }
}

// Set an interval for cursor movement and clicking (e.g., every 1-3 seconds)
setInterval(simulateCursorMovements, Math.random() * 1000 + 1000);  // Random interval between 1000 and 2000 ms

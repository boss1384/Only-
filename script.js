// script.js

// Get elements from the DOM
const display = document.getElementById('display');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Initialize counter value
let count = 0;

// Function to update the display
function updateDisplay() {
    display.textContent = count;
    
    // Optional: Change color based on value
    if (count > 0) {
        display.style.color = '#2ecc71';
    } else if (count < 0) {
        display.style.color = '#e74c3c';
    } else {
        display.style.color = '#333';
    }
}

// Increment function
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

// Decrement function
decrementBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

// Reset function
resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Initialize display on page load
updateDisplay();

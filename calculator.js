// Function to append numbers or operators to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
// Function to append numbers or operators to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression and show the result
        display.value = eval(display.value);
    } catch (error) {
        // If there's an error in the expression, show an error message
        display.value = 'Error';
    }
}

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
// Function to append numbers or operators to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // Prevent multiple operators in a row
    const lastChar = display.value.slice(-1);
    if (isOperator(lastChar) && isOperator(value)) {
        return; // Do nothing if last character is already an operator
    }

    display.value += value;
}

// Function to check if a value is an operator
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to calculate the result with error handling
function calculateResult() {
    const display = document.getElementById('display');
    try {
        if (display.value.includes('/0')) {
            throw new Error('Cannot divide by zero');
        }
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
// Function to calculate percentage
function calculatePercentage() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = 'Error';
    }
}

 
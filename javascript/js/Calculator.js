let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number;
    display.value = currentNumber;
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculateResult();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    let computation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentNumber = computation;
    operator = '';
    previousNumber = '';
    display.value = currentNumber;
}

function deleteLast() {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    display.value = '';
}

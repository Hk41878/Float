let display = document.querySelector('.display');
let currentValue = '0';
let operator = null;
let firstValue = null;

function appendToDisplay(value) {
  if (currentValue === '0') {
    currentValue = value;
  } else {
    currentValue += value;
  }
  display.textContent = currentValue;
}

function clearDisplay() {
  currentValue = '0';
  operator = null;
  firstValue = null;
  display.textContent = '0';
}

function backspace() {
  currentValue = currentValue.slice(0, -1);
  if (currentValue === '') {
    currentValue = '0';
  }
  display.textContent = currentValue;
}

function calculate() {
  const secondValue = parseFloat(currentValue);
  let result;

  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    case '/':
      if (secondValue === 0) {
        alert('Cannot divide by zero');
        clearDisplay();
        return;
      }
      result = firstValue / secondValue;
      break;
    default:
      return;
  }

  currentValue = result.toString();
  display.textContent = currentValue;
  operator = null;
  firstValue = null;
}

function setOperator(op) {
  if (operator !== null) {
    calculate();
  }
  firstValue = parseFloat(currentValue);
  operator = op;
  currentValue = '0';
}

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => setOperator(button.textContent));
});

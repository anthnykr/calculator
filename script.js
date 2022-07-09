function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  let output = 0;
  switch (operator) {
    case add:
      output = add(num1, num2);
      break;
    case subtract:
      output = subtract(num1, num2);
      break;
    case multiply:
      output = multiply(num1, num2);
      break;
    case divide:
      output = divide(num1, num2);
      break;
  }
  return output;
}

const display = document.querySelector('#display');

const buttons = document.querySelectorAll('.number');

const clear = document.querySelector('.clear');

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', addToDisplay(decimal.textContent));

function addToDisplay(text) {
  display.textContent += text;
}
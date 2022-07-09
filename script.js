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
    case '+':
      output = add(num1, num2);
      break;
    case '−':
      output = subtract(num1, num2);
      break;
    case '×':
      output = multiply(num1, num2);
      break;
    case '÷':
      if (num2 === 0) {
        alert('Error, cannot divide by 0');
        clear.click();
      } else {
        output = divide(num1, num2);
      }
      break;
  }
  return output;
}

let num1 = '';
let operation = '';
let num2 = '';
let result = '';

const display = document.querySelector('#display');

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    /* Updates display with current result if a 2nd operator is used */
    if (num2) {
      result = operate(+num1, operation, +num2);
      display.textContent = result;
      num1 = result;
      num2 = '';
    } else {
      num1 = display.textContent;
    }
    operation = operator.textContent;
  })
});

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (operation) {
      num2 += number.textContent;
      display.textContent = num2;
    } else if (display.textContent === '0') {
      num1 = number.textContent;
      display.textContent = num1;
    } else {
      num1 += number.textContent;
      display.textContent = num1;
    }
  });
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  display.textContent = "0";
  num1 = '';
  num2 = '';
  operation = '';
  result = '';
})

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
  if (!display.textContent.includes('.')) {
    display.textContent += decimal.textContent;
  }
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
  if (num1 === '') {
    display.textContent = '0';
  } else if (operation === '' || num2 === '') {
    display.textContent = num1;
  } else {
    result = operate(+num1, operation, +num2);
    display.textContent = result;
  }
});
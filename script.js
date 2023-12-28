let firstNum = 0;
let operator = "";
let secondNum = 0;

const calc = document.querySelector("#calc");
const display = document.querySelector("#display");
const notifs = document.querySelector("#notifs");

calc.addEventListener("click", (event) => {
  let target = event.target;

  switch(target.id) {
    case "one":
      display.textContent += "1";
      break;
    case "two":
      display.textContent += "2";
      break;
    case "three":
      display.textContent += "3";
      break;
    case "four":
      display.textContent += "4";
      break;
    case "five":
      display.textContent += "5";
      break;
    case "six":
      display.textContent += "6";
      break;
    case "seven":
      display.textContent += "7";
      break;
    case "eight":
      display.textContent += "8";
      break;
    case "nine":
      display.textContent += "9";
      break;
    case "zero":
      display.textContent += "0";
      break;
    case "dot":
      if(!display.textContent.includes(".")) {
      display.textContent += ".";
      };
      break;

    case "plus":
      if(firstNum === 0) {
        operator = "+";
        firstNum = +display.textContent;
        display.textContent = "";
        notifs.textContent = `${firstNum} +`;
      }
      else if(firstNum !==0) {
        secondNum = +display.textContent;
        display.textContent = "";
        notifs.textContent = `${firstNum} ${operator} ${secondNum} = ${operate(operator, firstNum, secondNum)} +`;
        firstNum = operate(operator, firstNum, secondNum);
        secondNum = 0;
        operator = "+";
      }
      break;

    case "minus":
      if(firstNum === 0) {
        operator = "-";
        firstNum = +display.textContent;
        display.textContent = "";
      }
      else if(firstNum !==0) {
        secondNum = +display.textContent;
        display.textContent = "";
        notifs.textContent = `${firstNum} ${operator} ${secondNum} = ${operate(operator, firstNum, secondNum)} -`;
        firstNum = operate(operator, firstNum, secondNum);
        secondNum = 0;
        operator = "-";
      }
      break;

    case "multi":
      if(firstNum === 0) {
        operator = "*";
        firstNum = +display.textContent;
        display.textContent = "";
      }
      else if(firstNum !==0) {
        secondNum = +display.textContent;
        display.textContent = "";
        notifs.textContent = `${firstNum} ${operator} ${secondNum} = ${operate(operator, firstNum, secondNum)} *`;
        firstNum = operate(operator, firstNum, secondNum);
        secondNum = 0;
        operator = "*";
      }
      break;

    case "divide":
      if(firstNum === 0) {
        operator = ":";
        firstNum = +display.textContent;
        display.textContent = "";
      }
      else if(firstNum !==0) {
        secondNum = +display.textContent;
        display.textContent = "";
        notifs.textContent = `${firstNum} ${operator} ${secondNum} = ${operate(operator, firstNum, secondNum)} :`;
        firstNum = operate(operator, firstNum, secondNum);
        secondNum = 0;
        operator = ":";
      }
      break;

    case "equals":
      if(firstNum !== 0) {
        secondNum = +display.textContent;
        notifs.textContent = `${firstNum} ${operator} ${secondNum} = ${operate(operator, firstNum, secondNum)}`;
        }
        display.textContent = "";
        firstNum = 0;
        operator = "";
        secondNum = 0;
      break;

    case "clear":
      display.textContent = "";
      notifs.textContent = "Memory cleared";
      firstNum = 0;
      operator = "";
      secondNum = 0;
      break;
  }
});

function operate(operator, a, b) {
  switch(operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case ":":
      return divide(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if(b === 0) {
    return "No.";
  }
  return a / b;
}
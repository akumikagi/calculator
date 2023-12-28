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
        firstNum = +display.textContent;
      }
      if(firstNum !== 0 && operator === "") {
        operator = "plus";
        notifs.textContent = `adding to ${firstNum}`;
        display.textContent = "";
        break;
      };
      if(firstNum !== 0 && operator !== "") {
        secondNum = +display.textContent;
        notifs.textContent = `${firstNum} + ${secondNum} = ${add(firstNum, secondNum)}`;
        firstNum = add(firstNum, secondNum);
      }
      display.textContent = "";
      break;
    case "minus":
      if(firstNum === 0) {
        firstNum = +display.textContent;
      }
      if(firstNum !== 0 && operator === "") {
        operator = "minus";
        notifs.textContent = `subracting from ${firstNum}`;
        display.textContent = "";
        break;
      };
      if(firstNum !== 0 && operator !== "") {
        secondNum = +display.textContent;
        notifs.textContent = `${firstNum} - ${secondNum} = ${subtract(firstNum, secondNum)}`;
        firstNum = subtract(firstNum, secondNum);
      }
      display.textContent = "";
      
      break;
    case "multi":
      if(firstNum === 0) {
        firstNum = +display.textContent;
      }
      if(firstNum !== 0 && operator === "") {
        operator = "multi";
      };
      display.textContent = "";
      notifs.textContent = `multiplying ${firstNum}`;
      break;
    case "divide":
      if(firstNum === 0) {
        firstNum = +display.textContent;
      }
      if(firstNum !== 0 && operator === "") {
        operator = "divide";
      };
      display.textContent = "";
      notifs.textContent = `dividing ${firstNum}`;
      break;
    case "equals":
      if(firstNum !== 0 && operator !== "") {
        secondNum = +display.textContent;
        if(operator === "plus") {
          notifs.textContent = `${firstNum} + ${secondNum} = ${add(firstNum, secondNum).toFixed(2)}`;
          display.textContent = "";
        }
        else if(operator === "minus") {
          notifs.textContent = `${firstNum} - ${secondNum} = ${subtract(firstNum, secondNum).toFixed(2)}`;
          display.textContent = "";
        }
        else if(operator === "multi") {
          notifs.textContent = `${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum).toFixed(2)}`;
          display.textContent = "";
        }
        else if(operator === "divide") {
          if(secondNum === 0) {
            notifs.textContent = "No.";
            break;
          }
          notifs.textContent = `${firstNum} : ${secondNum} = ${divide(firstNum, secondNum).toFixed(2)}`;
          display.textContent = "";
        }
        firstNum = 0;
        operator = "";
        secondNum = 0;
      };
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
  return a / b;
}
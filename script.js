let operand1 = "";
let operand2 = "";
let operator = "";

let currentDisplay = () => {
  document.getElementById("previous-operand").innerText =
    operand1 + operator + operand2;
};

let digitFucntion = (num) => {
  console.log("typed", num);
  if (operand1 === "" || operator === "") {
    operand1 += num;
    currentDisplay();
    return;
  }
  operand2 += num;
  currentDisplay();
  if (operand1 === "1" && operator === "+") {
    special();
  }
};

let controlFunction = (inputOperator) => {
  operator = inputOperator;
  currentDisplay();
};

let evaluateFunction = () => {
  let Intoperand1 = parseInt(operand1);
  let Intoperand2 = parseInt(operand2);
  let answer = eval(Intoperand1 + operator + Intoperand2);

  if (operand1 === "1" && operator === "+" && operand2 === "") {
    document.getElementById("calc-display").style.backgroundImage =
      "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7b7ac99-a2cf-4341-8199-802d6ad45b90/d9q06ju-cb60c5b3-6ffe-4a29-b347-2fdcf196c103.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3YjdhYzk5LWEyY2YtNDM0MS04MTk5LTgwMmQ2YWQ0NWI5MFwvZDlxMDZqdS1jYjYwYzViMy02ZmZlLTRhMjktYjM0Ny0yZmRjZjE5NmMxMDMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kuqVQ5onSfpCpAaIg11LSdpI2X7BzaNhEKIhNBa9R2c')";
    document.getElementById("current-operand").innerText = "";
    document.getElementById("previous-operand").innerText = "";
  } else {
    setTimeout(evaluateFunction, 2000);

    document.getElementById("current-operand").innerText = "Answer=" + answer;
  }

  operand1 = "";
  operand2 = "";
  operator = "";
};
let clearFunction = () => {
  document.getElementById("current-operand").innerText = "Answer";
  document.getElementById("previous-operand").innerText = "0";
  operand1 = "";
  operand2 = "";
  operator = "";
  document.getElementById("calc-display").style.backgroundImage = "none";
  document.getElementById("progress-btn").style.cursor = "pointer";
};
let singleCharacterClear = () => {
  let str = document.getElementById("previous-operand").innerText;
  str = str.slice(0, -1);
  document.getElementById("previous-operand").innerText = str;
};
let controlFunctionsq = () => {
  if (document.getElementById("previous-operand").innerText === operator) {
    document.getElementById("current-operand").innerText = "Syntax Error";
  } else {
    sqaureOperand = operand1 * operand1;
    document.getElementById("current-operand").innerText =
      "Answer=" + sqaureOperand;
  }
};
let controlFunctionfr = () => {
  if (document.getElementById("previous-operand").innerText === operator) {
    document.getElementById("current-operand").innerText = "Syntax Error";
  } else {
    fractionOperand = 1 / operand1;
    document.getElementById("current-operand").innerText =
      "Answer=" + fractionOperand;
  }
};

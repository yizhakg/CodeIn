const CALCULATOROBJECT = {
  firstNumber: '0',
  secondNumber: '0',
  operator: '',
  result: '0',
  calToggle: true,
  dotToggle: true,
}

function enterInput(pressInput) {
  if (pressInput == '.' && CALCULATOROBJECT.dotToggle && result.innerHTML == '0' || pressInput == '.' && CALCULATOROBJECT.dotToggle && CALCULATOROBJECT.firstNumber != '0' && CALCULATOROBJECT.secondNumber == '0') {
    result.innerHTML = '0' + pressInput;
  }
  else if (CALCULATOROBJECT.result != '0' || (result.innerHTML == CALCULATOROBJECT.firstNumber && !CALCULATOROBJECT.calToggle) || (result.innerHTML == CALCULATOROBJECT.secondNumber && CALCULATOROBJECT.calToggle)) {
    CALCULATOROBJECT.result = '0';
    result.innerHTML = pressInput;
  }
  else if (pressInput == '.' && !CALCULATOROBJECT.dotToggle) {
    return;
  }
  else {
    result.innerHTML += pressInput;
  }
}
function operatorInput(pressOperator) {
  if (pressOperator == '=') {
    CALCULATOROBJECT.secondNumber = result.innerHTML;
    CALCULATOROBJECT.calToggle = true;
    calMethod()
  }
  else {
    CALCULATOROBJECT.firstNumber = result.innerHTML;
    CALCULATOROBJECT.operator = pressOperator;
    CALCULATOROBJECT.calToggle = false;
  }
  CALCULATOROBJECT.dotToggle = true;
}
function calMethod() {
  switch (CALCULATOROBJECT.operator) {

    case '+':
      CALCULATOROBJECT.result = "" + (Number(CALCULATOROBJECT.firstNumber) + Number(CALCULATOROBJECT.secondNumber))
      break;

    case '-':
      CALCULATOROBJECT.result = "" + (Number(CALCULATOROBJECT.firstNumber) - Number(CALCULATOROBJECT.secondNumber))
      break;

    case 'x':
      CALCULATOROBJECT.result = "" + (Number(CALCULATOROBJECT.firstNumber) * Number(CALCULATOROBJECT.secondNumber))
      break;

    case '÷':
      CALCULATOROBJECT.result = "" + (Number(CALCULATOROBJECT.firstNumber) / Number(CALCULATOROBJECT.secondNumber))
      break;
  }
  if (CALCULATOROBJECT.result.indexOf('.') != -1) {
    result.innerHTML = CALCULATOROBJECT.result
  } else {
    result.innerHTML = CALCULATOROBJECT.result
  }
  resetCal()
}
function resetCal() {
  CALCULATOROBJECT.firstNumber = CALCULATOROBJECT.result;
  CALCULATOROBJECT.secondNumber = '0'
  CALCULATOROBJECT.operator = '';
  CALCULATOROBJECT.dotToggle = true;
}
window.onload = () => {
  let calNumClass = document.getElementsByClassName("calNum");
  let calOperator = document.getElementsByClassName("calOperator");
  for (let i = 0; i < calNumClass.length; i++) {
    calNumClass[i].addEventListener("click", () => { enterInput(calNumClass[i].innerHTML) })
  }
  for (let i = 0; i < calOperator.length; i++) {
    calOperator[i].addEventListener("click", () => { operatorInput(calOperator[i].innerHTML) })
  }
}

result.innerHTML = CALCULATOROBJECT.result;

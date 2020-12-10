function insertNumber(insertData) {
  CALCULATOROBJECT.isNumberInsert = true;
  CALCULATOROBJECT.isOpeartorInsert = false;
  if (CALCULATOROBJECT.isEqualOn) {
    resetCal();
  }
  if (result.innerHTML == '0') {
    result.innerHTML = insertData;
  }

  else {
    result.innerHTML += insertData;
  }
}

function insertOperator(insertData) {
  if (CALCULATOROBJECT.isEqualOn) {
    let tempResultHolder = mainResult.innerHTML;
    resetCal();
    result.innerHTML = tempResultHolder;
  }
  if(!CALCULATOROBJECT.isNumberInsert){
    return;
  }
  CALCULATOROBJECT.isDotInsert = false;
  CALCULATOROBJECT.isNumberInsert=false;
  if (!CALCULATOROBJECT.isOpeartorInsert) {
    result.innerHTML += insertData;
  }
  else {
    let tempString = result.innerHTML;
    result.innerHTML = tempString.substr(0, tempString.length - 1);
    result.innerHTML += insertData;
  }
  CALCULATOROBJECT.isOpeartorInsert = true;
}
function resetCal() {
  CALCULATOROBJECT.isNumberInsert = true;
  CALCULATOROBJECT.isOpeartorInsert = false;
  CALCULATOROBJECT.isEqualOn = false;
  CALCULATOROBJECT.isDotInsert= false;
  result.innerHTML = '0'
}
function calSwitchMethod(numOne, numTwo, Operator) {
  let calResult = 0;
  switch (Operator) {
    case '×':
      calResult = numOne * numTwo;
      break;
    case '÷':
      calResult = numOne / numTwo;
      break;
    case '+':
      calResult = (numOne + numTwo);
      break;
    case '-':
      calResult = numOne - numTwo;
      break;
  }
  if (calResult % 1 != 0) {
    calResult = calResult.toFixed(2);
  }
  return '' + calResult;
}
function calMethod(arrayNum, arrayOperator) {
  for (let i = 0; i < arrayOperator.length; i++) {
    if (arrayOperator[i] == '×' || arrayOperator[i] == '÷') {
      arrayNum[i] = calSwitchMethod(arrayNum[i], arrayNum[i + 1], arrayOperator[i])
      arrayNum.splice(i + 1, 1)
      arrayOperator.splice(i, 1)
      i = -1;
      console.log(arrayNum)
      console.log(arrayOperator)
    }
  }
  for (let i = 0; i < arrayOperator.length; i++) {
    if (arrayOperator[i] == '+' || arrayOperator[i] == '-') {
      arrayNum[i] = calSwitchMethod(Number(arrayNum[i]), Number(arrayNum[i + 1]), arrayOperator[i])
      arrayNum.splice(i + 1, 1)
      arrayOperator.splice(i, 1)
      i = -1;
    }
  }
  result.innerHTML += arrayNum[0];
  mainResult.innerHTML = arrayNum[0];
}

function displayResult() {
  CALCULATOROBJECT.isEqualOn = true;
  let arrayNum = [];//12,3
  let arrayOperator = [];//×,
  let tempString = ''
  let resultString = result.innerHTML;//12×3÷2-1+3÷2

  for (let i = 0; i < resultString.length; i++) {
    let tempNum = +resultString[i];
    if (tempNum / 1 == tempNum || resultString[i] == '.') {
      tempString += resultString[i];
    } else if (resultString[i] == 'e') {
      tempString += resultString[i];
      tempString += resultString[i + 1];
      i++;
    }
    else {
      arrayNum.push(tempString);
      tempString = ''
      arrayOperator.push(resultString[i])
    }
  }
  console.log(arrayNum)
  console.log(arrayOperator)
  calMethod(arrayNum, arrayOperator);
}
function dotInsert() {
  console.log('check')
  if (!CALCULATOROBJECT.isDotInsert && result.innerHTML == '0') {
    result.innerHTML += '.'
    console.log("check")
  }
  else if (!CALCULATOROBJECT.isDotInsert && CALCULATOROBJECT.isNumberInsert) {
    result.innerHTML += '.';
  }
  CALCULATOROBJECT.isDotInsert = true;
  CALCULATOROBJECT.isNumberInsert=false
}
window.onload = () => {
  for (const iterator of document.getElementsByClassName("calNum")) {
    iterator.addEventListener("click", () => insertNumber(iterator.innerHTML))
  }

  for (const iterator of document.getElementsByClassName("calOperator")) {
    iterator.addEventListener("click", () => insertOperator(iterator.innerHTML))
  }
}
const CALCULATOROBJECT = {
  isNumberInsert: false,
  isOpeartorInsert: true,
  isEqualOn: false,
  isDotInsert: false,
}
let firstNum;
let secondNum;
let operator = '';
let newNum = false;

const DISPLAY_RESULT = document.querySelector('.result');
const DISPLAY_HISTORY = document.querySelector('.history');

// Updates display by continually adding entries to the textContent until an operator is pressed
function updateDisplay(button) {
   if (DISPLAY_RESULT.textContent !== '0' && newNum !== true) {
      DISPLAY_RESULT.textContent = DISPLAY_RESULT.textContent + button.textContent;
   } else {
      DISPLAY_RESULT.textContent = button.textContent;
   }
}

// Once an operator has been pressed, convert textContent string in display as firstNum to be used later
function saveNum(button) {
   if (!newNum) {
      firstNum = Number(DISPLAY_RESULT.textContent);
      operator = button.textContent;
      newNum = true;
   } 
   updateHistory();
}

// Save operations to the history div
function updateHistory() {
   DISPLAY_HISTORY.textContent = DISPLAY_HISTORY.textContent + ' ' + firstNum + ' ' + operator; 
}

// Once = is pressed, take firstNum, secondNum, and the operator and conduct the intended operation
function operate() {
   secondNum = Number(DISPLAY_RESULT.textContent);
   DISPLAY_HISTORY.textContent = DISPLAY_HISTORY.textContent + ' ' + secondNum + ' =';
   switch (operator) {
      case '+':
         DISPLAY_RESULT.textContent = firstNum + secondNum;
         break;
      case '-':
         DISPLAY_RESULT.textContent = firstNum - secondNum;
         break;
      case '*':
         DISPLAY_RESULT.textContent = firstNum * secondNum;
         break;
      case '/':
         DISPLAY_RESULT.textContent = firstNum / secondNum;
         break;
   }
}

// const add = function(a, b) {
// 	return a + b;
// };

// const subtract = function(a, b) {
// 	return a - b;
// };

// const sum = function(arr) {
//   return arr.reduce((sum, current) => sum + current, 0);
// };

// const multiply = function(arr) {
//   return arr.reduce((product, current) => product * current, 1);
// };
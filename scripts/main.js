// HELPER FUNCTIONS
/* Good for practice, but useless
// Select object by ID
// returns: DOM Object
function getId(elementName) {
  return document.getElementById(elementName);
};

// Select object by Class
// returns: DOM Object
function getClass(elementName) {
  return document.getElementsByClassName(elementName);
};
*/

// Change an element's background-color
function changeBg(element, color) {
  element.style.backgroundColor = color;
}

// VARIABLES
const calculator  = document.getElementById('calculator');
// Display
const display     = calculator.getElementsByClassName('display')[0];
const result      = calculator.getElementsByClassName('result')[0];
const operation   = calculator.getElementsByClassName('operation')[0];

// Controller
const buttons     = calculator.getElementsByClassName('button');

// Controller
const onButton      = buttons[0];
const offButton     = buttons[1];
const addButton     = buttons[2];
const subButton     = buttons[3];
const sevenButton   = buttons[4];
const eightButton   = buttons[5];
const nineButton    = buttons[6];
const mulButton     = buttons[7];
const fourButton    = buttons[8];
const fiveButton    = buttons[9];
const sixButton     = buttons[10];
const divButton     = buttons[11];
const oneButton     = buttons[12];
const twoButton     = buttons[13];
const threeButton   = buttons[14];
const equalButton   = buttons[15];
const dotButton     = buttons[16];
const zeroButton    = buttons[17];
const percentButton = buttons[18];

// Colors
let lightBlue = "#6699FF";
let black = 'black';
let blue = '#216AA7';

//const switch = false;

offButton.onclick = function() {
  changeBg(display, black);
  result.innerHTML = '';
  operation.innerHTML = '';
};

onButton.onclick = function() {
  changeBg(display, lightBlue)
  result.innerHTML = '';
  operation.innerHTML = 'You turned me on ;)';
}

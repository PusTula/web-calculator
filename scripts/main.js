/* Test codes
let num1 = 3;
let num2 = '3';

if (num1===num2) {
  print(heading, 'egyenlőek');
} else {
  print(heading, 'nem egyenlőek');
}

// Importing constant variables - not working
import {
  result,
  operation,
} from '/functions.js';

// Importing helper functions
import {
  print,
  id,
} from '/const-variables.js';
*/

// Code for the Calculator application
// Helper functions
// Print text in object
function print(object, displayedText) {
  object.textContent = displayedText;
};

// Select object by ID
// returns: DOM Object
function id(objectId) {
  return document.getElementById(objectId);
};

// Constant variables
const heading = document.querySelector('h1'); // Just for testing
const result = id('result');
const operation = id('operation');

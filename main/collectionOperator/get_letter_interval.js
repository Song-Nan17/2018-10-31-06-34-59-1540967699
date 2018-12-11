'use strict';

function get_letter_interval(number_a, number_b) {
  let codeArray = get_integer_interval(number_a, number_b)
  return codeArray.map(codeToLetter);
}

function codeToLetter(code) {
  return String.fromCharCode(97 + code - 1);
}

function get_integer_interval(number_a, number_b) {
  let leftInterval = Math.min(number_a, number_b);
  let rightInterval = Math.max(number_a, number_b);
  let integerArray = [];
  for (leftInterval; leftInterval <= rightInterval; leftInterval++) {
    integerArray.push(leftInterval);
  }
  if (number_a > number_b) {
    integerArray.reverse();
  }
  return integerArray;
}

module.exports = get_letter_interval;

'use strict';

function get_integer_interval_2(number_a, number_b) {
  let evenArray = get_integer_interval(number_a, number_b);
  return evenArray.filter(isEven);
}

function isEven(element) {
  return element % 2 == 0;
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

module.exports = get_integer_interval_2;

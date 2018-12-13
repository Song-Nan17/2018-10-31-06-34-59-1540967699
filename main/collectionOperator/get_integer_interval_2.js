'use strict';

function get_integer_interval_2(number_a, number_b) {
  let intervalArray = get_integer_interval(number_a, number_b);
  return intervalArray.filter(isEven);
}

function isEven(element) {
  return element % 2 == 0;
}

function get_integer_interval(number_a, number_b) {
  let leftInterval = Math.min(number_a, number_b);
  let rightInterval = Math.max(number_a, number_b);
  let integerArray = getIntervalArr(leftInterval, rightInterval);
  if (number_a > number_b) {
    integerArray.reverse();
  }
  return integerArray;
}

function getIntervalArr(leftInterval, rightInterval) {
  let integerArray = [];
  for (leftInterval; leftInterval <= rightInterval; leftInterval++) {
    integerArray.push(leftInterval);
  }
  return integerArray;
}

module.exports = get_integer_interval_2;

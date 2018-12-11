'use strict';

function get_integer_interval(number_a, number_b) {
  var leftInterval = Math.min(number_a, number_b);
  var rightInterval = Math.max(number_a, number_b);
  var integerArray = [];
  for (leftInterval; leftInterval <= rightInterval; leftInterval++) {
    integerArray.push(leftInterval);
  }
  if (number_a > number_b) {
    integerArray.reverse();
  }
  return integerArray;
}

module.exports = get_integer_interval;


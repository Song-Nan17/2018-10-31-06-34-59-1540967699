'use strict';

function get_letter_interval(number_a, number_b) {
  var leftInterval = Math.min(number_a, number_b);
  var rightInterval = Math.max(number_a, number_b);
  var letterArray = [];
  for (leftInterval; leftInterval <= rightInterval; leftInterval++) {
    var code = 97 + leftInterval - 1;
    var letter = String.fromCharCode(code)
    letterArray.push(letter);
  }
  if (number_a > number_b) {
    letterArray.reverse();
  }
  return letterArray;
}

module.exports = get_letter_interval;

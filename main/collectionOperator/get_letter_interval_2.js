'use strict';

function get_letter_interval_2(number_a, number_b) {
  var leftInterval = Math.min(number_a, number_b);
  var rightInterval = Math.max(number_a, number_b);
  var letterArray = [];
  var code, firstCode, secondCode, letter;
  for (leftInterval; leftInterval <= rightInterval; leftInterval++) {
    if (leftInterval > 26) {
      firstCode = Math.floor((leftInterval - 1) / 26) - 1 + 97;
      secondCode = (leftInterval - 1) % 26 + 97;
      letter = String.fromCharCode(firstCode, secondCode);
    } else {
      code = 97 + leftInterval - 1;
      letter = String.fromCharCode(code);
    }
    letterArray.push(letter);
  }
  if (number_a > number_b) {
    letterArray.reverse();
  }
  return letterArray;
}

module.exports = get_letter_interval_2;


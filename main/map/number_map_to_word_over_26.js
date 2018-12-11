'use strict';
var number_map_to_word_over_26 = function (collection) {
  return collection.map(function numberToWord(number) {
    var code, firstCode, secondCode, letter;
    if (number > 26) {
      firstCode = Math.floor((number - 1) / 26) - 1 + 97;
      secondCode = (number - 1) % 26 + 97;
      letter = String.fromCharCode(firstCode, secondCode);
    } else {
      code = 97 + number - 1;
      letter = String.fromCharCode(code);
    }
    return letter;
  });
};

module.exports = number_map_to_word_over_26;

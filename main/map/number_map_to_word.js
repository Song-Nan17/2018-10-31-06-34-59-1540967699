'use strict';
var number_map_to_word = function (collection) {
  return collection.map(function numberToWord(number) {
    var code = 97 + number - 1;
    var letter = String.fromCharCode(code);
    return letter;
  });
};

module.exports = number_map_to_word;

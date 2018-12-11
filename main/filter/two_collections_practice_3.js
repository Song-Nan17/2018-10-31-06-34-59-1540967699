'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var divisibleArray = collection_a.filter(function (element) {
    for (var i = 0; i < collection_b.length; i++) {
      if (element % collection_b[i] === 0) {
        return true;
      }
    }
    return false;
  });
  return divisibleArray;
}

module.exports = choose_divisible_integer;

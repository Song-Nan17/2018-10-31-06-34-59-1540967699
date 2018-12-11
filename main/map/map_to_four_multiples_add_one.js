'use strict';
var map_to_four_multiples_add_one = function (collection) {
  return collection.map(function fourfoldPlusOne(ele) {
    return ele * 4 + 1;
  });
}

module.exports = map_to_four_multiples_add_one;

'use strict';

function double_to_one(collection) {
  var flattened = collection.reduce(
    function (accumulator, currentValue) {
      return accumulator.concat(currentValue);
    }, []);
  return flattened;
}

module.exports = double_to_one;

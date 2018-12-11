'use strict';

function double_to_one(collection) {
  var flattened = collection.reduce(
    function (accumulator, currentValue) {
      return accumulator.concat(currentValue);
    }, []);
  return choose_no_repeat_number(flattened);
}

function choose_no_repeat_number(collection) {
  var noRepeatArr = collection.filter(function (element, index, array) {
    return array.indexOf(element) === index;
  });
  return noRepeatArr;
}

module.exports = double_to_one;

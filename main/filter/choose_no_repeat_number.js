'use strict';

function choose_no_repeat_number(collection) {
  var noRepeatArr = collection.filter(function (element, index, array) {
    return array.indexOf(element) === index;
  });
  return noRepeatArr;
}

module.exports = choose_no_repeat_number;

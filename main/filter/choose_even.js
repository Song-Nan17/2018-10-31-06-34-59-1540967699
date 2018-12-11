'use strict';

function choose_even(collection) {
  return collection.filter(isEven);
}

function isEven(element) {
  return element % 2 == 0;
}

module.exports = choose_even;

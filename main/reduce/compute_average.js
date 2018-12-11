'use strict';

function compute_average(collection) {
  return collection.reduce(sumArr) / collection.length;
}

const sumArr = function (accumulator, currentValue) {
  return accumulator + currentValue;
}

module.exports = compute_average;


'use strict';
var calculate_median = function (collection) {
  let evenSubArr = collectNumEvenEle(collection);
  return calculateMedian(evenSubArr);
};

function collectNumEvenEle(collection) {
  return collection.filter(isNumEven);
}
function isNumEven(element, index) {
  if ((index + 1) % 2 == 0) {
    return element;
  }
}

function calculateMedian(collection) {
  let average, length = collection.length;
  if (length % 2 == 0) {
    average = (collection[length / 2] + collection[length / 2 - 1]) / 2;
  } else {
    average = collection[(length - 1) / 2];
  }
  return average;
}
module.exports = calculate_median;

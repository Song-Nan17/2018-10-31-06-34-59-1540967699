'use strict';

function median_to_letter(collection) {
  let code = Math.ceil(calculateMedian(collection));
  return codeToLetter(code);
}

function calculateMedian(collection) {
  let median, length = collection.length;
  if (length % 2 == 0) {
    median = (collection[length / 2] + collection[length / 2 - 1]) / 2;
  } else {
    median = collection[(length - 1) / 2];
  }
  return median;
}

function codeToLetter(code) {
  if (code > 26) {
    let firstCode = Math.floor((code - 1) / 26) - 1 + 97;
    let secondCode = (code - 1) % 26 + 97;
    return String.fromCharCode(firstCode, secondCode);
  } else {
    return String.fromCharCode(97 + code - 1);
  }
}

module.exports = median_to_letter;

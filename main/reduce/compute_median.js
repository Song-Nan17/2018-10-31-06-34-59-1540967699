'use strict';

function compute_median(collection) {
  let rankAscArr = collection.sort(rankAsc);
  return calculateMedian(rankAscArr);
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

function rankAsc(a, b) {
  return a - b;
}

module.exports = compute_median;



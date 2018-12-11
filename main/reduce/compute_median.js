'use strict';

function compute_median(collection) {
  let rankAscArr = collection.sort(rankAsc);
  let average, length = rankAscArr.length;
  if (length % 2 == 0) {
    average = (rankAscArr[length / 2] + rankAscArr[length / 2 - 1]) / 2;
  } else {
    average = rankAscArr[(length - 1) / 2];
  }
  return average;
}

function rankAsc(a, b) {
  return b - a;
}

module.exports = compute_median;



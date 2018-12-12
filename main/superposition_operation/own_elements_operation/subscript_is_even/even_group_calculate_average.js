'use strict';
var even_group_calculate_average = function (collection) {
  let evenSubArr = collectNumEvenEle(collection);
  let evenSubEvenArr = collect_all_even(evenSubArr);
  if (evenSubEvenArr.length == 0) {
    return [0];
  } else {
    let groupArr = evenSubEvenArr.reduce(groupArray, [[], [], []]);
    return averageArrayAndRemoveEmpty(groupArr);
  }
};

function averageArrayAndRemoveEmpty(collection) {
  let averageArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].length !== 0) {
      let average = compute_average(collection[i]);
      averageArray.push(average);
    }
  }
  return averageArray;
}

function compute_average(collection) {
  return collection.reduce(sumArr) / collection.length;
}

function sumArr(accumulator, currentValue) {
  return accumulator + currentValue;
}

function groupArray(groupArr, ele) {
  let numLength = ele.toString().length;
  switch (numLength) {
    case 1:
      groupArr[0].push(ele);
      break;
    case 2:
      groupArr[1].push(ele);
      break;
    case 3:
      groupArr[2].push(ele);
      break;
  }
  return groupArr;
}

function collectNumEvenEle(collection) {
  return collection.filter(isNumEven);
}

function isNumEven(element, index) {
  if ((index + 1) % 2 == 0) {
    return element;
  }
}

function collect_all_even(collection) {
  return collection.filter(isEven);
}
function isEven(element) {
  return element % 2 == 0;
}

module.exports = even_group_calculate_average;

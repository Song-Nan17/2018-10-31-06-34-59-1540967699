'use strict';

function grouping_count(collection) {
  var countedElements = collection.reduce(function (allElements, ele) { 
    if (ele in allElements) {
      allElements[ele]++;
    }
    else {
      allElements[ele] = 1;
    }
    return allElements;
  }, {});
  return countedElements;
}

module.exports = grouping_count;

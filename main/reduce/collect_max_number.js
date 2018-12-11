'use strict';

function collect_max_number(collection) {
  return collection.reduce(maxNumber);
}
var maxNumber = function (max,current) {
  return Math.max(max,current);
}

module.exports = collect_max_number;

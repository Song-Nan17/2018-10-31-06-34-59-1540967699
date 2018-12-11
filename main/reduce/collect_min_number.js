'use strict';

function collect_min_number(collection) {
  return collection.reduce(minNumber);
}
var minNumber = function (min,current) {
  return Math.min(min,current);
}

module.exports = collect_min_number;


'use strict';

function get_intersection(collection_a, collection_b) {
  const isInclude = function (element) {
    return collection_a.includes(element);
  }
  return collection_b.filter(isInclude);
}

module.exports = get_intersection;

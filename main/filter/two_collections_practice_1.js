'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(function isInclude(element) {
    return collection_b.includes(element);
  });
}

module.exports = choose_common_elements;

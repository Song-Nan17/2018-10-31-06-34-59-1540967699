'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  const notInclude = function (element) {
    return !collection_b.includes(element);
  }
  return collection_a.filter(notInclude);
}

module.exports = choose_no_common_elements;

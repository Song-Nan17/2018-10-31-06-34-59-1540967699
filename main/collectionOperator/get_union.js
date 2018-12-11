'use strict';

function get_union(collection_a, collection_b) {
  var complementary = collection_b.filter(function isInclude(element) {
    return !collection_a.includes(element);
  });
  var union = collection_a.concat(complementary);
  return union;
}

module.exports = get_union;


'use strict';
var rank_desc = function (collection) {
  return collection.sort(function rankDesc(a, b) {
    return a - b;
  });
};

module.exports = rank_desc;

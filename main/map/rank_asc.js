'use strict';
var rank_asc = function (collection) {
  return collection.sort(function rankAsc(a, b) {
    return b - a;
  });
};

module.exports = rank_asc;

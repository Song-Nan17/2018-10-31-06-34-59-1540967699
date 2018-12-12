var even_asc_odd_desc = function (collection) {
  let evenArr = choose_even(collection);
  let oddArr = choose_odd(collection);
  evenArr = rank_asc(evenArr);
  oddArr = rank_desc(oddArr);
  return evenArr.concat(oddArr);
};

function choose_even(collection) {
  return collection.filter(isEven);
}

function isEven(element) {
  return element % 2 == 0;
}

function choose_odd(collection) {
  return collection.filter(isEven);
}

function isOdd(element) {
  return element % 2 !== 0;
}

var rank_asc = function (collection) {
  return collection.sort(rankAsc);
};

function rankAsc(a, b) {
  return b - a;
}

var rank_desc = function (collection) {
  return collection.sort(rankDesc);
};

function rankDesc(a, b) {
  return a - b;
}
var collection_a = [4, 32, 12, 45, 67, 46, 2, 53, 68, 54, 11];
console.log(even_asc_odd_desc(collection_a));
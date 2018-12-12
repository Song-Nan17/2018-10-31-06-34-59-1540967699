function create_updated_collection(collection_a, object_b) {
  let valueArr = object_b.value;
  const findSameAndMinusOne = function (obj) {
    if (valueArr.includes(obj.key)) {
      obj.count -= subStrachend(obj.count);
    }
    return obj;
  }
  return collection_a.map(findSameAndMinusOne);
}

function subStrachend(num) {
  return Math.floor(num / 3);
}

module.exports = create_updated_collection;

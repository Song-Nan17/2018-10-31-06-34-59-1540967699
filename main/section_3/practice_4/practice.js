function create_updated_collection(collection_a, object_b) {
  let collection = count_same_elements(collection_a);
  let valueArr = object_b.value;
  const findSameAndMinusOne = function (obj) {
    if (valueArr.includes(obj.key)) {
      obj.count -= subStrachend(obj.count);
    }
    return obj;
  }
  return collection.map(findSameAndMinusOne);
}

function subStrachend(num) {
  return Math.floor(num / 3);
}

function count_same_elements(collection) {
  let countsArr = grouping_count(collection);
  return countsArr.map(formatObj);
}

function formatObj(arr) {
  let formattedObj = {};
  formattedObj.key = arr[0];
  formattedObj.count = arr[1];
  return formattedObj;
}

function grouping_count(collection) {
  let obj = collection.reduce(countedElements, {});
  return Object.entries(obj);
}

function countedElements(allElements, eleString) {
  let ele = eleString[0];
  let eleValueNum = toGetNumInStr(eleString);
  if (ele in allElements) {
    allElements[ele] += eleValueNum;
  } else {
    allElements[ele] = eleValueNum;
  }
  return allElements;
}

function toGetNumInStr(str) {
  let strValue = str.replace(/[^0-9]/ig, "");
  let strValueNum;
  if (strValue == 0) {
    strValueNum = 1;
  } else {
    strValueNum = Number(strValue);
  }
  return strValueNum;
}

module.exports = create_updated_collection;

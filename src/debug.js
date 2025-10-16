/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.splice(0, arr.length) //.length tells you how many items are inside of something (arr/string)
};

const getFirstItem = (array) => {
  return array[0]
};

module.exports = {
  clearArr,
  getFirstItem,
};

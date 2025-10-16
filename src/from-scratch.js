const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) {
    arr.unshift(value);
  } else {
    arr.push(value);
  }
  return arr
};

const reverseString = (string) => {
  const words = string.split("")
  const reverse = words.reverse()
  const word = reverse.join("")
  return word
};

const newArrayFullOf = (value, number) => {
  const arr = new Array(number)
  arr.fill(value);
  return arr;
};

const insertIntoMiddle = (arr, value) => {
  const midNum = Math.floor(arr.length / 2);
  arr.splice(midNum, 0, value);
};

const deleteFromMiddle = (arr, value) => {
  const deleteNum = Math.floor(arr.length / 2)
  arr.splice(deleteNum, 1)
};

const isRightIndex = (arr, value, index) => {
  if (arr[index] === value) {
    return true;
  } else {
    return false;
  }
};

const roundAllNumsDown = (arr) => {
  const newArr = arr.map(arr => Math.floor(arr));
  return newArr
};

const getAllYCoordinates = (arrOfCords) => {
  let newArr = [];
  for (let i = 0; i < arrOfCords.length; i++) {
    newArr.push(arrOfCords[i][1])
  }
  return newArr
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};

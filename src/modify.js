const uppercaseAll = (...word) => {
  return word.map(word => word.toUpperCase());
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = [coordinates[0], coordinates[1]];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};

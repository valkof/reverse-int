module.exports = function reverse (n) {
  return + Math.abs(n).toString().split('').reduce((str, char) => char + str);
}

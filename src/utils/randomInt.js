module.exports = {
  randomInt: (min, max) => {
    return min + Math.floor((max - min) * Math.random())
  }
}

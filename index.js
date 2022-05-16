const randomProfile = require('random-profile-generator');

// var profile = randomProfile.profile();
// let names = randomProfile.name()

const someArr = [];
const n = process.argv[2];
const generateNames = (n) => {
  for (let i = 0; i < n; i += 1) {
  someArr.push(randomProfile.name())
  }
  return someArr
}
console.log(generateNames(n));

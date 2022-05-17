const randomProfile = require('random-profile-generator');
const fs = require('fs');
const n = process.argv[2];
let fileName = `./${n}-names.txt`

const someArr = [];


const generateNames = (n) => {
  for (let i = 0; i < n; i += 1) {
  someArr.push(randomProfile.name())
  }
  return someArr
}
console.log(generateNames(n));

const writeResults = (n) => {
  if (fs.existsSync(`./${n}-names.txt`) === false) {
  fs.writeFileSync(fileName, `${someArr.join('\n')}`);
  }
}
writeResults(n)

const rand = Math.round(Math.random() * (20 - 1) + 1)
console.log(rand)

const getRandomInteger = () => {
  if (n === undefined) {
    for (let i = 0; i < rand; i++) {
      someArr.push(randomProfile.name())
    }
    fileName = `./${rand}-names.txt`
    fs.writeFileSync(fileName, `${someArr.join('\n')}`);
  }
}
getRandomInteger()

module.exports = {}

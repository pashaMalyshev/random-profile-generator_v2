const fs = require('fs');
const getRandomInteger = require('./getRandomInteger')
const someArr = require('./generateNames')

const writeResults = (n = getRandomInteger()) => {
  let arr = someArr(n)
  
  let fileName = `./${n}-names.txt`
  fs.writeFileSync(fileName, ``);
  
  arr.forEach((elem) => {
    console.log(elem)
    fs.appendFileSync(`./${n}-names.txt`, `${elem}\n`)
  }) 
}

module.exports = writeResults;


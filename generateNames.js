const generateNames = (n) => {
const randomProfile = require('random-profile-generator');

  const someArr = [];
  for (let i = 0; i < n; i += 1) {
  const qwer = randomProfile.profile()
  someArr.push(qwer.fullName)
  }
  return someArr
}

module.exports = generateNames

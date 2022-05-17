const getRandomInteger = () => {
  const rand = Math.round(Math.random() * (20 - 1) + 1)
  return rand
}

module.exports = getRandomInteger;

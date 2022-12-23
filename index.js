/// index.js

const writeCards = (names) => {
    return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
  }
  
  const countDown = (num) => {
    if (num < 0) {
      return;
    }
  
    console.log(num);
    countDown(num - 1);
  }
  
  module.exports = {
    writeCards,
    countDown,
  };
  
  
const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let arr = [];
  let counter = 0;

  for (let i = 0; i < 10; i++) {
    arr.push(addNums(counter += increment));
  }

  return arr;
  // Fill this in

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let arr = [];
  let counter = 0;

  for (let i = 0; i < 10; i++) {
    arr.push(addManyNums(counter += increment));
  }

  return arr;
  // Fill this in

}

module.exports = [addNums10, addManyNums10];

// Adds up positive integers from 1-n
function addNums(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
  // Fill this in

}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += addNums(i);
  }

  return total;
  // Fill this in

}



module.exports = [addNums, addManyNums];

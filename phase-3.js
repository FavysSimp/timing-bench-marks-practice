const [addNums, addManyNums] = require("./phase-1");
const [addNums10, addManyNums10] = require("./phase-2");


function addNums10Timing(increment) {
  let arr = [];
  let counter = 0;

  for (let i = 0; i < 10; i++) {
    console.time('addNums');
    arr.push(addNums(counter += increment));
    console.timeEnd('addNums');
  }

  return arr;
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here

}


function addManyNums10Timing(increment) {
  let arr = [];
  let counter = 0;

  let startTime = Date.now();
  for (let i = 0; i < 10; i++) {
    console.time('addManyNums');
    arr.push(addManyNums(counter += increment));
    console.timeEnd('addManyNums');
  }
  let endTime = Date.now();

  console.log(`This shi took ${endTime - startTime}ms`);

  return arr;
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 5000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);



11.169
4.053
14.583
10.324
8.748
17.171
15.456
18.102
15.012
19.817

***********

27.073
103.902
166.96
244.423
380.165
525.712
881.797
990.39
1.240
1.657

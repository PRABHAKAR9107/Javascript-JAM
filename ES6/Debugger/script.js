//Debugging

//Searching for (and fixing) errors in programming code is called code debugging.

const flatEnd = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((a, b) => {
  debugger;
  a.concat(b);
}, []);

//The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.

const flatEnd1 = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, array) => {
  console.log("array", array);
  console.log("accumlator", acc);

  return acc.concat(array);
}, []);

console.log(flatEnd1);

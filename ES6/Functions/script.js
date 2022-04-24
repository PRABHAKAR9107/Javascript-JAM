"use strict";

//Arrow functions

const sumValue = (a, b) => {
  return a + b;
};

console.log(sumValue(5, 4));

//Closures:- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

//A closure gives you access to an outer function's scope from an inner function.

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  //displayName();
  return displayName;
}

var myFunc = makeFunc();
myFunc();

console.log(myFunc);

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

console.log(makeAdder(5)(4));

//Currying:-Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions.

function sump(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sump(1)(2)(3));

//We could separate this sum(1)(2)(3) to understand it better:

/*
const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6
Let’s get to know how it works:
We passed 1 to the sum function:
let sum1 = sum(1);
It returns the function:
return (b) => {
        return (c) => {
            return a + b + c
        }
}
Now, sum1 holds the above function definition which takes an argument b.
We called the sum1 function, passing in 2:
let sum2 = sum1(2);
The sum1 will return the third function:
return (c) => {
            return a + b + c
}
The returned function is now stored in sum2 variable.
sum2 will be:
sum2 = (c) => {
            return a + b + c
}
When sum2 is called with 3 as the parameter,
const result = sum2(3);
it does the calculation with the previously passed in parameters: a = 1, b = 2 and returns 6.
console.log(result); // 6

*/

//Composition:- Function composition is the pointwise application of one function to the result of another.

let compose = (func1, func2) => (value) => func1(func2);
// const add2 = (n) => n + 2;
// const times2 = (n) => n * 2;
// const times2add2 = compose(add2, times2);
// const add6 = compose(add2, add2, add2);
let double = (n) => n * 2;
let triple = (n) => n * 3;
let composed = compose(double, triple);

console.log(composed(2));
// console.log(times2add2(2)); // 6
// add6(2); // 8

//Solve these problems:

//#1 Create a one line function that adds adds two parameters

function newAdd(a, b) {
  return a + b;
}

console.log(newAdd(5, 10));

//Closure: What does the last line return?
const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
console.log(addToTen(3));

//Solution is 13

//Currying: What does the last line return?
// const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
console.log(curriedSum(30)(1)); //31

// Currying: What does the last line return?
// const sum = (a, b) => a + b;
const curriedSum2 = (a) => (b) => a + b;
const add5 = curriedSum2(5);
const result = add5(12);

console.log(result); //17

// Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add4 = (num) => num + 4;
// let tip = compose(add1, add5);

// tip(10);

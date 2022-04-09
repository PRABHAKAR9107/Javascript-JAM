"use strict";

//Functions

//A javascript function is a block of code that performs something, like calculations, comparisons, etc. Functions are used for a lot of purposes in programs.

//save lines of code and time

/*Basic Syntax 

function functionName(){

    statements;//block of code

}

FunctionName();
*/

//Call- invokes a function -only way to execute the lines of code in the function

function printHello() {
  alert("Hello there!");
}
printHello();

//Send values to a function

let num1 = 5;
let num2 = 6;

function sumNum(n1, n2) {
  let sum = n1 + n2;
  return sum; // only one return statement-function execution is going stop
}
// console.log(sumNum(num1, num2));
sumNum(5, 4);

//Local variables:-Variables created within functions only have scope within them. They are called local variables.

function name() {
  let num; //local scope or function scope
}
// alert(num); //Reference error: num not defined

//Default parameters values
//Parameters:- is a variable in method definition.
//Arguments:-are data types into the method's parameters

function addNum(num3, num4) {
  let sum = num3 + num4;
  console.log(num3, num4); //they are undefined
  console.log(sum); //NaN
}

addNum();
addNum(2, 7);

//default parameters Can be string or Boolean too, not just numbers.

function whoIsThis(child = true, message = "Child!") {
  // true and child default parameters
  if (child === true) {
    console.log(message);
  } else {
    console.log("Nope!");
  }
}
whoIsThis(); //Child
whoIsThis(false); //Nope
whoIsThis(true); //child
whoIsThis(true, "Baby!"); //Baby!

//Give function as default parameter
function addNum(num1, num2 = mulNum()) {
  let sum = num1 + num2;
  console.log(sum);
}
addNum(5); //11
function mulNum(num1 = 2, num2 = 3) {
  let mul = num1 * num2;
  console.log(mul);
  return mul;
}

//Empty return statement

var sum;
function addNum(num1, num2) {
  sum = num1 + num2;
  return;
}
console.log(addNum(5, 2)); //undefined
console.log(sum); //7

//Using the return statement to stop executing the functions

//Functions as values

function addNum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
let mul = addNum(5, 2) * 3;
console.log(mul); //21

//Return multiple lines of return:

function addNum(num1, num2) {
  let sum = num1 + num2;
  return `Hello there!
  The sum of numbers ${num1} & ${num2} is ${sum}`;
}
console.log(addNum(5, 2));

//Function expressions/Anonymous functions
//function without name is anonymous functions

/*
let varName = function(param1,param2...) {
statement1;
statement2;
.
.
.
}


*/

let age = function (a) {
  return a; //5
};

console.log(age); // output is fn
console.log(age(5));
5;

let age1 = age(50);
console.log(age1); //50

//Difference between function declaration and expression

//Function declaration can be called before it is declared

var bool = true;

if (bool == true) {
  function ageTip(a = 5) {
    return a;
  }
  ageTip();
}

//function declarations created within code blocks have a block scope and cannot be called from outside the block.

//Self-Invoking functions

//make function expression self invoking make them call themselves

//Can't make function declarations self-invoking though, only function expressions.

//Add a () after the function to indicate that it’s self-invoking.

(function () {
  console.log("I am a self-invoking function!");
})();

var age3 = (function () {
  console.log("hello world");
})();

//Arrow Functions

//ES6 updates, also called as fat arrows

/*
Originally
let helloFunc = function() {
return "Hello world";
}
console.log(helloFunc());

Shorten it

let helloFunc=()=>{   //=> fat arrow

  statements;
};


console.log(helloFunc());

*/

let helloFunc = () => {
  console.log("Namaste 🙏");
  return "Hello Guys";
};
console.log(helloFunc());

//If there is only one line of code in the function.
helloFunc = () => "Hello world";
console.log(helloFunc());

//If you have parameters, usually, you’ll write like this:

let sumNumber = (a, b) => a + b;
console.log(sumNumber(5, 6));

//If only one parameter, then no need for brackets:

let dispString = (a) => alert(a);
console.log(dispString("Hello India!"));

//Arguments objects

//store all the arguments that you send via your function call-from of an array

//Access these arguments within the function calculate the length of argument list

//Too many arguments(10+)-arguments are the best way to access themselves

function numValue() {
  let sumValue = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumValue += arguments[i];
  }
  return sumValue;
}

console.log(numValue(5, 6, 8, 2, 12, 6));

//Recursive Functions

//Recursive functions are functions that call themselves.

//Recursions at their base can be used in place of loops and iterations.

function countDown(number) {
  // display the number
  console.log(number);

  // decrease the number value
  const newNumber = number - 1;

  // base case
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);

// program to find the factorial of a number

function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

console.log(factorial(3));

/*
factorial(3) returns 3 * factorial(2)
factorial(2) returns 3 * 2 * factorial(1)
factorial(1) returns 3 * 2 * 1 * factorial(0)
factorial(0) returns 3 * 2 * 1 * 1

*/

//sum of n numbers
function addNumber(n) {
  if (n == 1) {
    return n;
  } else {
    return n + addNumber(n - 1);
  }
}
console.log(addNumber(5));

/*

Let’s have n as 5 to start with.
5 + addNum(5-1)
addNum(4) -> 4 + addNum(4-1)
addNum(3) -> 3 + addNum(3-1)
addNum(2) -> 2 + addNum(2-1)
addNum(1) -> return n, which is 5 + 4 + 3 + 2 + 1 = 15

*/

//Spreading an array into function arguments

function addTwoNum(num1, num2) {
  sum = num1 + num2;

  return sum;
}

let arr = [6, 7, 5];

// console.log(arr);//Error

//To do that, use the separator syntax while calling the function, like this:

console.log(addTwoNum(...arr));

let arr1 = [4, 6, -4, 2];
console.log(Math.max(...arr1));

let arr2 = [4, 6, -4, 2];
let arr3 = [15, 6, -32, 54];
console.log(Math.max(...arr2, ...arr3));

//You can use it to combine arrays too:

let arr6 = [4, 6, -4, 2];
let arr4 = [15, 6, -32, 54];
let arr5 = [43, 23, ...arr6, 5, ...arr4, 12];
console.log(arr5);

//Rest parameters

//Accept extra parameters or any parameters as an array (user defined) and use it in your function

function addNum(num1, num2, ...arr) {
  let sum = num1 + num2;
  console.log(arr); //[6, 7, 3]
  return sum; //8
}
console.log(addNum(5, 3, 6, 7, 3));

function addNumberr(num1, num2, ...arr) {
  let sum = num1 + num2;
  for (let a of arr) {
    sum += a;
  }
  return sum;
}
console.log(addNumberr(5, 3, 6, 7, 3));

/* 

function addNum(...arr) {
let sum = 0;
for(let a of arr) { //explain this syntax
sum += a;
}


*/

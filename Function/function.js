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

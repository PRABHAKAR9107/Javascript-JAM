"use strict"; //enables the latest javascript modifications or modern Javascript

var a = 5;
var a = 6;

let b;

b = 8;

const c = 5; //It remains always same

// let b = 10; //you can not be re-declared let variable

console.log(a);

console.log(b);

console.log(c);

//Assigning values into variables

// string:- collections of characters

let fruit = "banana"; //String

let num = "5/2"; //number:- it could be whole number or integer or decimal

let isHere = " false"; //Camel casing :- first word will small and after that every letter of world will be capital

let bool = 1 > 2;

console.log(bool); // Boolean Output

//boolean: Either true or false;

//JS variables hold dynamic data types

let person = "Prabhakar";

//typeof:- operator is used to find the type of variable or value

console.log(typeof person); //string

person = 5;

console.log(typeof person); //number

person = true;

console.log(typeof person); //boolean

// Infinity and NaN

let f = 1 / 0;

console.log(f); //Infinity

f = 1 + 1 / 0 + 1;

console.log(f); //still Infinity

let ge = "apple" / 1;

console.log(ge); //NaN because it is not a mathematical expression

//Assigning different variables and different data types

// Arrays and object

let arr = [1, "hello", 3]; //Arrays are written within square brackets, and they are used to hold more than one value at a time, unlike a normal variable.

let obj = { name: "John", class: 5, subject: "English" }; //Objects are similar to arrays, but they are used to hold properties and values of a single “object”.

console.log(arr);

console.log(obj);

// Undefined and Null

let p = "parrot";
p = undefined;

console.log(typeof p); //type & value is undefined

console.log(typeof ""); //type is string but value is nothing.

//Null :- means nothing

obj = null;

console.log(typeof obj); //object

//Null and undefined are equal in value(nothing) but unequal in type.

console.log(null == undefined); //true because they are equal in type
console.log(null === undefined); //false because they are equal in type but unequal in value.

//4 primitive data types:- strings,number,boolean,undefined
//Primitive data types:-hold one value at a time and no additional methods and properties.

//Non-primitive(Complex)Data types:- objects and functions (hold multiple values and methods and properties)

let j = [1, 2, 3];

console.log(typeof j); //object

//TYPE CONVERSION  FUNCTION

//String Conversion Function

let g = 1; //Number to String

console.log(typeof g);
g = String(g);
console.log(typeof g);
console.log(g);

let bl = true; //Boolean to String
console.log(typeof bl);
bl = String(bl);
console.log(typeof bl);
console.log(bl);

//Number Conversion Function

let newNum = "12345";

// let newNum=" 12345 "//12345

// let newNum=" 1 234 "//NaN cannot use space between letters

// let newNum="hello";//NaN

// let newNum=undefined;//NaN

// let newNum=null;//0

// let newNum="";//0 empty String

console.log(typeof newNum);

newNum = Number(newNum);
console.log(typeof newNum);
console.log(newNum);

//Boolean to Number

//true-1 false-0

//Boolean Conversion Function

let dell = 1; //it always true accept 0

// let del="";//0

// let del="fj";//1

// let del = null;//false
// let del=undefined://false

console.log(Boolean(dell));

// let age = prompt("what is your age?");//taking input from user

let agee = confirm("Are you less than 5 years old?"); //true or false

if (agee == true) {
  alert("You're a baby");
} else {
  alert("You've grown up!");
}

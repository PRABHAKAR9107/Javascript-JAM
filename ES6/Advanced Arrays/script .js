"use strict";
//Advanced Arrays

//forEach(parameters):-
/*
The forEach Javascript array method is used to iterate through an array and then it runs a callback function on each value on the array and then it returns undefined.

The forEach method accepts a callback function as its first parameter.

*/

function double(x) {
  return x * 2;
}

let number1 = [8, 9, 7, 5];

let doubleValue = number1.map(double);
// let doubleValue = number1.map(function double(x) {
//   return x;
// });
console.log(doubleValue);

//filter odd value inside the array

let oddValue = number1.filter((x, i, array) => {
  console.log(i);
  console.log(array);

  return x % 2 != 0;
});

console.log(oddValue);

//reduce:- takes two arguments second callback function and first accumalator

let array3 = [5, 9, 6, 7];

function findSum(array3) {
  let sum = 0;

  for (let i = 0; i < array3.length; i++) {
    sum = sum + array3[i];
  }
  return sum;
}
console.log(findSum(array3));

const array4 = array3.reduce((acc, current, i, array4) => {
  console.log(current);
  console.log(i);
  console.log(array4);
  return acc + current;
}, 0);

console.log(array4);

//accumalator acts as sum value which is declared.

let skills = ["HTML", "CSS", "Javascript"];

skills.forEach((val, index, arr) => {
  console.log(val, index, arr);
});
//console.log(skills);

let arr = [5, 6, 4, 7];
let arr1 = [];
let newArray = arr.forEach((num) => {
  arr1.push(num + 2);
});

console.log(newArray); //undefined
console.log(arr1); // [7, 8, 6, 9]

//map():-Unlike the forEach method, the map array method when invoked on an array creates a brand new array.

let city = ["bangalore", "patna", "delhi"];

let newCity = city.map((city) => city.toUpperCase());
console.log(newCity);

let tableOf2 = [1, 2, 3, 4, 5];

let table = tableOf2.map((num) => num * 2);

console.log(table);

//find():-

//The find array method returns the value of the first element in the array it is invoked on that matches the expression in the callback function.

let frameworks = ["React", "Angular", "Vue", "Express"];

let foundFramework = frameworks.find((framework) => framework === "Express");

console.log(foundFramework);

//filter():-

let employee = ["Rahul", "Rajat", "Mohan", "Kumar"];

let employeeList = employee.filter((employee) => employee.startsWith("R"));
console.log(employeeList);

let numArray = [5, 4, 3, 90];

let findArray = numArray.filter((index) => index > 5);

console.log(findArray);

//reduce():-

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);

// expected output: 10

let reduceArr = array1.reduce((acc, num) => {
  return acc + num;
}, 5);

console.log(reduceArr);

//Array Destructuring

var arr6 = ["Hello", "World"];

// destructuring assignment
// var [first, second] = 6;

// console.log(first); // Hello
// console.log(second); // World

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// destructuring assignment
var [color1, color2, color3] = colors;

console.log(color1); // Violet
console.log(color2); // Indigo
console.log(color3); // Blue

var [color1, , color3, , color5] = colors; //Leave space for unpick elements
console.log(color1); // Violet
console.log(color3); // Blue
console.log(color5); // Yellow

//Array destructuring and Rest operator

var [a, b, ...args] = colors;
console.log(a);
console.log(b);
console.log(args);

//Array destructuring and Default values

var x, y;

[x = 50, y = 70] = [100];
console.log(x); // 100
console.log(y); // 70

[x, y] = [y, x];
console.log(x); // 200
console.log(y); // 100

//Parsing returned array from functions

function array() {
  return [100, 200, 300];
}

var [x, y, z] = array();

console.log(x); // 100
console.log(y); // 200
console.log(z); // 300

const posts = [
  {
    id: 1,
    title: "Hello World",
    content: "Welcome to learning React!",
    age: 5,
  },
  {
    id: 2,
    title: "Installation",
    content: "You can install React from npm.",
    age: 6,
  },

  {
    id: 3,
    title: "Installation",
    content: "You can install React from npm.",
    age: 6,
  },
  {
    id: 4,
    title: "Installation",
    content: "You can install React from npm.",
    age: 5,
  },
];
//age={7:1,6:2,5:1}

const findAge = posts.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(findAge);

const output = posts.filter((x) => x.age < 6).map((x) => x.title);

console.log(output);

const findTitle = posts.reduce(function (acc, curr) {
  if (curr.age < 6) {
    // acc = curr.title;
    acc.push(curr.title);
  }
  return acc;
}, []);

console.log(findTitle);

const arry2 = [1, 2, 1, 3, 4, 3, 5];

// function tip(item) {
//   return;
// }

const toFindDuplicates = arry2.filter((item, index, arry2) => {
  console.log(arry2.indexOf(item));

  // console.log(index);

  return arry2.indexOf(item) !== index;
});
const duplicateElements = toFindDuplicates;
console.log(duplicateElements);

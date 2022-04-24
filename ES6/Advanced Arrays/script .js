//Advanced Arrays

//forEach(parameters):-
/*
The forEach Javascript array method is used to iterate through an array and then it runs a callback function on each value on the array and then it returns undefined.

The forEach method accepts a callback function as its first parameter.

*/

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

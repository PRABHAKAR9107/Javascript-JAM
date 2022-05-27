"use strict";
//Array and it's method

//hold multiple information of different type with in the same variables-arrays

//store an array of values,access each value separately or access all of them together

let a = new Array(); // declaring an array

a = [1, 2, 3, 4, 5]; //elements separated by commas in closed [] brackets.

//Accessing the values through index:- starts from 0-last element has index of length-1

console.log(a);
console.log(typeof a); //object
let b = a[4];
console.log(b);

a[4] = 6; //change the value of 5th element

a[5] = 7; //add 6th element
a[7] = 8;
console.log(a); //[1, 2, 3, 4, 6, 7, empty, 8]

let array1 = []; //Can also declare arrays like this

//Arrays can have multiple data types inside of them:

array1 = ["orange", 2, 3, "apple", true, false, 2.0, 5.5];
console.log(array1);

//Declare arrays as objects and assign values:
let array2 = new Array("orange", 2, 3, "apple", true, false, 2.0, 5.5);

console.log(array2);

let array3 = new Array(2); //[empty × 2]
console.log(array3); // so, we can not use that

//Check if something is an array:Array.isArray(array1)

console.log(Array.isArray(array2)); //true

let obj = {};
console.log(Array.isArray(obj)); //false

//You can also use the instanceof operator to get the same result

console.log(array2 instanceof Array); //true

//Loop through an array:

let array4 = [2, 6, 4, 9, 3, 7];
let sum = 0;
for (let i = 0; i < 6; i++) {
  sum += array4[i];
}
console.log("Sum of the array values is: " + sum);

//Assign iteration variable to 0, because array indices start from 0. Should only go right before the length of the array, so 0 to 5, which is 6 iterations

//Array length:-find the number of items in an array using the length property

//arrayName.length:- length of array
sum = 0;
for (let i = 0; i < array4.length; i++) {
  sum += array4[i];
}
console.log("Sum of the array values is: " + sum);

console.log(array2.length); //8

console.log(array2[array2.length - 1]); //5.5

//Push Method

//Push:- used to add new elements at the end of the array(string,boolean,number)

//arrayName.push(element);

let p = 1;
let arr = [4, 5, 6, 7];
arr.push(5);
arr.push("hello");
arr.push(false);
arr.push(NaN);
arr.push(p);
console.log(arr);

//Also, if you assign the push statement to another variable, you’ll get the new length of the array.

let z = arr.push(p); //new length of the array
console.log(z);

//Pop method

arr.pop();

arr.pop();

console.log(arr);

//when you assign pop statement in variable then you get popped out element

let m = arr.pop(); //element that was popped out
console.log(m); //NaN

console.log(arr);

//shift and unshift Methods

//arrName.shift():- shift() method removes the first array element and "shifts" all other elements to a lower index

let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits);
fruits.shift();
console.log(fruits);

//when you assign shift statement in new variable
let fruit = fruits.shift();

console.log(fruit); //return the value which is shifted orange

console.log(fruits);

//arrName.unshift(element):-unshift() method adds a new element to an array (at the beginning)

fruits.unshift("Pear");
fruits.unshift("Lichi");
console.log(fruits);

//when you assign unshift statement in new variable

let newFruit = fruits.unshift("lemon");
console.log(newFruit); //return the  new length of the array

// delete ArrayName[index]:-elements can be deleted through indexing

delete fruits[2];

console.log(fruits);

delete fruits[1];

console.log(fruits);

//toString():- convert an array into strings

//arrayName.toString()

let newString = arr.toString();

console.log(newString); //strings always separated by commas

//join():- method also joins all array elements into a string.

//specify the separator -default its separated by commas

newString = arr.join();

console.log(newString);

newString = arr.join(" - ");

console.log(newString);

//Merging an array through concat methods

//The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

let myChildren = myGirls.concat(myBoys);

console.log(myChildren);

//The concat() method does not change the existing arrays. It always returns a new array.

//The concat() method can take any number of array arguments:

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
myChildren = arr1.concat(arr2, arr3);

//The concat() method can also take strings as arguments:

//const myChildren = arr1.concat("Peter");

//Splicing and Slicing Arrays

//The splice() method can be used to add new items to an array:

let fruitse = ["Banana", "Orange", "Apple", "Mango"];
fruitse.splice(2, 2, "Lemon", "Kiwi");

/*
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:
*/

console.log(fruitse);

//The slice() method slices out a piece of an array into a new array.

/* BasicThe slice() method creates a new array.

The slice() method does not remove any elements from the source array.
*/

let arr5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

let n = arr5.slice(1, 3);

console.log(n);

n = arr5.slice(-3, -1);

console.log(n);

console.log(arr5);

//2D  Arrays

//hold arrays within arrays

let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];
console.log(activities);
console.table(activities);

console.log(activities[0][1]);

activities.push(["Study", 2]);

console.table(activities);

let newValues = activities.toString();

console.log(newValues);

//Sort Method

//The sort() method sorts an array alphabetically:

let arr7 = ["Banana", "Orange", "Apple", "Mango"];

arr7.sort();

console.log(arr7);

//Reversing an Array

//The reverse() method reverses the elements in an array.

arr7.reverse();
console.log(arr7);

/*
Numeric Sort
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:
*/

let arr8 = [40, 100, 1, 5, 25, 10];

arr8.sort(function (a, b) {
  return a - b; //compare function
});

console.log(arr8);

//Read that article https://www.w3schools.com/js/js_array_sort.asp

//Date, Date methods & Math object

//Date object-at the basic-displays the current date and time based on the user's date/time

//displays the date in a string in a string in the time zone of the user's browser

let d = new Date();

console.log(d);

//Math Object ,random
//Pre-defined function

//Math-perform mathematical operations on different numbers-square root,square/cube

//Math.PI-properties -3.14
let p = 3 * Math.PI;
console.log(p);

//Round off numbers- round() method->0.5-highest,<0.5-lowest,==0.5 -keep it as it is lower

console.log(Math.round(5.5)); //5
console.log(Math.round(5.6)); //6
console.log(Math.round(5.4)); //5

//Ceiling-higher number of the decimal point
//Math.ceil(num)

console.log(Math.ceil(5.4)); //6

console.log(Math.ceil(5.7)); //6

//floor- lowest number
//math.floor
//You can round a number to its floor value by using the floor() method.

console.log(Math.floor(5.6)); //5

console.log(Math.floor(5.9)); //5

//Power:- calculates x to the power of y

//Math.pow(x,y);
console.log(Math.pow(3, 4)); //81

//the square root of a number by using the sqrt() method

//Math.sqrt()

console.log(Math.sqrt(25));

console.log(Math.sqrt(2)); //1.414

//trunc:- return the integer value given the decimal numbers

console.log(Math.trunc(5.36)); //5

//Absolute value
//abs() method to find the absolute value of a number, that is, positive value of a number.

console.log(Math.abs(-15));

let a = -12;
console.log(Math.abs(a));

//minimum and maximum values for

//You can find the minimum and maximum value of a set of values as well.

let b = Math.min(10, 25, -50, 50, 100, 0);

console.log(b);

let c = Math.max(10, 25, -50, 50, 100, 0);

console.log(c);

//random()-

//Math.random() – generates a number between 0 to 1.

//To get random numbers from 0 to 9

console.log(Math.random());

console.log(Math.random());

c = Math.floor(Math.random() * 10) + 1;
console.log(c);

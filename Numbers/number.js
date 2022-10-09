//Numbers and number methods
//store both whole numbers and decimal numbers.
//Whole numbers are called integers and decimal numbers are called floating point numbers.

//Numbers in javascript, that is integers, are only accurate up to 15 digits. After that, you get junk values.

let x = 999999999999999;
console.log(x);
let y = 99999999999999999;
console.log(y); //Precision decreases after 15 digits.
//For floating point numbers, precision is up to 17 digits.

x = 5e6; //5000000

y = 0.0000005; //5e-6 how you store very small numbers

let z = 0.1 + 0.3;
console.log("float", z); //0.30000000000000004

z = (0.1 * 10 + 0.2 * 10) / 10;
console.log(z); //only works for addition though

//Arithmetic operations on strings and numbers are
// + with strings and numbers -concatenation
//*,-,/,%,**:- Doing this  arithmetic operation number string is converted in number

let a = "hello" + 10 + 20;

console.log(a); // hello1020

a = 10 * "20"; //200
// a = 30 - "10"; //20
// a = 30 % "10"; //0

console.log(a); //200

a = 10 * "hello";

console.log(a); //NaN
console.log(typeof NaN); //Number

//isNaN(operation/variable/number):- true,false

let b = 2 * "hello";
console.log(isNaN(b));

b = 10 * "20"; //200
console.log(isNaN(b));

console.log(isNaN("hello")); //true

console.log(isNaN("4")); //false convert number string in Number

a = 2 * "hello";

b = 20 * 10;

let c = a + b; //NaN + 200 =NaN

console.log(isNaN(c));

a = 2 * "hello";
b = "hello";
c = a + b;

console.log(c); //NaNhello because string concatenation allowed
console.log(isNaN(c));

//Hexadecial Number representation :- 0x0874

//Octal Number representation:- 047593

//highest possible number accepted by browser:- 15 digits(Integer),17 digits(float)

//Infinity:- positive or negative  is a number type.

let d = 1 / 0;
console.log(d); //infinity
console.log(typeof Infinity); //Number
console.log(typeof -Infinity); //number

d = -10 / 0;

console.log(d);

d = 1 / Infinity;
console.log(d); //0

d = 1 / -Infinity;

console.log(d); //-0

d = 10 % Infinity;

console.log(d); //10

//create a small loop that multiplies itself

let e = 5;

//keep multiplying itself and reassign the new value to e for infinity

while (e != Infinity) {
  e = e * e;
  console.log(e);
}

//Numbers as objects

let f = new Number("5");
let g = 5;
console.log(f); //

console.log(f == g); //
f = new Number(5);

console.log(f == g); //
console.log(f === g); // they are different in type

g = new Number(5);

console.log(f == g); //false objects are always different.

//Convert number to string in various formats

//By default-base 10-decimal

// toString() method of Javascript to convert a number to a string, but we can also use it to display the converted number in different number formats.

//toString() radix argument must be between 2 and 36

//Decimal(10),hexadecimal(16),octal(8),binary(2)

let num = 50;

let h = num.toString(10); //Decimal

console.log(h);

console.log(typeof h); //string

h = num.toString(8); //octal  conversion

console.log(h);

h = num.toString(16); //hexadecimal conversion

console.log(h);

h = num.toString(2); //Binary  conversion

console.log(h);

//Exponential Method:-returns a decimal point number after converting it to exponentials, with the number of decimal points mentioned.

let i = 505.4578;

let j = i.toExponential(2);

console.log(j);
j = i.toExponential(5);
console.log(j);
j = i.toExponential(3);

console.log(j); //5.046e+1

console.log(typeof j); //string

j = i.toExponential(12);

console.log(j); //5.045780000000e+1

//Fixing decimal points

//toFixed:-  method also returns a string, but it returns a string where the given decimal number has been reduced to the specified number of decimal points.

//round off:- 0.567 -0.57
i = 50.57698726;

j = i.toFixed(2);
console.log(j);

j = i.toFixed(5); //50.57699
console.log(j);

j = i.toFixed(6);
console.log(j);

console.log(typeof j); //string

//Fixing length of a number
//toPrecision() method returns a string with the number written in a specified length.
//number written in a specified length
//can give entire number's length

let k = 65.632184;

let l = k.toPrecision(2); //66

console.log(l);

l = k.toPrecision(4);
console.log(l); //65.13

console.log(typeof l); //string

//Converting other types to numbers

//Number Methods

//Number() method returns a number converted from the string. Just that. It can be used to convert Boolean values to numbers as well.

let m = 50 + l;

console.log(m); //string

m = 50 + Number(l);

console.log(m); //number

console.log(
  Number("10") +
    "\n" +
    Number(true) +
    "\n" +
    Number(false) +
    "\n" +
    Number(" 10 ") +
    "\n" +
    Number("Hello") +
    "\n" +
    Number(" 203 ") +
    "\n" +
    Number("20 3")
);

//convert date to number -value of the number of milliseconds passed since 1.11970 till the date you give

//Year-Month-Day

let n = new Date("2022-3-29");

console.log(typeof n); //object

n = Number(new Date("2022-3-29"));

console.log(n); //1648492200000

n = Number(new Date("1969-3-29"));
console.log(n);

//parseInt & parseFloat

//similar to the number method -spaces are allowed in parseInt

//parseInt -whole number -decimals numbers still convert to whole number
console.log(
  parseFloat("2.4552") +
    "\n" +
    parseFloat("568") +
    "\n" +
    parseFloat("55 97") +
    "\n" +
    parseFloat(" 10.004 ") +
    "\n" +
    parseFloat("Hello 20") +
    "\n" +
    parseFloat(" 20 Hello")
);

// It doesn’t matter if a number has space around it.
// If the first instance of the string is a word or a letter, it’ll return NaN.
// If the first occurrence of the string is a number, it doesn’t matter if the subsequent occurrences are letters, it’ll convert that first number and leave it at that.

//parseFloat Method

//parseFloat converts a number to a decimal point or floating point number.

console.log(
  parseFloat("2.4552") +
    "\n" +
    parseFloat("568") +
    "\n" +
    parseFloat("55 97") +
    "\n" +
    parseFloat(" 10.004 ") +
    "\n" +
    parseFloat("Hello 20") +
    "\n" +
    parseFloat(" 20 Hello")
);

//More properties and methods

//properties- finding max value,min value etc...

//maximum possible value accepted by javascript and vice versa- Infinity,-Inf

console.log(
  "Max value: " +
    Number.MAX_VALUE +
    "\n" +
    "Min value: " +
    Number.MIN_VALUE +
    "\n"
);

console.log(
  "Max value: " +
    Number.MAX_VALUE +
    "\n" +
    "Min value: " +
    Number.MIN_VALUE +
    "\n" +
    "Negative infinity: " +
    Number.NEGATIVE_INFINITY +
    "\n" +
    "Positive infinity: " +
    Number.POSITIVE_INFINITY +
    "\n" +
    "Not a Number: " +
    Number.NaN
);

let q = 100;

console.log(q.MAX_VALUE); //undefined

//You can’t use these properties on variables though. You’ll get an undefined. These can only be used on Number, because it returns values that are predefined.

Number.isFinite(100); //true

//depending on if a number is finite or not. Returns true if number is a number and is finite.

Number.isInteger(100); //true

//if number does not have decimal points and is a number

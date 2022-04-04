// "use strict";
//Conditional statements: Intro

//return something,or do something if a condition returns true
//If the condition returns false, then certain lines of codes won’t get executed.
//two types of conditional statements are:- if statement ,switch statement

//If,else

/*

if something is true (check condition),
Do this (multiple lines of code)- block of code 

If not, (else)
DO this  (multiple lines of code)- block of code 

Next lines of code 

*/

/*Basic Syntax

if(condition){
    statement1;
    statement2;
    statement3;
}
else{
    statement1;
    statement2;
}

*/

//==,===,>,<,>=,<=,logical operator &&,OR ||

// let num1=7;
// let num2=8;

// if (num1>num2) AND (num1==num2) {
//     console.log("good");
// }
// else {
//     console.log("bad")
// }

let num1 = 5;
let num2 = 6;
if (num1 > num2) {
  console.log("Good!");
} else {
  console.log("Not good");
}

//Else if statements:- used to specify a new condition if the first condition is false.

/* Basic Syntax 

if(condition1) {
Statements set 1
}
else if (condition2) {
Statements set 2
}
else if (condition 3) {
Statements set 3
}
.
.
.
else {
Statements set n
}

*/

let num = 5;
let secretNum = 10;
if (num < secretNum) {
  console.log("Go a bit higher");
} else if (num > secretNum) {
  console.log("Go a bit lower");
} else {
  console.log("You guessed it right!");
}

//Switch statements

//Also accepts a variable as it is -also accept conditions

/*

switch (variable or condition) {

  case "first" : statements;// case will be string ,integer as well as boolean value.
break;
case "second" : statements;
break;
default : statements;// it is a optional statement
}
*/

let a = parseInt(prompt("Give a number between 1 and 5"));
console.log(typeof a);
switch (a) {
  case 1:
    console.log("Number is one");
    break;

  case 2:
    console.log("Number is two");
    break;

  case 5:
    console.log("Number is five");
    break;

  default:
    console.log("Number was not specified");
}

let b = 5;

switch (b > 0) {
  case true:
    console.log("b is greater than five");
    break;
  case false:
    console.log("b is less than five");
}

//Loops- very important -save a lot of lines of code and time to
//Execute the same statement or set of statements again and again ,for either the number of times specified or until the condition becomes false

// types of loops :- for loop, while loop ,do while

/* 

It checks for a condition

As long as the condition is true

Execute the statements within the loop 

Once condition become false
stop executing - move on to line of code outside the block 

Basic Syntax

for(initialization of variable;condition;increment){
  statements;
}

Initialization -declare and assign a value (number) to a variable based let i=1 

Condition- Until when should the loop get executed 
 
Increment- i++,i=i+1,i+=1,i+=3

Loop starts - Initialization-condition

Executing loops is called iteration

*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//Iteration 1 : i=1,i<=5(true) -console.log(1) after that i++ now i =2
//Iteration2: i=2,2<=5(true)--console.log(2) after that i++ now i =3
//Iteration3:i=3,3<=5(true)--console.log(3) after that i++ now i =4
//Iteration4:i=4,4<=5(true)--console.log(4) after that i++ now i =5
//Iteration5:i=5,5<=5(true)--console.log(5) after that loop will be stop

//Initialization is not compulsory. It can be done beforehand.

let p = 1;
for (; p <= 5; p++) {
  console.log(p);
}
//can declare variables more than one

for (let i = 1, sum = 0; i <= 5; i++) {
  sum += i;
  console.log(sum);
}

//Conditional statement (statement 2) is optional too. But, if you omit it, without providing some kind of break inside the for loop, the loop will run endlessly.

//condition will be more than one i<=5&&i==5

// Statement 3 doesn’t always have to be increment, can be decrement too.

//We can execute the statement 3 is in block scope

for (let j = 1; j <= 5; ) {
  console.log(j);
  j++;
}

//While loop

//while the condition is true ,execute the statements

/*

Basic syntax 

Initialization;
while(condition) {
Block of code;
Increment;
}

next line of code

*/
let m = 1;
while (m <= 10) {
  console.log(m);
  m++;
}

// Don’t forget to include increment or decrement condition within the loop, or the loop will run endlessly and crash the browser.

// For loops and while loops have similar syntaxes. One can be converted to another. Convert the above into a for loop.
let n = 1;
for (; n <= 10; ) {
  console.log(n);
  n++;
}

//Do while loop

/* Basic Syntax

Initialization;

do{
  block of code;
  increment/decrement;
}while(conditions);

*/

let i = 11;
do {
  console.log(i);
  i++;
} while (i <= 10);

//Break, continue, labels

//Break :- used to jump out of the loop ({})-loops,if,switch
//That is, stop execution of the loop, so the statements outside of it can be executed.

let q = 1;
while (q <= 10) {
  if (q == 6) {
    break;
  }

  console.log(q);
  q++;
}

for (let r = 1; r <= 10; ) {
  if (r == 6) {
    break;
  }
  ++r;
  console.log(r); //23456
}

//Same goes for do while loop as well.

//Break can be used to break out of a loop prematurely, that is, before the condition becomes false.

//Continue:- statement skips one iteration of a loop. It doesn’t completely stop the execution of the loop like break does.

let s = 1;
while (s <= 10) {
  if (s == 6) {
    s++;
    continue;
  }

  console.log(s);
  s++;
}

for (let t = 1; t <= 10; t++) {
  if (t == 6) {
    t++;
    continue;
  }
  console.log(t); //123458910
}

//Labels:- To break out of any block of code inside just block{ }

//Let’s create a label called numbers, give it a name, then a colon, and enclose within flower brackets.

numbers: {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  break numbers;
  console.log(6);
  console.log(7);
  console.log(8);
  console.log(9);
  console.log(10);
}

//Give break and mention the label name.

//operators

//Assignment Operators(Equal=)

let a;
a = 5;

//Multiple Variable declarations and assignment;

let b = 5,
  c = 6;
//or

let d, e, f;
d = 9;
e = 8;
f = 3;

//Basic calculations and outputs

// + addition
// - subtraction
// * multiplication
// / Division
// % Modulus(reminder)
// ** exponentiation

console.log(a + b);
console.log(c - b);
console.log(b - c);
console.log(c / f);
console.log(d % f);
console.log(a * b);
console.log(a ** f);
console.log(4 ** (1 / 2));

//complicated operators

let i = 10;
i += 5; //i=i+5
console.log(i);
f -= 2; //f=f-2

//Increment & decrement operators:

//Used to increment or decrement values by 1.
//preincrement:- increments g first, and then assigns the new value to h.
let g = 9;
h = ++g;
console.log(h, g);

//postincrement:-assigns original value of i to j first and then increments i.
j = i--;

console.log(j);

//String concatenation:-+ operator, when used with strings, concatenates them, not calculates.

let l = "hello" + "world";

l += "good morning"; //+= can also be used for string concatenation:

let word = 5 + "hello";
console.log(word); //5hello

let con = 1 * 2 + "hello";
console.log(con); //2hello

let newWord = 1 + 6 + "world" + 5 + 6;

console.log(newWord); //7world56

let pure = 5 + "hello" + (5 + 6);
console.log(pure); //5hello11  follow the precedence rule

//Operator Precedence

/*  
So, the precedence is as follows
()
Postfix increment and decrement
Prefix increment and decrement
Multiplication, division, modulus
Addition, subtraction
Then come the bitwise operators, comparison operators and logical operators.
*/

//Comparison Operator:-Comparison operators are used in logical statements to compare two variables or values.

console.log(5 == 5); //true (== -> equal to in value alone)

console.log(5 == "5"); //true because they are equal in value.

console.log(5 === 5); //true (=== -> equal value and equal type)
console.log(5 === "5"); //false, same value, but one is a number and the other is a string

console.log(6 != 5); //true (!= -> Not equal in value alone, not type)

console.log(6 != "6"); //false

console.log(5 !== "5"); //true(!== -> not equal in both value and type)

//>:- greater than operator

console.log(5 > 5); //false
console.log(5 > 4); //true

//<:- lesser than

console.log(5 < 4); //false

console.log(4 < 5); //true

//>=:- greater than or equal to operator

console.log(5 >= "5"); //true

console.log(5 >= 5); //true

//<=:- less than equal to operator

console.log(5 <= 5); //true

//String Comparison

// Rules:-

// 1.Compares first character, and if it finds a comparison, done. If equal, then next character, then next, and so on. If both strings end with same length and same characters, then equal.

// 2.If both strings end with same length, but the last character is different, then looks at the ASCII of both and decides which is bigger.

// 3.If one string has a bigger length than the other, then the bigger one is greater by default if everything else is equal. Compares with ASCII values (Unicode),
// A-65,B-66....Z 65+26, a-97,b-98......

// 4.ASCII is an international number standard for characters. Every letter and special character has an ASCII number.

console.log("A" > "Z"); //false
console.log("boo" > "Bo"); //true

//Comparing different types

// Rules:-
// 1.When comparing a string with a number, JavaScript will convert the numeric string to a number when doing the comparison.

// 2.An empty string converts to 0.

// 3.A non-numeric string converts to NaN which is always false.

console.log(5 < "5"); //false Converts numeric string to number

console.log("5" == "hello"); //false Converts both to number, but “hello” is converted to NaN and comparison against NaN is always false.

console.log(5 > ""); //true

console.log("5" < "15"); //false

// when converting strings to number, 5 is greater tan 15 because 1 is lesser than 5 and that’ll be the first comparison made.
// That is, 1 vs 5 will be the first comparison made and the output will be based on that, not like with full numbers.

//Logical operators

// Used to determine the logic between two variables or values.
// There are three logical operators.
// && - And
// Statement 1 && statement 2
//  If both statements return a value of true, then the entire statement with the && operator is true. Otherwise, the statement is false.

console.log(5 <= 5 && 6 > 5); //true

console.log(0 && 1 && "foo"); //Then we get 0 logged since 0 is the first falsy expression in the operands.

//|| - Or

//  Statement 1 || statement 2
//  If any one of the statements on either side of the or operator is true, then the entire statement is true. The statement returns false only when both statements are false.

console.log(5 <= 5 || 8 <= 9); //true

console.log(0 && 1 && "foo"); //0 Then we get 0 logged since 0 is the first falsy expression in the operands.

// ! – Not
// If the statement is false, then Not of that statement will return false. If the statement is true, Not of that statement will return true.

console.log(!0); // they all log true
console.log(!"");
console.log(!false);
console.log(!NaN);
console.log(!undefined);
console.log(!null);

//Ternary operator or conditional operator

// The conditional operator is used to assign a value to a variable based on a comparison made.
// Syntax is as follows.
// variable = (condition) ? value 1 : value 2;
// For example, let’s create a value, and the condition is going to be, if the value of a different variable is less than 5, we send one value, if not another value.

let age = prompt("What is your age?");

let value = age >= 18 ? "Man" : "Boy";
alert("You are a " + value);

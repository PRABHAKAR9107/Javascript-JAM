//Creating strings

let a = "Hello, world!";

console.log(a);

a = "He said, 'I am going home'.";

console.log(a); //You can also write quotes within strings. But, the quotes in the string should not match the quote outside it.

// a="He said, "I am going home".";//error

//But there is a way to go around this. By using a special character.

//\ -> By using the backslash in front of the quote, you’re letting the browser know that the letter that comes after that is just a character, and not to be confused with a command the browser has to decipher.

console.log("He said, 'I am going home'.");

console.log("\\ is called a backspace");

//Best way to go around this.By using backtick(` `) method

console.log(`Hello Namaste /\\ ,How are you?`);

// Creating strings as objects

let b = new String("hello"); //object
let c = "hello"; //string
console.log(b == c); //true they are same value
console.log(b === c); //false they are different types.

c = new String("hello");

console.log(b == c); //false
console.log(b === c); //false

//comparing 2 objects is always false, because they are different objects.Even though both c and b are objects with same values

//String methods

//string length:- length of the string ,how many characters,including spaces

//syntax:- stringName.length

let str = "hello How are you?";
console.log(str.length);

//Find position of a string or substring in a string:

//indexOf("Substring"):-Index position of the given sub string,case sensitive

//Javascript counts position from 0, so in the following string:

let x = "welcome to JavaScript";
console.log(x.indexOf("JavaScript")); //11
console.log(x.indexOf("javascript")); //-1 case sensitive
console.log(x.indexOf("hello")); //-1 different substring

x = "welcome to javascript javascript javascript";
let y = x.indexOf("javascript", -1);
console.log(y); //22 because the search starts from 12, so the first occurrence of the given substring.

//lastIndexOf("substring"):- return the last occurrence of the given string .

y = x.lastIndexOf("javascript");

console.log(y);

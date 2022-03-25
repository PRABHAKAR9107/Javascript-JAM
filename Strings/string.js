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

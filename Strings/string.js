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
let y = x.indexOf("javascript", 15);
console.log(y); //22 because the search starts from 12, so the first occurrence of the given substring.

//lastIndexOf("substring"):- return the last occurrence of the given string .

y = x.lastIndexOf("javascript");

console.log(y);

//search method mostly used in regular expressions
y = x.search("javascript");
console.log(y); //no second parameter

//Slicing Strings

//The slice() method takes 2 parameters, the start position of slicing and the end position.
let p = "Today is Saturday";

let q = p.slice(6, 12); //first parameter takes included value and last parameter takes excluded value.

console.log(q);

q = p.slice(9);

console.log(q);

q = p.slice(-7, -2); //second parameter takes included value and first parameters takes excluded value.

console.log(q); //aturd

//substring method

//We have a similar method called substring(). But this method does not accept negative parameters.We have a similar method called substring(). But this method does not accept negative parameters.

q = p.substring(6, 13);

console.log(q);

q = p.substring(9);

console.log(q); //saturday

//Replace Content:- replace a substring with something else

//Does not change the actual content of the original string ,unless you reassign the new value to it

//str.replace("string to be replaced","string to replace with")
//case sensitive

let m = "I am a student";

let n = m.replace("student", "teacher");

console.log(`n is ${n}`);
console.log("m is " + m); //it doesn't effect original string

//To make it case insensitive-use regular expression :- /this/i-this,This,THIS etc

n = m.replace(/Student/i, "teacher");

console.log(n); // always change first occurrence of string

m = "I am a student student student";

// to replace every occurrence of the serach string use regular expressions and the g flag-global search
n = m.replace(/student/g, "teacher");
console.log(n);

n = m.replace(/Student/gi, "teacher");

//Convert a string to upper case:- str.toUpperCase();

// It takes no parameters

let prop = "You are a magician";

let j = prop.toUpperCase();

// alert(j);

//Convert upper case to lower case:- str.toLowerCase();

let lower = "Let Me Love You";

let k = lower.toLowerCase();
console.log(k);

//Concatenation- concat to achieve the same result.

//str.concat("string to be concatenated","next string","next string")

//All string methods return a new string which you can assign back to the original or a new variable-it does not modify the original string.

let string = "hello";
let newstring = "world";

let l = string + " " + newstring;

console.log(l);

//We can also use the concat method to achieve the same result.

l = string.concat(" ", newstring);

console.log(l);

l = string.concat(" ", newstring, "! ", "How are you?");

console.log(l);

//Trim String

//Use trim() method to remove white space from both sides of the string.

let intro = " I am Prabhakar ";

console.log(intro);

console.log(intro.trim());
//Character codes

//find characters by mentioning their positions

let r = "This is an example string";
let s = r.charAt(5);
console.log(s); // i

//get the character code of the character at a particular position.

//ASCII code:- a-97...A-65 etc

s = r.charCodeAt(9);

console.log(s); // 84

//Convert String to array of characters/words/substring or something, based on conditions

//split:- str.split(condition)

let rob = "This is a new car";

// let u = rob.split(""); //['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 'n', 'e', 'w', ' ', 'c', 'a', 'r']

let u = rob.split(" ");
console.log(u); //['This', 'is', 'a', 'new', 'car']

//join:- str.join(condition);

//The join() method returns an array as a string.

// The join() method does not change the original array.

let v = u.join(" ");

console.log(v); //This is a new car

v = u.join("-");

console.log(v); //This-is-a-new-car

"use strict";

let msg = "Hello world, I am a Programmer!";
console.log(msg.length);
console.log(msg.indexOf("Programmer!"));
console.log("1: " + msg.startsWith("Hello"));
console.log("2: " + msg.startsWith("Hel"));
console.log("3: " + msg.startsWith("Hello "));
console.log("4: " + msg.startsWith("llo"));
console.log("5: " + msg.startsWith("Programmer", 20));

console.log("6: " + msg.endsWith("r!"));

console.log("7: " + msg.endsWith("Programmer"));

console.log("8: " + msg.endsWith("w", 7));

console.log("9: " + msg.endsWith(""));

console.log("10: " + msg.endsWith(" "));

console.log("11: " + msg.startsWith("!", -1)); //cannot accept negative values

console.log("12: " + msg.includes("a"));

console.log("13: " + msg.includes(" am"));

console.log("14: " + msg.includes(" "));

console.log("15: " + msg.includes("p", 20)); //case-sensitive

console.log("16: " + msg.includes("P", 20));

console.log("17: " + msg.includes("rog", 2));

console.log("18: " + msg.includes("rld", 12)); //false

let newMsg = "Hello ";

console.log(newMsg.repeat(5));
console.log("abc".repeat(2));

let indent = "Yaar  ".repeat(2);
console.log(indent);
let indentLevel = 0;

let newIndent = indent.repeat(++indentLevel);

console.log(newIndent);

//JavaScript Template Literals

//Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

let text = `He's often called "Johnny"`;

console.log(text);

let str = `The quick
brown fox
jumps over
the lazy dog`;

console.log(str);

/* 

Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.

*/

let firstName = "John";
let lastName = "Doe";

console.log(`Welcome ${firstName} ${lastName}`);
console.log(`Welcome ${firstName + lastName} `);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.log(total);

//HTML Template Literals

let header = "Templates Literals";

console.log(`<h2>${header}</h2>`);

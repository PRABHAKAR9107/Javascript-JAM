//Using regular expressions in javascript

//Match & test methods in Javascript

//test-boolean-pattern Matching/testing -password validation, email id,phone number,emai

let string = "This is a simple Javascript string";
let rex = /Javascript/;

//Basic Syntax:- reg_exp.test(string);

console.log(rex.test(string));

document.write(/Javascript/.test("This is a simple Javascript string"));

//Match method

//Match-output the matched string in an array- separated by commas

//Basic Syntax:- string.match(regex)

let pure = "This is a simple Javascript string \n learn about Javascript";

let rex1 = /Javascript/gim; //global flag

document.write(pure.match(rex1));

console.log(pure.match(rex1));

//Regular expression modifiers (flags)
/*

Global flag – gets all instances of the regular expression from the given string
let rex = /Javascript/g;
Case insensitive flag – Makes the search case insensitive (a and A are the same)
let rex = /Javascript/gi;

Multiline flag – can be used to search across multiple lines
let rex = /Javascript/m;

*/

//Regular expressions in search and replace

let string2 =
  "This is my first javascript Regex. Javascript javascript Javascript";
let rex2 = /Javascript/gi;
document.write(string2.search(rex2) + "<br/>");

document.write(string.replace(rex2, "Typescript"));

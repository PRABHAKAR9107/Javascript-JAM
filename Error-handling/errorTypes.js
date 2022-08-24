// types of errors

// 1.Reference Error:- A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.
console.log(username);

// 2. Syntax Error:- Any kind of invalid JavaScript code will cause a SyntaxError
// var a "there's no assignment operator here";

//Uncaught SyntaxError: Unexpected string

// 3.TypeError-A TypeError is thrown when, for example, trying to run a method on a non-supported data type.

// "hello".pop() // Uncaught TypeError: "hello".pop is not a function

// 4.Range Error:- A RangeError is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.

(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36

// There are some other errors in JavaScript. These other errors include:

// AggregateError

// Error

// InternalError

// URIError

// However, in this reading I'll focus on the Reference, Syntax, Type, and Range errors.

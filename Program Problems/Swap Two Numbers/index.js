let a = Number(prompt("value of a:")); //3
let b = Number(prompt("value of b:")); //4

document.write("a=" + a);

document.write("<br />");
document.write("b=" + b);

document.write("<br />");
8;

a = a + b;
b = a - b;
a = a - b;

document.write(`After swapping :-value of a is ${a}  and value of b is ${b}`);

document.write("<br />");
//Destructuring ES6 methods
document.write("<br />");
document.write("<hr />");
document.write("Destructuring ES6 methods");
var x = 42;

document.write("<br />");
document.write("value of x: " + x);
var y = 50;

document.write("<br />");
document.write("value of y: " + y);
var [x, y] = [y, x];

document.write("<br />");
document.write(x);

document.write("<br />");
document.write(y);

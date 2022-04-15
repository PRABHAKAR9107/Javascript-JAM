/*
When a web page is loaded, the browser creates a document object mode, abbreviated as DOM, of the page.

It’s basically a tree that has a record of the hierarchy of a html page.

*/

var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function () {
  console.log("Click");
});

//changing CSS properties:-

document.querySelector("h2").style.background = "blue";
document.querySelector("h3").style.background = "green";

//document.write() – writes directly to the browser

//Never use it after a full page is loaded – it’ll overwrite whatever is in the page

//Use it for testing purposes for a new page, if need be.

document.write(new Date());
document.write("<br/>" + "Thank You 💟 !");

//Access element through TagName

let para = document.getElementsByTagName("p");

para[0].innerHTML = "Hello World";

para[1].innerHTML = "Changed the para";

//Getting element through Id and className

let x = document.getElementById("role");
console.log(x);
x.innerHTML = "Role are defined:- ";

let role = document.getElementsByClassName("first");
role[0].innerHTML = "JS Developer";

//Accessing based on particular CSS query selectors:

/* 
You can access based on query selectors as well, like this:
p#idName
p.className

*/
let y = document.querySelector("p.second");

y.innerHTML = "Front-End Engineer";

//getting attributes and set the attributes

let attr = document.querySelector("img").getAttribute("alt");
console.log(attr);

attr = document.querySelector("img").setAttribute("alt", "prabhakar");

//Another way

let z = document.getElementById("link");
z.href = "https://bing.com";
console.log(z);
z.innerHTML = "Bing";

//Events

/*

Events can be used to create an action-reaction effect.
When something happens,what would happens
If click of an element,run this function 

click event

Basic Syntax:-

element.addEventListener("event",functionName,use capture);

first parameter(Event):- the type of event like click ,mouse down etc
second parameter(FunctionName):- 
fn we want to call when event occurs 
Third parameter(optional ):- boolean true or false 


*/

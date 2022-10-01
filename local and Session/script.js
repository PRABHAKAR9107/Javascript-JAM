localStorage.setItem("name", "Prabhakar");
localStorage.setItem("age", "22");
const result = localStorage.getItem("name");
const resultAge = localStorage.getItem("age");
console.log(`My name is ${result} and age is ${resultAge}`);
localStorage.removeItem("age");

sessionStorage.setItem("profession", "Engineer");

const position = sessionStorage.getItem("profession");

console.log(position);

console.log(`My position is ${position}`);

document.cookie = "username1=John Doe";
document.cookie = "username=John Smith; expires=new Date(); path=/";

//Expires the cookie

// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

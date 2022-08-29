//Callback function

setTimeout(() => {
  console.log("delay");
}, 5000);

function x() {
  console.log("I am callback function");
}

function y(callback) {
  console.log("HOF");
  callback();
}

y(x);

const myTimeout = setTimeout(myGreeting, 3000);

function myGreeting() {
  console.log("birthday");
  document.getElementById("demo").innerHTML = "Happy Birthday to You !!";
}

function myStopFunction() {
  clearTimeout(myTimeout);
}

// y(function x() {
//   console.log("I am callback function");
// })

//x is a callback function and y is higher order functions.

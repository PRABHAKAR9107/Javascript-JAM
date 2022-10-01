try {
  console.log(a + b);
  throw "please assign data to a and b";
  //Custom Error
} catch (error) {
  console.log(error);
  console.log("Error Found");
} finally {
  console.log(
    " Block of code to be executed regardless of the try / catch result"
  );
}

// try block only look runtime errors
try {
  Number(5).toPrecision(300);
} catch (e) {
  console.log("There was an error");
}

try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}

// try {
//   console.log('hello)
//   } catch(e) {
//   console.log("caught");
//   }
// console.log(a + b);
// throw new ReferenceError();

// console.log(c);

// throw "Error2"; // generates an exception with a string value
// throw 42; // generates an exception with the value 42
// throw true; // generates an exception with the value true
// throw new Error("Required");

function getRectArea(width, height) {
  if (isNaN(width) && isNaN(height)) {
    // isNaN() converts the value to a number before testing it.
    throw "Parameter is not a number!";
  } else {
    area = height * width;
  }
}
try {
  // getRectArea(3, 5);

  getRectArea("5", 6);
  console.log(area);
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}

try {
  //   console.log(a + b);
  throw "please assign data to a and b"; //Custom Error
} catch (error) {
  console.log(error);
  console.log("Error Found");
} finally {
  console.log(
    " Block of code to be executed regardless of the try / catch result"
  );
}
// console.log(a + b);
// throw new ReferenceError();

// console.log(c);

// throw "Error2"; // generates an exception with a string value
// throw 42; // generates an exception with the value 42
// throw true; // generates an exception with the value true
// throw new Error("Required");

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  } else {
    area = height * width;
  }
}
try {
  getRectArea(3, 5);
  console.log(area);
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}

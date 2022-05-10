let employee = {
  name: "Prabhakar",
  designation: "Software- developer",
  technology: "React.js",

  sayHello: function () {
    return `Hello , ${this.name}`;
  },
};

// let tip = () => {
//   //   return `${this.name} is from ${city}`;
//   console.log(this.name);
// };

let place = function (city, country) {
  //   console.log(this);
  //   console.log(this.name);
  console.log(`${this.name} is from ${city} in ${country}`);
};
// console.log(place.call(employee, "Delhi", "India"));

place.apply(employee, ["Delhi", "India"]);

console.log(employee.sayHello());

let otherEmployee = {
  name: "Bansal",
  designation: "Software- developer",
  technology: "React.js",
};

console.log(employee.sayHello.call(otherEmployee));

// employee.sayHello.call(otherEmployee);

// console.log(place.call(otherEmployee, "Banglore", "India"));

place.apply(otherEmployee, ["Delhi", "India"]);

let newEmployee = place.bind(employee, "Delhi", "India");

newEmployee();

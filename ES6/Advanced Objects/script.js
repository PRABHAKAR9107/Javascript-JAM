//Object Literals

// function createMachine(name, status) {
//     return {
//         name: name,
//         status: status
//     };
// }

//In ES6 mode

const createMachine = (name, status) => {
  return {
    name,
    status,
  };
};

console.log(createMachine("window", "on"));

//Concise method syntax

// let server = {
// 	name: "Server",
// 	restart: function () {
// 		console.log("The" + this.name + " is restarting...");
// 	}
// };

let server = {
  name: "Server",
  restart() {
    console.log("The" + this.name + " is restarting...");
  },
};

console.log(server.name);
console.log(server.restart());

let prefix = "machine";
let machine = {
  [prefix + " name"]: "server",
  [prefix + " hours"]: 10000,
};

console.log(machine["machine name"]); // server
console.log(machine["machine hours"]); // 10000

//Destructuring in objects

//Object destructuring assigns the properties of an object to variables with the same names by default.

let person = {
  firstName: "John",
  lastName: "Doe",
};

//ES6 destructuring

let { firstName, lastName } = person;
// ({ firstName, lastName } = person);
console.log(firstName); // 'John'
console.log(lastName); // 'Doe'

//setting default values

let person1 = {
  firstName1: "Prabhakar",
  lastName1: "Kumar",
  currentAge: 28,
};

let { firstName1, lastName1, middleName = " ", currentAge = 18 } = person1;

console.log(firstName1, lastName1);
console.log(middleName);

console.log(currentAge);

//Destructuring a null object

function getPerson() {
  return null;
}
console.log(getPerson());
// let { firstName2, lastName2 } = getPerson();

// console.log(firstName, lastName);//error

//avoid this, you can use the OR operator (||) to fallback the null object to an empty object:

let { firstName2, lastName2 } = getPerson() || {};
console.log(firstName2); //undefined
console.log(lastName2); //undefined

//Nested object destructuring

let employee = {
  id: 1001,
  name: {
    firstName3: "John",
    lastName3: "Doe",
  },
};

let {
  id,
  name: { firstName3, lastName3 },
  name,
} = employee;

console.log(firstName3); // John
console.log(lastName3); // Doe
console.log(name);

//Destructuring function arguments

let display = (person4) =>
  console.log(`${person4.firstName} ${person4.lastName}`);

let person4 = {
  firstName: "Rajni",
  lastName: "Kant",
};

display(person4);

//ES6 destructuring

let display1 = ({ firstName, lastName }) =>
  console.log(`${firstName} ${lastName}`);

let person5 = {
  firstName: "Raj",
  lastName: "Kumar",
};

display1(person5);
//Pass by value and pass by reference

let obj = { a: "a", b: "b", c: "c" };
//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

//syntax:- Object.assign(target, ...sources)
let clone = Object.assign({}, obj);
let obj1 = obj;
obj.c = 5;
console.log(obj1);
console.log(obj);
console.log(clone);

let x = [1];
let y = x;
y.push(2);
console.log(x); // [1, 2]
console.log(y); // [1, 2]

//Comparing values and comparing references

//Type Coercion

const one = 1;
const oneCopy = 1;
console.log(one === oneCopy); // true
console.log(one === 1); // true
console.log(one === one);

const ar1 = [1];
const ar2 = [1];
console.log(ar1 === ar2); // false
console.log(ar1 === [1]); // false
const ar11 = ar1;
console.log(ar1 === ar11); // true
console.log(ar1 === ar1); // true

console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

console.log(-0 === +0); //true
console.log([] === []); //false

//Object.is :- determines whether two values are the same value.
console.log(Object.is(-0 === +0)); //false

console.log(Object.is([] === [])); //false

//constructor

let person = {
  name: "prabhakar",
  getName: function () {
    return this.name;
  },
  getRollNo: function () {
    return this.rollNo;
  },
};
console.log(person);

let student = {
  rollNo: 1,
  __proto__: person,
};
console.log(person);
console.log(student.rollNo);
console.log(student);
console.log(student.name);
console.log(student.getName());
console.log(student.getRollNo());

let student2 = {
  rollNo: 2,
  __proto__: student,
};

console.log(student2.getRollNo());
console.log(student2.getName());
console.log(student.getRollNo());

let chars = ["Avinash"];
console.log(chars);

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

var user1 = new User("Jon", "Snow");
console.log(user1);

var user2 = new User("Ned", "Stark");
console.log(user2);

// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} Is Running`);
  };
  this.analyze = function () {
    console.log(
      `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
    );
  };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Marutu Alto", 80);
car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);

//Constructors have the same name as that of the object which is being created.
// As a convention, the first alphabet is kept capital in the constructor function.

//Object Prototype
//The prototype property allows you to add new methods to objects constructors:

let obj = {
  name: "harry",
  channel: "Code With Harry",
  address: "Mars",
};

function Obj(givenName) {
  this.name = givenName;
}

Obj.prototype.givenAge = 25;
Obj.prototype.getName = function () {
  return this.name;
};

Obj.prototype.setName = function (newName) {
  this.name = newName;
};

let obj2 = new Obj("Rohan Das");
console.log(obj2);
console.log(obj2.givenAge); //25

function Student() {
  this.name = "Harry";
  this.gender = "Male";
}
Student.prototype.sayHi = function () {
  console.log("Hello World!");
};
let std = new Student();

console.log(std);
console.log(std.toString()); //[object Object]

//Prototype Inheritance

const proto = {
  slogan: function () {
    return `This company is the best`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

// This creates harry object
let harry = Object.create(proto);
harry.name = "harry";
harry.role = "Programmer";
// harry.changeName("Harry2")
// console.log(harry)

// This also creates harry object
const harry1 = Object.create(proto, {
  name: { value: "harry", writable: true },
  role: { value: "Programmer" },
});
harry1.changeName("Harry2");
// console.log(harry1)

// Employee constructor
function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
  return `This company is the best. Regards, ${this.name}`;
};

// Create an object from this constructor now
let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan());

// Programmer
function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);

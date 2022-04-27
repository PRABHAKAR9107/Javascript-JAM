//constructor

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

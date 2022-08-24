//model real world things and occurrences in Javascript by using a concept called objects.

//Objects has properties and it does certain things attributes
//name of attribute ,what the attribute- name:"Prabhakar",Hair-color:"black"

/*
Person1:
Name: Susan
Age: 35
Height: 160
Hair: blond
*/

//Let’s create them as objects.

//Use flower brackets, and create them as property: value pairs.

let person1 = { name: "Susan", age: 35, height: 160, hair: "blonde" };

let person2 = {
  name: "Gary",
  age: 40,
  height: 180,
  hair: "blond",
  eyeColor: "blue",
};

/* Basic Syntax
There are two ways to do this:
1. objectName.propertyName or
2. objectName["propertyName"]

*/

console.log(person1);

console.log(person1.name);

console.log(person2["height"]);

//Methods:- walking,talking,waving- functions that do one thing/more things/things

let person3 = {
  fname: "Mohan",
  lname: "Das",
  age: 20,
  height: 160,
  hair: "blond",
  eyeColor: "blue",
  wave: function () {
    return "Hi ,I am waving you";
  },
  add: function (num1, num2) {
    return num1 + num2;
  },

  fullName: function () {
    return person3.fname + " " + person3.lname;
  },
};

console.log(person3.wave());
console.log(person3.add(6, 12));

console.log(person3.fullName());

//using this keyword:- this particular block/object/function

let person4 = {
  fname: "Sohan",
  lname: "Das",
  age: 20,
  height: 160,
  hair: "blond",
  eyeColor: "blue",
  wave: function () {
    return "Hi ,I am waving you";
  },
  add: function (num1, num2) {
    return num1 + num2;
  },

  fullName: function () {
    return this.fname + " " + this.lname;
  },
};

console.log(person4.fullName());

//Creating multiple objects inside of an array

let person = [
  { name: "Susan", age: 35, height: 160, hair: "blonde" },
  { name: "Gary", age: 40, height: 180, hair: "blond", eyeColor: "blue" },
];

console.log(person[1].age);

console.log(person[0]["hair"]);

let person6 = person[0].hair;

let person7 = person3.wave;

console.log(person7);

console.log(person6);

function tour() {
  return prabhakar;
}
console.log(tour);

document.getElementById("tour").innerHTML = tour;

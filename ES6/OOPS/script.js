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

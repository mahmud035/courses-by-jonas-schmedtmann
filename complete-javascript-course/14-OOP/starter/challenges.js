'use strict';

//* Coding Challenge #1

/* 
  1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
  2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
  3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
  4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

  DATA CAR 1: 'BMW' going at 120 km/h
  DATA CAR 2: 'Mercedes' going at 95 km/h

  GOOD LUCK 😀
*/

/* 
{
  // Constructor Function
  function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // Create Instance from Constructor Function
  const car1 = new Car('BMW', 120);
  const car2 = new Car('Mercedes', 95);

  //* Adding new Methods to a Constructor
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  car1.accelerate();
  car1.accelerate();
  car1.brake();
  car1.accelerate();

  console.log(car1.__proto__ === Car.prototype); // true
  console.log(car2.__proto__ === Car.prototype); // true
}
 */

//* Coding Challenge #2

/* 
  1. Re-create challenge 1, but this time using an ES6 class;
  2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
  3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
  4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

  DATA CAR 1: 'Ford' going at 120 km/h

  GOOD LUCK 😀
*/

/* 
{
  class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }

    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    break() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
      return this.speed / 1.6; // mi/h
    }

    set speedUS(speed) {
      this.speed = speed * 1.6; // km/h
    }
  }

  // Create instance from class
  const ford = new CarCl('Ford', 120);

  console.log(ford.speedUS); // getter => 75
  ford.accelerate();
  ford.accelerate();
  ford.break();
  ford.speedUS = 50; // setter
  console.log(ford);
}
 */

//* Coding Challenge #3

/* 
  1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
  2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
  3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
  4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definition of polymorphism 😉

  DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

  GOOD LUCK 😀
*/

/* 
{
  // Parent
  function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  Car.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  // Child
  function EV(make, speed, charge) {
    // NOTE: Here we called Car constructor function as a regular function. And in a regular function call, in strict mode, this is set to undefined. So, we need to manually set the this keyword as well.
    Car.call(this, make, speed);
    this.charge = charge;
  }

  //* Link the prototypes
  EV.prototype = Object.create(Car.prototype);

  EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
  };

  //* NOTE: Overwrite the accelerate method (Polymorphism)
  EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  };

  const tesla = new EV('Tesla', 120, 23);
  console.log(tesla);
  tesla.accelerate();
  tesla.accelerate();
  tesla.accelerate();
  tesla.break();
  tesla.chargeBattery(90);
  console.log(tesla);
}
 */

//* Coding Challenge #4

/* 
  1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
  2. Make the 'charge' property private;
  3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chining!

  DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

  GOOD LUCK 😀
*/

{
  //* Parent Class
  class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }

    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    break() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this; // return current object for chaining
    }
  }

  //* Child Class
  class EVCl extends CarCl {
    #charge; // Private Field

    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    }

    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      return this; // return current object for chaining
    }

    // Overwrite the accelerate method (Polymorphism)
    accelerate() {
      this.speed += 20;
      this.#charge--;
      console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${
          this.#charge
        }%`
      );
      return this; // return current object for chaining
    }
  }

  // Create instance from EVCl class
  const rivian = new EVCl('Rivian', 120, 23);
  console.log(rivian);

  // Chaining
  rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .break()
    .break()
    .chargeBattery(90);

  console.log(rivian);
}

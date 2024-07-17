'use strict';

//* The 4 Fundamental OOP Principles

/* 
{
  // 👉Abstraction
  // Abstraction involves hiding complex implementation details and showing only the essential features of an object.It allows us to focus on what an object does rather than how it does it.

  class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }

    startEngine() {
      console.log(`${this.brand} ${this.model}'s engine started.`);
    }

    drive() {
      console.log(`${this.brand} ${this.model} is driving.`);
    }
  }

  const myCar = new Car('Toyota', 'Corolla');
  myCar.startEngine(); // Toyota Corolla's engine started.
  myCar.drive(); // Toyota Corolla is driving.

  // In this example, the Car class abstracts the details of how the engine starts and how the car drives. Users of the class don't need to understand the internal workings; they only need to know how to start the engine and drive the car.
}

{
  // 👉Encapsulation
  // Keeping properties and methods private inside the class, so they are not accessible from outside the class.

  class Person {
    constructor(name, age) {
      this.name = name;
      let _age = age; // Private variable

      this.getAge = function () {
        return _age;
      };

      this.setAge = function (newAge) {
        if (newAge > 0) _age = newAge;
        else console.log(`Age must be a positive number.`);
      };
    }

    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.getAge()} years old.`
      );
    }
  }

  const john = new Person('John', 30);
  john.greet(); // Hello, my name is John and I am 30 years old.
  john.setAge(31);
  john.greet(); // Hello, my name is John and I am 31 years old.
  john.setAge(-5); // Age must be a positive number.

  // Here, the Person class encapsulates the name and _age variables. The _age variable is private and can only be accessed or modified through the getAge and setAge methods, ensuring controlled access.
}

{
  // 👉Inheritance
  // Inheritance allows a class (called a subclass) to inherit properties and methods from another class (called a superclass). This helps to create a hierarchical relationship and reuse code.

  class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }

  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the constructor of the superclass (Animal)
      this.breed = breed;
    }

    // Override the speak method
    speak() {
      console.log(`${this.name} barks.`);
    }
  }

  const myDog = new Dog('Rex', 'German Shepherd');
  myDog.speak(); // Rex barks.

  // In this example, the Dog class inherits from the Animal class. The Dog class can use the name property and speak method from Animal, but it also overrides the speak method to provide its own implementation.
}

{
  // 👉Polymorphism
  // Polymorphism: A child class can overwrite a method it inherited from a parent class. It allows the same method to have different implementations in different child classes.

  class Bird {
    constructor(name) {
      this.name = name;
    }

    fly() {
      console.log(`${this.name} can fly.`);
    }
  }

  class Penguin extends Bird {
    // Override the fly method
    fly() {
      console.log(`${this.name} can not fly.`);
    }
  }

  const myBird = new Bird('Eagle');
  const myPenguin = new Penguin('Pingu');

  myBird.fly(); // Eagle can fly.
  myPenguin.fly(); // Pingu can not fly.

  function makeFly(bird) {
    bird.fly();
  }

  makeFly(myBird); // Eagle can fly.
  makeFly(myPenguin); // Pingu can not fly.

  // Here, makeFly can accept any object that is a Bird or a subclass of Bird, demonstrating polymorphism by allowing different implementations of the fly method.
}
*/

//* Constructor Functions and the new Operator

/* 
{
  function Person(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // WARNING: Never Do This
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
  }

  // IMPORTANT: How The "new" Operator Works:
  // যখন constructor function কে "new" operator দিয়ে call করা হয়, তখন নিচের ঘটনা গুলো ঘটে 👇

  // 1. A new {} object is created
  // 2. function is called, this = {}
  // 3. {} linked to prototype
  // 4. function automatically return the new object

  // Create instance from constructor function
  const jonas = new Person('Jonas', 1991);
  const matilda = new Person('Matilda', 2000);

  console.log(jonas);
  console.log(matilda);

  console.log(jonas instanceof Person); // true
  console.log(matilda instanceof Person); // true
}
 */

//* Prototypes

/* 
{
  function Person(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // WARNING: Never Do This
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
  }

  // IMPORTANT: How The "new" Operator Works:
  // যখন constructor function কে "new" operator দিয়ে call করা হয়, তখন নিচের ঘটনা গুলো ঘটে 👇

  // 1. A new {} object is created
  // 2. function is called, this = {}
  // 3. {} linked to prototype
  // 4. function automatically return the new object

  // Create instance from constructor function
  const jonas = new Person('Jonas', 1991);
  const matilda = new Person('Matilda', 2000);

  console.log(jonas);
  console.log(matilda);

  console.log(jonas instanceof Person); // true
  console.log(matilda instanceof Person); // true

  //* Prototypes
  // Each and every function in JavaScript automatically has a property called prototype.

  // TODO: Instead of Do This:
  // Adding a Method to a Constructor
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };

  jonas.calcAge(); // 46
  matilda.calcAge(); // 37

  console.log(jonas.__proto__);
  console.log(jonas.__proto__ === Person.prototype); // true

  console.log(Person.prototype.isPrototypeOf(jonas)); // true
  console.log(Person.prototype.isPrototypeOf(matilda)); // true
  console.log(Person.prototype.isPrototypeOf(Person)); // false

  // Adding a Property to a Constructor
  Person.prototype.species = 'Home Sapiens';
  // console.log(jonas.species, matilda.species);

  console.log(jonas.hasOwnProperty('firstName')); // true
  console.log(jonas.hasOwnProperty('species')); // false
}
 */

//* Prototypal Inheritance on Built-In Objects

/* 
{
  function Person(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Create Instance From Constructor Function
  const jonas = new Person('Jonas', 1991);
  const matilda = new Person('Matilda', 2000);

  // Each and every function in JavaScript automatically has a property called prototype.
  // Each and every object in JavaScript automatically has a property called prototype.

  // Adding a Method to a Constructor
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };

  jonas.calcAge(); // 46
  matilda.calcAge(); // 37

  console.log(jonas.__proto__);
  console.log(jonas.__proto__ === Person.prototype); // true

  console.log(Person.prototype.isPrototypeOf(jonas)); // true
  console.log(Person.prototype.isPrototypeOf(matilda)); // true
  console.log(Person.prototype.isPrototypeOf(Person)); // false

  // Adding a Property to a Constructor
  Person.prototype.species = 'Home Sapiens';

  console.log(jonas.hasOwnProperty('firstName')); // true
  console.log(jonas.hasOwnProperty('species')); // false

  //* Prototypal Inheritance on Built-In Objects
  console.log(jonas.__proto__);
  // Object.prototype (top of prototype chain)
  console.log(jonas.__proto__.__proto__);
  console.log(jonas.__proto__.__proto__.__proto__); // null

  const array = [1, 2, 3, 4, 5]; // [] === new Array()
  console.log(array.__proto__);
  console.log(array.__proto__ === Array.prototype); // true

  // Object.prototype (top of prototype chain)
  console.log(array.__proto__.__proto__);
}
 */

//* ES6 Classes

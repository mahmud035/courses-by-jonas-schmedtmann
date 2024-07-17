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

  //? IMPORTANT: How The "new" Operator Works:
  // যখন constructor function কে "new" operator দিয়ে call করা হয়, তখন নিচের ঘটনা গুলো ঘটে 👇

  // 1. A new empty object {} is created
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
  }

  //? IMPORTANT: How The "new" Operator Works:
  // যখন constructor function কে "new" operator দিয়ে call করা হয়, তখন নিচের ঘটনা গুলো ঘটে 👇

  // 1. A new empty object {} is created
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
  // In JavaScript, every object and function has a hidden internal property called [[Prototype]]. This property can be another object or null, and it forms the basis of JavaScript's prototype chain.

  //? IMPORTANT: How Prototypal Inheritance Works:
  //* Constructor function এর "prototype" property এর মধ্যে আমরা যতগুলো Method Add করবো, সেই Methods গুলোকে ঐ Constructor function ব্যবহার করে তৈরি করা প্রতিটা instance access করতে পারবে।

  //* For example: নিচে, Person constructor function এর "prototype" property এর মধ্যে calcAge নামে একটা Method Add করেছি। এখন এই calcAge Method কে Person constructor function ব্যবহার করে তৈরি করা ২ টা instance (jonas & matilda) access করতে পারবে। এভাবে, "prototype" property এর মধ্যে যতগুলো Method Add করবো, সেই সবগুলো Method কে ঐ Constructor function ব্যবহার করে তৈরি করা প্রতিটা instance access করতে পারবে। এটাকেই Prototypal Inheritance বলে।

  // Adding a Method to a Constructor
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };

  jonas.calcAge(); // 46   NOTE: (Access calcAge method using Prototypal Inheritance)
  matilda.calcAge(); // 37 NOTE: (Access calcAge method using Prototypal Inheritance)

  console.log(jonas.__proto__);
  console.log(Person.prototype);

  console.log(jonas.__proto__ === Person.prototype); // true

  console.log(Person.prototype.isPrototypeOf(jonas)); // true
  console.log(Person.prototype.isPrototypeOf(matilda)); // true
  console.log(Person.prototype.isPrototypeOf(Person)); // false

  // Adding a Property to a Constructor
  Person.prototype.species = 'Home Sapiens';
  // console.log(jonas.species, matilda.species);

  console.log(jonas.hasOwnProperty('firstName')); // true
  console.log(jonas.hasOwnProperty('species')); // false => because (species is on the prototype)
}
 */

//* Prototypal Inheritance and The Prototype Chain
//* Prototypal Inheritance on Built-In Objects

{
  function Person(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Create instance from constructor function
  const jonas = new Person('Jonas', 1991);
  const matilda = new Person('Matilda', 2000);

  console.log(jonas);
  console.log(matilda);

  console.log(jonas instanceof Person); // true
  console.log(matilda instanceof Person); // true

  //* Prototypal Inheritance

  //? IMPORTANT: How Prototypal Inheritance Works:
  //* Constructor function এর "prototype" property এর মধ্যে আমরা যতগুলো Method Add করবো, সেই Methods গুলোকে ঐ Constructor function ব্যবহার করে তৈরি করা প্রতিটা instance access করতে পারবে।

  //* For example: নিচে, Person constructor function এর "prototype" property এর মধ্যে calcAge নামে একটা Method Add করেছি। এখন এই calcAge Method কে Person constructor function ব্যবহার করে তৈরি করা ২ টা instance (jonas & matilda) access করতে পারবে। এভাবে, "prototype" property এর মধ্যে যতগুলো Method Add করবো, সেই সবগুলো Method কে ঐ Constructor function ব্যবহার করে তৈরি করা প্রতিটা instance access করতে পারবে। এটাকেই Prototypal Inheritance বলে।

  // Adding a Method to a Constructor
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };

  jonas.calcAge(); // 46   NOTE: (Access calcAge method using Prototypal Inheritance)
  matilda.calcAge(); // 37 NOTE: (Access calcAge method using Prototypal Inheritance)

  console.log(jonas.__proto__);
  console.log(Person.prototype);

  console.log(jonas.__proto__ === Person.prototype); // true

  console.log(Person.prototype.isPrototypeOf(jonas)); // true
  console.log(Person.prototype.isPrototypeOf(matilda)); // true
  console.log(Person.prototype.isPrototypeOf(Person)); // false

  // Adding a Property to a Constructor
  Person.prototype.species = 'Home Sapiens';

  console.log(jonas.hasOwnProperty('firstName')); // true
  console.log(jonas.hasOwnProperty('species')); // false => because (species is on the prototype)

  // ====================   ========================
  //* The Prototype Chain

  //? IMPORTANT: How Prototype Chain Works:
  //* When you access a property or method on an object, JavaScript first looks at the object itself. If it doesn't find the property or method, it looks at the object's prototype, and so on, up the chain until it finds the property or reaches the end of the chain (null).

  // Ex:1 Prototype Chain with Constructor Function and it's instances.
  // 1 level deep
  console.log(jonas.__proto__);
  console.log(Person.prototype);
  console.log(jonas.__proto__ === Person.prototype); // true

  // 2 level deep
  console.log(jonas.__proto__.__proto__); // NOTE: The top of the prototype chain
  console.log(Object.prototype); // NOTE: The top of the prototype chain

  console.log(jonas.__proto__.__proto__ === Object.prototype); // true

  // 3 level deep
  console.log(jonas.__proto__.__proto__.__proto__); // null

  // ====================   ========================
  //* Prototypal Inheritance on Built-In Objects

  // Ex:2 Prototype Chain with built in Constructor Array
  const array = [1, 2, 3, 4, 5]; // [] === new Array()

  // 1 level deep
  console.log(array.__proto__);
  console.log(Array.prototype);
  console.log(array.__proto__ === Array.prototype); // true

  // 2 level deep
  console.log(array.__proto__.__proto__); // NOTE: The top of the prototype chain
  console.log(Object.prototype); // NOTE: The top of the prototype chain

  console.log(array.__proto__.__proto__ === Object.prototype); // true

  // 3 level deep
  console.log(array.__proto__.__proto__.__proto__); // null
}

//* ES6 Classes

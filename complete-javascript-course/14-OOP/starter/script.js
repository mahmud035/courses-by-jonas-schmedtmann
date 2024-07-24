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

/* 
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
 */

//* ES6 Classes

/* 
{
  // ES6 (ECMAScript 2015) introduced classes to JavaScript, which provide a much cleaner and more intuitive syntax for creating objects and dealing with inheritance. Although JavaScript has always been a prototype-based language, classes allow for a more familiar, class-based approach to object-oriented programming.

  // Basic Syntax
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    // Method inside a class
    //* Method will be added to .prototype property
    greet() {
      console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  // Creating an instance of the Person class
  const person1 = new Person('Mahmud', 25);
  person1.greet(); // My name is Mahmud and I am 25 years old.

  // 👉Inheritance: Classes in ES6 also support inheritance, allowing you to create a hierarchy of classes that inherit from each other.

  class Student extends Person {
    constructor(name, age, studentId) {
      // Call the parent class constructor
      super(name, age);
      this.studentId = studentId;
    }

    // Method specific to the Student class
    study() {
      console.log(`${this.name} is studying.`);
    }
  }

  // Creating an instance of the Student class
  const student1 = new Student('Ayesha', 22, 'S12345');
  student1.greet(); // My name is Ayesha and I am 22 years old.
  student1.study(); // Ayesha is studying.

  // Static Methods: Methods that belong to the class itself rather than any object instantiated from the class.
  class MathUtil {
    static add(a, b) {
      return a + b;
    }
  }

  console.log(MathUtil.add(5, 3)); // 8
}
 */

// Lecture Code

/* 
{
  class PersonCl {
    constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    }

    //* Method will be added to .prototype property
    calcAge() {
      console.log(2037 - this.birthYear);
    }

    greet() {
      console.log(`Hey, ${this.firstName}`);
    }
  }

  // Creating an instance of the PersonCl class
  const jessica = new PersonCl('Jessica', 1996);
  jessica.calcAge(); // 41
  console.log(jessica);

  console.log(jessica.__proto__ === PersonCl.prototype); // true

  // IMPORTANT: Adding method into PersonCl class "Manually" using "prototype"
  // NOTE: No need to do this 👇 when using class Syntax, because class uses "prototype" behind the scene to Add the Method.

  // PersonCl.prototype.greet = function () {
  //   console.log(`Hey, ${this.firstName}`);
  // };
  jessica.greet(); // Hey, Jessica;

  // NOTE:
  // 1. Classes are NOT hoisted
  // 2. Class are first-class citizen
  // 3. Class are executed in strict mode
}
 */

//* Setters and Getters

/* 
{
  //? Why Using Getters and Setters?
  // 1. It gives simpler syntax
  // 2. It allows equal syntax for properties and methods
  // 3. 👉It can secure better data quality👈
  // 4. It is useful for doing things behind-the-scenes

  // Basic: Setters and Getters in regular object
  const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
      return this.movements.slice(-1).pop();
    },

    set latest(movement) {
      this.movements.push(movement);
    },
  };

  // Get latest value of movements using a getter:
  console.log(account.latest);

  // Set latest value of movements using a setter:
  account.latest = 50;
  console.log(account);

  // ================   =================
  //* Setters and Getters in ES6 Classes
  class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }

    //* Method will be added to .prototype property
    calcAge() {
      console.log(2037 - this.birthYear);
    }

    // Getter for age
    get age() {
      return 2037 - this.birthYear;
    }

    // IMPORTANT: Set a property that already exists (Data validation)
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }

    // Getter for fullName
    get fullName() {
      return this._fullName;
    }
  }

  // Creating an instance of the PersonCl class
  const jessica = new PersonCl('Jessica Davis', 1996);

  // Using Getters & Setter
  console.log(jessica.age); // 41
  console.log(jessica.fullName); // Jessica Davis

  console.log(jessica);
}
 */

//* Static Methods

{
  // NOTE: The static keyword defines a static method or property for a class. Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself. (mdn)

  // Ex: 1
  class ClassWithStaticMethod {
    static staticProperty = 'someValue';

    static staticMethod() {
      return 'static method has been called.';
    }
  }

  console.log(ClassWithStaticMethod.staticProperty); // someValue
  console.log(ClassWithStaticMethod.staticMethod()); // static method has been called.

  // Ex: 2
  class MathUtilities {
    // A static method
    static add(a, b) {
      return a + b;
    }

    // Another static method
    static multiply(a, b) {
      return a * b;
    }
  }

  // Calling static methods on the class itself
  console.log(MathUtilities.add(5, 3)); // 8
  console.log(MathUtilities.multiply(5, 3)); // 15

  // In this example, add and multiply are static methods. They are called on the MathUtilities class directly, without creating an instance of the class.

  // NOTE: Key Points
  // 1. Static methods are called on the class itself, not on instances of the class.
  // 2. They are useful for utility functions, helper methods, and factory patterns.
  // 3. Static methods do not have access to this keyword, which refers to instance-specific properties and methods.

  // Ex: 3
  // Example of a static method being used in a factory pattern:
  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }

    // Static factory method
    static createHonda(model) {
      return new Car('Honda', model);
    }
  }

  const myCar = Car.createHonda('Civic');
  console.log(myCar); // Output: Car { make: 'Honda', model: 'Civic' }

  // In this example, the createHonda static method is used to create a Car instance with a predefined make (Honda), demonstrating how static methods can streamline the creation of class instances.
}

// Lecture Code

{
}

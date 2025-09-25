'use strict';

//* The 4 Fundamental OOP Principles

/* 
{
  // 📖 Read Lecture Notes Carefully: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649033#notes

  // An instance is a real object that we can use which was created from a class.

  // The 4 Fundamental OOP Principles:

  // 👉 Abstraction
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

  // In this example, the `Car` class abstracts the details of how the engine starts and how the car drives. Users of the class don't need to understand the internal workings; they only need to know how to start the engine and drive the car.

  // 👉 Encapsulation
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

  // Here, the `Person` class encapsulates the name and _age variables. The _age variable is private and can only be accessed or modified through the getAge and setAge methods, ensuring controlled access.

  // 👉 Inheritance
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

  // In this example, the `Dog` class inherits from the `Animal` class. The `Dog` class can use the name property and speak method from `Animal`, but it also overrides the speak method to provide its own implementation.

  // 👉 Polymorphism
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

//* Constructor Functions and the `new` Operator

/* 
{
  // 📖 Read This Notes Carefully: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649039#notes

  function Person(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // WARNING: Never Do This
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
  }

  // IMPORTANT: What Happens When We Use `new`?
  // When we call a function with the `new` operator, four steps happen behind the scenes:

  // 1. A new empty object is created
  // 2. The function is called, and in this function call, the `this` keyword is set to the newly created object i.e, `this = {}`
  // 3. The newly created object is linked to the constructor function's `prototype` property
  // 4. The new object is returned implicitly

  // Create instance from Constructor Function
  const jonas = new Person('Jonas', 1991);
  const matilda = new Person('Matilda', 2000);

  console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}
  console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2000}

  console.log(jonas instanceof Person); // true
  console.log(matilda instanceof Person); // true

  // Adding Methods to the Prototype
  // Instead of defining methods inside the constructor function, you can add them to the `prototype` to ensure they are shared among all instances:

  Person.prototype.sayHello = function () {
    console.log(
      `Hello, my name is ${this.firstName} and my birth year is ${this.birthYear}.`
    );
  };

  const bob = new Person('Bob', 1998);
  bob.sayHello(); // Hello, my name is Bob and my birth year is 1998.

  // Constructor functions are not a feature of the JavaScript language itself, but a pattern developed by developers. The real magic is in the `new` operator and the four steps it performs. Make sure you understand these steps, as they are fundamental to working with objects in JavaScript.
}
 */

//* Prototypes

/* 
{
  // 🔗 Visit This Link First: https://chatgpt.com/share/393ee765-d71d-4064-ab93-a8f1049978d4
  // 📖 Read This Notes Carefully: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649045#notes

  function Person(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // What Are Prototypes?
  // In JavaScript, every object and function has a hidden internal property called `[[Prototype]]`. This property can be another object or null, and it forms the basis of JavaScript's prototype chain.

  // IMPORTANT: How Prototypal Inheritance Works:
  //* Constructor Function এর `prototype` property এর মধ্যে আমরা যতগুলো Method Add করবো, সেই Methods গুলোকে ঐ Constructor Function ব্যবহার করে তৈরি করা প্রতিটা instance access করতে পারবে।

  //* For example: নিচে, `Person` Constructor Function এর `prototype` property এর মধ্যে `calcAge` নামে একটা Method Add করেছি। এখন এই `calcAge` Method কে `Person` Constructor Function ব্যবহার করে তৈরি করা ২ টা instance (`jonas` & `matilda`) access করতে পারবে। এভাবে, `prototype` property এর মধ্যে যতগুলো Method Add করবো, সেই সবগুলো Method কে ঐ Constructor Function ব্যবহার করে তৈরি করা প্রতিটা instance access করতে পারবে। এটাকেই "Prototypal Inheritance" বলে।

  // Adding a Method to the Constructor
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };

  // Create instance from constructor function
  const jonas = new Person('Jonas', 1991);
  const matilda = new Person('Matilda', 2000);

  console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}
  console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2000}

  jonas.calcAge(); // 46    NOTE: (Access `calcAge` method using Prototypal Inheritance)
  matilda.calcAge(); // 37  NOTE: (Access `calcAge` method using Prototypal Inheritance)

  console.log(jonas.__proto__);
  console.log(Person.prototype);
  console.log(jonas.__proto__ === Person.prototype); // true

  console.log(Person.prototype.isPrototypeOf(jonas)); // true
  console.log(Person.prototype.isPrototypeOf(matilda)); // true
  console.log(Person.prototype.isPrototypeOf(Person)); // false

  // Adding a Property to the Constructor
  Person.prototype.species = 'Home Sapiens';

  console.log(jonas.species, matilda.species);
  console.log(jonas.hasOwnProperty('firstName')); // true
  console.log(jonas.hasOwnProperty('species')); // false => because (species is on the `prototype`)

  // NOTE: Key Takeaways
  // Every function in JavaScript automatically has a `prototype` property, including constructor functions.

  // Objects created by a constructor function inherit methods and properties defined on the constructor's `prototype` property.

  // The `__proto__` property of an object points to the `prototype` from which it inherits.

  // Prototypal inheritance allows sharing methods and properties efficiently without duplicating them on each object.

  // Properties can also be added to the `prototype`, and objects will inherit access to these properties.

  // The `hasOwnProperty` method can be used to distinguish between own properties and inherited properties.
}
 */

//* Prototypal Inheritance and The Prototype Chain
//* Prototypal Inheritance on Built-In Objects

/* 
{
  // 🔗 Visit This Link First: https://chatgpt.com/share/393ee765-d71d-4064-ab93-a8f1049978d4
  // 📖 Read Previous Lecture Notes Carefully
  // 🧠 MUST READ: https://claude.ai/share/8f454e22-ef05-4dd4-9f53-3ec368cbc010

  function Person(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // What Are Prototypes?
  // In JavaScript, every object and function has a hidden internal property called `[[Prototype]]`. This property can be another object or null, and it forms the basis of JavaScript's prototype chain.

  // IMPORTANT: How Prototypal Inheritance Works:
  //* Constructor Function এর `prototype` property এর মধ্যে আমরা যতগুলো Method Add করবো, সেই Methods গুলোকে ঐ Constructor Function ব্যবহার করে তৈরি করা প্রতিটা instance access করতে পারবে।

  //* For example: নিচে, `Person` Constructor Function এর `prototype` property এর মধ্যে `calcAge` নামে একটা Method Add করেছি। এখন এই `calcAge` Method কে `Person` Constructor Function ব্যবহার করে তৈরি করা ২ টা instance (`jonas` & `matilda`) access করতে পারবে। এভাবে, `prototype` property এর মধ্যে যতগুলো Method Add করবো, সেই সবগুলো Method কে ঐ Constructor Function ব্যবহার করে তৈরি করা প্রতিটা instance access করতে পারবে। এটাকেই "Prototypal Inheritance" বলে।

  // Adding a Method to the Constructor
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };

  // Create instance from constructor function
  const jonas = new Person('Jonas', 1991);
  const matilda = new Person('Matilda', 2000);

  console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}
  console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2000}

  jonas.calcAge(); // 46    NOTE: (Access `calcAge` method using Prototypal Inheritance)
  matilda.calcAge(); // 37  NOTE: (Access `calcAge` method using Prototypal Inheritance)

  console.log(jonas.__proto__);
  console.log(Person.prototype);
  console.log(jonas.__proto__ === Person.prototype); // true

  console.log(Person.prototype.isPrototypeOf(jonas)); // true
  console.log(Person.prototype.isPrototypeOf(matilda)); // true
  console.log(Person.prototype.isPrototypeOf(Person)); // false

  // Adding a Property to the Constructor
  Person.prototype.species = 'Home Sapiens';

  console.log(jonas.species, matilda.species);
  console.log(jonas.hasOwnProperty('firstName')); // true
  console.log(jonas.hasOwnProperty('species')); // false => because (species is on the `prototype`)

  // ====================   ========================
  //* The Prototype Chain

  // IMPORTANT: How Prototype Chain Works:
  //* When you access a property or method on an object, JavaScript first looks at the object itself. If it doesn't find the property or method, it looks at the object's prototype, and so on, up the chain until it finds the property or reaches the end of the chain (null).

  // Ex:1 Prototype Chain with Constructor Function and it's instances.
  // 1 level deep
  console.log(jonas.__proto__);
  console.log(Person.prototype);
  console.log(jonas.__proto__ === Person.prototype); // true

  // 2 level deep
  console.log(jonas.__proto__.__proto__);
  console.log(Object.prototype); // NOTE: The top of the prototype chain
  console.log(jonas.__proto__.__proto__ === Object.prototype); // true

  // 3 level deep
  console.log(jonas.__proto__.__proto__.__proto__); // null

  // NOTE: The chain here looks like: `jonas` -> `Person.prototype` -> `Object.prototype` -> `null`

  // ====================   ========================
  //* Prototypal Inheritance on Built-In Objects

  // Ex:2 Prototype Chain with built in Constructor Array
  const array = [1, 2, 3, 4, 5]; // [] === new Array()
  console.log(array);

  // 1 level deep
  console.log(array.__proto__);
  console.log(Array.prototype);
  console.log(array.__proto__ === Array.prototype); // true

  // 2 level deep
  console.log(array.__proto__.__proto__);
  console.log(Object.prototype); // NOTE: The top of the prototype chain
  console.log(array.__proto__.__proto__ === Object.prototype); // true

  // 3 level deep
  console.log(array.__proto__.__proto__.__proto__); // null
}
 */

//* ES6 Classes

/* 
{
  // ES6 introduced classes to JavaScript, which provide a much cleaner and more intuitive syntax for creating objects and dealing with inheritance. Although JavaScript has always been a prototype-based language, classes allow for a more familiar, class-based approach to object-oriented programming.

  // Basic Syntax
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    // Method will be added to `.prototype` property automatically
    greet() {
      console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  // Creating an instance of the Person class
  const person1 = new Person('Mahmud', 25);
  person1.greet(); // Inherited method from Person class

  // 👉 Inheritance: Classes in ES6 also support inheritance, allowing you to create a hierarchy of classes that inherit from each other.

  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age); // Call the parent class constructor
      this.studentId = studentId;
    }

    // Method specific to the Student class
    study() {
      console.log(`${this.name} is studying.`);
    }
  }

  // Creating an instance of the Student class
  const student1 = new Student('Ayesha', 22, 'S12345');
  student1.greet(); // Inherited method from Person class
  student1.study(); // Inherited method from Student class
  console.log(student1);

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

    // Methods will be added to `.prototype` property automatically
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
  jessica.greet(); // Hey, Jessica;
  console.log(jessica);

  console.log(jessica.__proto__ === PersonCl.prototype); // true (1 level deep)
  console.log(jessica.__proto__.__proto__ === Object.prototype); // true (2 level deep)
  console.log(jessica.__proto__.__proto__.__proto__); // null (3 level deep)

  // IMPORTANT: Adding method into `PersonCl` class "Manually" using "prototype"
  // NOTE: No need to do this 👇 when using class Syntax, because class uses "prototype" behind the scene to Add the Method.

  // PersonCl.prototype.greet = function () {
  //   console.log(`Hey, ${this.firstName}`);
  // };

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
  // 3. 👉 It can secure better data quality 👈
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

    // Method will be added to `.prototype` property
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

  console.log(jessica.__proto__ === PersonCl.prototype); // true
  console.log(jessica.__proto__.__proto__ === Object.prototype); // true
  console.log(jessica.__proto__.__proto__.__proto__); // null
}
 */

//* Static Methods

/* 
{
  // NOTE: The `static` keyword defines a static method or property for a class. Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself. (mdn)

  // NOTE: Key Points
  // 1. Static methods are called on the class itself, not on instances of the class.
  // 2. They are useful for utility functions, helper methods, and factory patterns.
  // 3. Static methods do not have access to `this` keyword, which refers to instance-specific properties and methods.

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
    static add(a, b) {
      return a + b;
    }

    static multiply(a, b) {
      return a * b;
    }
  }

  // Calling static methods on the class itself
  console.log(MathUtilities.add(5, 3)); // 8
  console.log(MathUtilities.multiply(5, 3)); // 15

  // In this example, `add` and `multiply` are static methods. They are called on the MathUtilities class directly, without creating an instance of the class.

  // Example of a static method being used in a factory pattern:
  // Ex: 3
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
 */

// Lecture Code

/* 
{
  function Person(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Create instance from constructor function
  const jonas = new Person('Jonas', 1991);

  Person.hey = function () {
    console.log(`Hey there ✋`);
  };

  // NOTE: Add a static method into Person constructor function. It will NOT be inherited by the instance of the Person constructor. Because it is not inside the Person's constructor prototype.
  Person.hey();
  // jonas.hey(); // TypeError: jonas.hey is not a function
}
 */

//* Object.create()

/* 
{
  // IMPORTANT: Object.create() creates a new object and the prototype of the that object will be the object that we passed in.

  // Syntax: Object.create(proto, propertiesObject) 👇

  // proto: The object which should be the prototype of the newly-created object.
  // propertiesObject (optional): An object specifying property descriptors to be added to the newly-created object.

  // Basic Usage
  // The object that will be the prototype of the new object
  const PersonProto = {
    isHuman: false,
    printInformation() {
      // console.log(this); // {name: 'Mahmud', isHuman: true}
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };

  // Create new object
  const me = Object.create(PersonProto);
  me.name = 'Mahmud';
  me.isHuman = true;
  me.printInformation(); // Output: My name is Mahmud. Am I human? true

  console.log(me.__proto__ === PersonProto); // true

  // IMPORTANT: In this example:
  // 👉 PersonProto is an object that will be the prototype of the new object.
  // 👉 me is the new object created using Object.create(PersonProto).
  // 👉 me inherits properties and methods from PersonProto, but can also have its own properties.

  //* =============== Use Cases ===============

  // 1. Inheritance: Object.create() is useful for setting up inheritance without the need for constructor functions or classes.

  const AnimalProto = {
    speak() {
      console.log(`${this.name} makes a noise.`);
    },
  };

  const dog = Object.create(AnimalProto);
  dog.name = 'Rover';
  dog.speak(); // Output: Rover makes a noise.

  // 2. Prototype Chain Manipulation: It allows more control over the prototype chain.

  const Proto = { type: 'animal' };
  const obj = Object.create(Proto);
  console.log(obj.type); // Output: animal

  // 3. Creating Objects with Specific Properties: You can define property descriptors to add properties to the new object.

  const obj2 = Object.create(
    {},
    {
      property1: {
        value: true,
        writable: true,
        enumerable: true,
        configurable: true,
      },
      property2: {
        value: 'Hello',
        writable: false,
      },
    }
  );

  console.log(obj2.property1); // Output: true
  console.log(obj2.property2); // Output: Hello

  // NOTE: Advantages
  // Prototypal Inheritance: It directly utilizes JavaScript’s prototypal inheritance model.
  // Flexibility: It provides flexibility in creating objects with specific prototypes and properties.
  // Simplicity: It can be simpler and more intuitive compared to constructor functions or ES6 classes for certain use cases.
}
 */

// Lecture Code

/* 
{
  // The object that will be the prototype of the new object
  const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };

  // Create new object
  const steven = Object.create(PersonProto);
  // steven.name = 'Steven';
  // steven.birthYear = 1991;
  steven.init('Steven', 1991);
  steven.calcAge(); // 46

  console.log(steven.__proto__ === PersonProto); // true

  const sarah = Object.create(PersonProto);
  sarah.init('Sarah', 2000);
  sarah.calcAge(); // 37

  console.log(sarah.__proto__ === PersonProto); // true
}
 */

//* Inheritance Between "Classes": Constructor Functions

/* 
{
  // Parent
  function Person(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };

  // Child
  function Student(firstName, birthYear, course) {
    // NOTE: Here we called `Person` constructor function as a regular function. And in a regular function call, in strict mode, `this` is set to undefined. So, we need to manually set the `this` keyword as well.
    Person.call(this, firstName, birthYear);
    this.course = course;
  }

  //* Linking prototypes
  Student.prototype = Object.create(Person.prototype);

  Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };

  const mike = new Student('Mike', 2020, 'CSE');
  mike.introduce();
  mike.calcAge();

  console.log(mike.__proto__);
  console.log(mike.__proto__.__proto__);

  console.log(mike instanceof Student); // true
  console.log(mike instanceof Person); // true
  console.log(mike instanceof Object); // true

  Student.prototype.constructor = Student;
  console.dir(Student.prototype.constructor);

  console.log(mike);
}
 */

//* Inheritance Between "Classes": ES6 Classes

/* 
{
  // Parent Class
  class PersonCl {
    constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    }

    calcAge() {
      console.log(2037 - this.birthYear);
    }

    greet() {
      console.log(`Hey, ${this.firstName}`);
    }
  }

  // Child Class
  class StudentCl extends PersonCl {
    constructor(firstName, birthYear, course) {
      // Always needs to happen first!
      super(firstName, birthYear);
      this.course = course;
    }

    introduce() {
      console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }

    // NOTE: Overwrite the `calcAge` method (Polymorphism)
    calcAge() {
      console.log(`I am ${2037 - this.birthYear} years old`);
    }
  }

  const mike = new StudentCl('Mike', 2020, 'CSE');
  mike.introduce();
  mike.calcAge();
  mike.greet();
  console.log(mike);
}
 */

//* Inheritance Between "Classes": Object.create()

/* 
{
  const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };

  const steven = Object.create(PersonProto);

  const StudentProto = Object.create(PersonProto);

  StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
  };

  StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };

  const jay = Object.create(StudentProto);

  jay.init('Jay', 2020, 'CSE');
  jay.introduce();
  jay.calcAge();
  console.log(jay);
}
 */

//* Another Class Example

/* 
{
  class Account {
    #pin; // private field

    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;
      this.movements = [];
      this.locale = navigator.language;

      console.log(`Thanks for opening an account, ${owner}.`);
    }

    // public method
    deposit(value) {
      this.movements.push(value);
    }

    // NOTE: আমরা চাইলে class এর একটা method এর মধ্যে অন্য আরেকটা method কে call করতে পারি।
    withdraw(value) {
      this.deposit(-value);
    }

    // private method
    #approveLoan(value) {
      return true;
    }

    requestLoan(value) {
      if (this.#approveLoan(value)) {
        this.deposit(value);
        console.log(`Loan approved`);
      }
    }
  }

  const account1 = new Account('Jonas', 'EUR', 1111);
  account1.deposit(500);
  account1.withdraw(200);
  account1.requestLoan(100);

  console.log(account1);
  // console.log(account1.#pin); // Property '#pin' is not accessible outside class 'Account' because it has a private identifier.
}
 */

//* Encapsulation: Private Class Fields and Methods

/* 
{
  // Make sure to review both the links and notes carefully 💚

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties
  // https://chatgpt.com/share/7451f2f1-fd25-4d98-95bf-460c2494068e

  // Most class elements have their private counterparts:

  // Private fields
  // Private methods
  // Private static fields
  // Private static methods
  // Private getters
  // Private setters
  // Private static getters
  // Private static setters

  // These features are collectively called "private elements".

  class Account {
    // Private fields
    #pin;
    #movements = [];

    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;
      this.locale = navigator.language;

      console.log(`Thanks for opening an account, ${owner}.`);
    }

    // Private method
    #approveLoan(value) {
      // Fake method
      return true;
    }

    // Public methods
    getMovements() {
      return this.#movements;
    }

    deposit(value) {
      this.#movements.push(value);
    }

    withdraw(value) {
      this.deposit(-value);
    }

    requestLoan(value) {
      if (this.#approveLoan(value)) {
        this.deposit(value);
        console.log(`Loan approved`);
      }
    }
  }

  // Create instance from Account class
  const account1 = new Account('Jonas', 'EUR', 1111);
  account1.deposit(500);
  account1.withdraw(200);
  account1.requestLoan(100);
  console.log(account1.getMovements());

  // The following lines will produce errors because they attempt to access private fields/methods:
  // account1.#pin; // SyntaxError
  // account1.#movements; // SyntaxError
  // account1.#approveLoan(30); // SyntaxError

  console.log(account1); // Output: Account { owner: 'Jonas', currency: 'EUR', locale: 'en-US' }
}
 */

//* Chaining Methods

/* 
{
  // IMPORTANT:
  // In order to chain methods, We have to return `this` (current object) inside methods.
  // Return `this` means return current object.

  class Account {
    #pin;
    #movements = [];

    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;
      this.locale = navigator.language;

      console.log(`Thanks for opening an account, ${owner}.`);
    }

    #approveLoan(value) {
      return true;
    }

    getMovements() {
      return this.#movements;
    }

    deposit(value) {
      this.#movements.push(value);
      return this; // return current object for chaining
    }

    withdraw(value) {
      this.deposit(-value);
      return this; // return current object for chaining
    }

    requestLoan(value) {
      if (this.#approveLoan(value)) {
        this.deposit(value);
        console.log(`Loan approved`);
        return this; // return current object for chaining
      }
    }
  }

  const account1 = new Account('Jonas', 'EUR', 1111);

  //* Chaining
  account1
    .deposit(400)
    .deposit(500)
    .withdraw(300)
    .requestLoan(2000)
    .withdraw(1000);

  console.log(account1);
  console.log(account1.getMovements()); // [400, 500, -300, 2000, -1000]
}
 */

//* ES6 Classes Summary

// Claude AI

// 👁️ MUST SEE: Slide (ES6 Classes Summary)
// 👁️ ALSO MUST SEE (Code Link): https://claude.ai/public/artifacts/a76d7361-a18a-4c37-9826-1dfe7852983d?fullscreen=true
// 📖 READ Claude AI Generated Code Patiently and Carefully

// 🧠 Article Link: https://claude.ai/share/e430e356-703d-4325-ab4d-2e7179e5ea55

/* 
{
  // ==================== ES6 CLASSES COMPLETE REFERENCE ====================
  // Classes are "syntactic sugar" over constructor functions
  // Classes are NOT hoisted and are first-class citizens
  // Class body is ALWAYS executed in strict mode

  // ==================== PARENT CLASS ====================
  class Person {
    // Public field (similar to property, available on created object)
    nationality = 'Portuguese';

    // Constructor method - called by new operator, mandatory in regular class
    constructor(fullName, birthYear) {
      // Instance properties (available on created object)
      this.fullName = fullName;
      this.birthYear = birthYear;
    }

    // Public method
    calcAge() {
      return 2024 - this.birthYear;
    }

    // Public method
    greet() {
      console.log(`Hey ${this.fullName}!`);
    }
  }

  // ==================== CHILD CLASS ====================
  class Student extends Person {
    // Inheritance between classes, automatically sets prototype

    // Public field (similar to property, available on created object)
    university = 'University of Lisbon';

    // Private fields (not accessible outside of class) - use # prefix
    #studyHours = 0;
    #course;

    // Static public field (available only on class)
    static numSubjects = 10;

    // Constructor method - called by new operator, might be omitted in child class
    constructor(fullName, birthYear, startYear, course) {
      // Call to parent (super) class - necessary with extend
      // Needs to happen before accessing 'this'
      super(fullName, birthYear);

      // Instance property (available on created object)
      this.startYear = startYear;

      // Redefining private field
      this.#course = course;
    }

    // Public method
    introduce() {
      console.log(`I study ${this.#course} at ${this.university}`);
    }

    // Public method that references private field and method
    study(hours) {
      this.#makeCoffee(); // Referencing private method
      this.#studyHours += hours;
      console.log(
        `Studied for ${hours} hours. Total: ${this.#studyHours} hours`
      );
    }

    // Private method
    #makeCoffee() {
      return 'Here is a coffee for you 🍵';
    }

    // Getter method - access like property: student.testScore
    get testScore() {
      return this._testScore || 0;
    }

    // Setter method - use _ to set property with same name as method, also auto-adds getter
    set testScore(score) {
      this._testScore = score <= 20 ? score : 0;
    }

    // Get current academic year
    get currentYear() {
      return new Date().getFullYear();
    }

    // Get years studied
    get yearsStudied() {
      return this.currentYear - this.startYear;
    }

    // Static method (available only on class - cannot access instance properties/methods, only static ones)
    static printCurriculum() {
      console.log(`There are ${this.numSubjects} subjects in our curriculum`);
    }

    // Static method with parameter (Factory Pattern)
    static createMedicalStudent(fullName, birthYear, startYear) {
      return new this(fullName, birthYear, startYear, 'Medicine');
    }
  }

  // ==================== USAGE EXAMPLES ====================

  // Creating new object with new operator
  const student = new Student('Jonas', 1995, 2020, 'Medicine');

  // Accessing public properties and methods
  console.log(student.fullName); // 'Jonas'
  console.log(student.university); // 'University of Lisbon'
  student.introduce(); // 'I study Medicine at University of Lisbon'

  // Using inherited methods from parent class
  student.greet(); // 'Hey Jonas!'
  console.log(student.calcAge()); // 29

  // Using getters and setters
  student.testScore = 18; // Uses setter
  console.log(student.testScore); // 18 (uses getter)
  student.testScore = 25; // Uses setter, but sets to 0 due to validation
  console.log(student.testScore); // 0

  // Using other getters
  console.log(student.yearsStudied); // 4

  // Public method usage
  student.study(3); // 'Studied for 3 hours. Total: 3 hours'

  // Accessing private fields/methods directly will cause error:
  // console.log(student.#studyHours); // SyntaxError
  // student.#makeCoffee(); // SyntaxError

  // Static method calls (on class, not instance)
  Student.printCurriculum(); // 'There are 10 subjects in our curriculum'
  console.log(Student.numSubjects); // 10

  // Static factory method
  const medStudent = Student.createMedicalStudent('Sarah', 1998, 2021);
  console.log(medStudent); // New Student instance with Medicine course
}
 */

// ==================== KEY CONCEPTS SUMMARY ====================
/*
1. PUBLIC FIELDS: Available on all instances (university = 'value')
2. PRIVATE FIELDS: Only accessible within class (#studyHours, #course)
3. STATIC FIELDS: Available only on class itself (numSubjects)
4. CONSTRUCTOR: Called by 'new', sets up instance
5. SUPER(): Calls parent constructor, must come before 'this'
6. PUBLIC METHODS: Available on all instances (introduce, study)
7. PRIVATE METHODS: Only accessible within class (#makeCoffee)
8. STATIC METHODS: Available only on class (printCurriculum)
9. GETTERS: Access like property (get testScore)
10. SETTERS: Set like property (set testScore)
11. INHERITANCE: 'extends' creates prototype chain
12. POLYMORPHISM: Child can override parent methods
*/

// Code From Slide

/* 
{
  // Parent Class
  class Person {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  }

  // Child Class
  class Student extends Person {
    university = 'University of Lisbon';
    #studyHours = 0;
    #course;
    static numSubjects = 10;

    constructor(fullName, birthYear, startYear, course) {
      super(fullName, birthYear);

      this.startYear = startYear;
      this.#course = course;
    }

    introduce() {
      console.log(`I study ${this.#course} at ${this.university}`);
    }

    study(h) {
      this.#makeCoffee();
      this.#studyHours += h;
    }

    #makeCoffee() {
      return `Here is a coffee for you 🍵`;
    }

    get testScore() {
      return this._testScore;
    }

    set testScore(score) {
      this._testScore = score <= 20 ? score : 0;
    }

    static printCurriculum() {
      console.log(`There are ${this.numSubjects} subjects`);
    }
  }

  const student = new Student('Jonas', 2020, 2037, 'Medicine');
  console.log(student);
}
 */

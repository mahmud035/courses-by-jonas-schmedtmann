'use strict';

//* The 4 Fundamental OOP Principles

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

'use strict';

// References:
// 👉 Claude.ai: https://claude.ai/share/64f0acc8-628b-4a0e-bff1-a573ce6d4db4

//* An High-Level Overview of JavaScript

{
  // 1. JavaScript abstracts away complex memory management and hardware details. Unlike C or C++, you don't manually allocate/deallocate memory:

  // JavaScript handles memory automatically
  let users = ['Alice', 'Bob', 'Charlie']; // Memory allocated automatically
  users = null; // Garbage collector will clean up when appropriate

  // 2. JavaScript uses automatic memory management through garbage collection:
  function createUser() {
    const user = { name: 'John', age: 30 }; // Memory allocated
    return user;
  }

  let myUser = createUser(); // Reference exists
  myUser = null; // No references left - eligible for garbage collection

  // 3. Interpreted vs Compiled
  // Modern JavaScript is actually Just-In-Time (JIT) compiled:

  // Traditional interpretation: Code executed line by line
  // JIT compilation: Code is compiled to machine code during execution for performance

  // This loop will be optimized by the JIT compiler after several runs
  // for (let i = 0; i < 1000000; i++) {
  //   console.log(i);
  // }

  // 4. Multi-Paradigm Language
  // JavaScript supports multiple programming paradigms:

  // Procedural
  function calculateTax(income) {
    return income * 0.2;
  }

  // Object-Oriented
  class TaxCalculator {
    constructor(rate) {
      this.rate = rate;
    }

    calculate(income) {
      return income * this.rate;
    }
  }

  // Functional
  const calculateTaxFunctional = (rate) => (income) => income * 0.2;
  const calculateIncomeTax = calculateTaxFunctional(0.2);

  // 5. Prototype-Based Object-Oriented
  // Unlike class-based languages, JavaScript uses prototypes:

  // Constructor function
  function Person(name) {
    this.name = name;
  }

  // Adding methods to prototype
  Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}`;
  };

  const john = new Person('John');
  console.log(john.greet()); // "Hello, my name is John"

  // john inherits from Person.prototype
  console.log(john.__proto__ === Person.prototype); // true

  // 6. First-Class Functions
  // Functions are treated as values - you can assign them, pass them around, and return them:

  // Assign function to a variable
  const multiply = function (a, b) {
    return a * b;
  };

  // Pass function as an argument
  function calculator(operation, a, b) {
    return operation(a, b);
  }

  console.log(calculator(multiply, 5, 10)); // 50

  // Return function from function
  function createMultiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }

  const double = createMultiplier(2);
  console.log(double(5)); // 10

  // 7. Dynamic Typing
  // Variables don't have fixed types - they're determined at runtime:

  let value = 42; // Number
  console.log(typeof value); // "number"

  value = 'Hello World'; // Now it's a string
  console.log(typeof value); // "string"

  value = true; // Now it's a boolean
  console.log(typeof value); // "boolean"

  // This flexibility is powerful but requires careful coding

  // 8. Single-Threaded & Non-Blocking Event Loop
  // JavaScript runs on a single thread but handles asynchronous operations efficiently:

  console.log('1'); // Executes first

  setTimeout(() => {
    console.log('2'); // Executes last (after 0ms, but still async)
  }, 0);

  console.log('3'); // Executes second

  // Output order: 1, 3, 2
}

//* The JavaScript Engine and Runtime

{
  // What is a JavaScript Engine?
  // A JavaScript engine is a program that executes JavaScript code. Think of it as the translator that converts your high-level JS code into machine code that your computer can understand.

  // This code needs to be processed by an engine to run
  const greetUser = (name) => {
    return `Welcome back, ${name}!`;
  };

  console.log(greetUser('Sarah'));

  // The JavaScript Runtime
  // The runtime is the complete environment where JavaScript executes. It's way more than just the engine!

  // Components of JavaScript Runtime:
  // 1. The JavaScript Engine (Heart)
  // Engine handles the execution
  let count = 0;
  function increment() {
    return ++count;
  }

  // 2. Web APIs (Browser) / C++ APIs (Node.js)
  // These aren't part of JavaScript - they're provided by the runtime!

  // Browser Web APIs
  setTimeout(() => console.log('Timer finished!'), 1000);
  fetch('https://api.example.com/data');
  document.getElementById('myButton');

  // Node.js APIs
  const fs = require('fs');
  const http = require('http');

  // 3. Callback Queue (Task Queue)
  // Callbacks from Web APIs wait here
  setTimeout(() => console.log('From callback queue'), 0);

  // 4. Event Loop
  console.log('1'); // Call stack

  setTimeout(() => console.log('2'), 0); // Callback queue

  Promise.resolve().then(() => console.log('3')); // Microtask queue

  console.log('4'); // Call stack

  // Output: 1, 4, 3, 2
  // Event loop manages the execution order!

  // Runtime Environment Comparison:
  // Browser Runtime: Includes DOM, BOM, Fetch API, etc.

  // Browser-specific features
  window.location.href = 'https://newpage.com';
  localStorage.setItem('key', 'value');
  localStorage.removeItem('key');
  navigator.geolocation.getCurrentPosition(callback);

  // DOM manipulation
  document.querySelector('.button').addEventListener('click', handleClick);
}

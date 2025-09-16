'use strict';

//* Parameters Default Value

{
  // https://chatgpt.com/share/1a7e991e-97ff-45d3-9827-d09784d97dac

  const bookings = [];

  const createBooking = (flightNum, numPassengers = 1, price = 100) => {
    const booking = {
      flightNum,
      numPassengers,
      price,
    };

    console.log(booking);
    bookings.push(booking);
  };

  createBooking('LH123');
  createBooking('LH123', 4);
  createBooking('LH123', 7, 300);
  createBooking('LH123', undefined, undefined);
}

//* How Passing Arguments Works: Value vs. Reference

{
  // https://chatgpt.com/share/8db1daa4-8532-4d6a-8e60-d974f2539e50

  // Pass By Value
  function modifyPrimitive(primitive) {
    primitive = 100; // this change won't affect the original variable
  }

  const num = 50;
  modifyPrimitive(num);
  console.log(num); // Output: 50

  // Pass By Reference
  function modifyObject(obj) {
    obj.name = 'Alice'; // this change will affect the original object
  }

  const person = { name: 'Bob' };
  modifyObject(person);
  console.log(person.name); // Output: Alice
}

//* First-Class and Higher-Order Functions

{
  // https://chatgpt.com/share/492fd239-e41d-4cf4-a303-30ed1b2b2309

  // First-class functions are functions that can be treated like any other variable in JavaScript, while higher-order functions are functions that take other functions as arguments or return them as results.

  // Here's an example to illustrate first-class functions:

  // Assigning a function to a variable
  const greet = function (name) {
    return `Hello ${name}!`;
  };

  // Passing a function as an argument
  function sayHello(fn, name) {
    console.log(fn(name));
  }

  sayHello(greet, 'Alice'); // Hello Alice!

  // Returning a function from another function
  function createGreeting(greeting) {
    return function (name) {
      return `${greeting}, ${name}`;
    };
  }

  const sayHi = createGreeting('Hi');
  console.log(sayHi('Bob')); // Hi, Bob

  // Examples of Higher-Order Functions
  // Array Methods: Common examples of higher-order functions in JavaScript are array methods like map, filter, and reduce.

  // Using map to transform an array
  const numbers = [1, 2, 3, 4, 5];
  const double = numbers.map((number) => number * 2);
  console.log(double); // [2, 4, 6, 8, 10]

  // Using filter to get even numbers
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  console.log(evenNumbers); // [2, 4]

  // Using reduce to sum an array
  const sum = numbers.reduce((total, number) => total + number, 0);
  console.log(sum); // 15

  // Creating Higher-Order Functions:
  // Function that returns another function
  function multiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }

  const doubler = multiplier(2);
  console.log(doubler(5)); // 10

  const tripler = multiplier(3);
  console.log(tripler(5)); // 15

  // Function Composition: Combining multiple functions to create a new function.
  function compose(fn1, fn2) {
    return function (x) {
      return fn1(fn2(x)); // here fn2(x) return 5 + 1 = 6, then fn1(6) will be called
    };
  }

  const add1 = (x) => x + 1;
  const multiply2 = (x) => x * 2;

  const add1ThenMultiply2 = compose(multiply2, add1);
  console.log(add1ThenMultiply2(5)); // 12
}

//* Functions Accepting Callback Functions

{
  // TODO: 🧠 MUST READ: https://claude.ai/share/6fe3210e-8e03-497e-a82b-9acf0b701667

  /*
  What's a Callback Function?
    A callback function is literally just a function that gets passed as an argument to another function, and then gets called (executed) at some point inside that function. Think of it like giving someone your phone number and saying "call me when you're ready."

  JavaScript uses "callback" function all the time.
 */

  // Basic example
  function greet(name, callback) {
    console.log(`Hello ${name}!`);
    callback(); // Execute the callback function
  }

  function sayGoodbye() {
    console.log('Goodbye!');
  }

  // Pass sayGoodbye as a callback
  greet('Sarah', sayGoodbye);
  // Output:
  // Hello Sarah!
  // Goodbye!

  /*
  Why Do We Even Use These?
    Callbacks are everywhere in JavaScript because they enable asynchronous programming and make your code more flexible. Here's the thing - JS is single-threaded, so callbacks help us handle operations that take time (like API calls, file operations, timers) without blocking the entire program.
  */

  /*
  Higher-Order Functions
  A higher-order function is a function that does at least one of the following:
    1. Takes one or more functions as arguments.
    2. Returns a function as its result.
  
  Higher-order functions allow for greater abstraction and modularity in your code.
  */

  const oneWord = (str) => {
    return str.replaceAll(' ', '').toLowerCase();
  };

  const upperFirstWord = (str) => {
    const [firstWord, ...others] = str.split(' '); // convert string to array
    return [firstWord.toUpperCase(), ...others].join(' '); // convert array to string
  };

  // Higher-Order Function (HOF)
  const transformer = (str, callbackFn) => {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${callbackFn(str)}`);

    console.log(`Transformed by: ${callbackFn.name}`);
  };

  transformer('JavaScript is the best!', upperFirstWord);
  transformer('JavaScript is the best!', oneWord);

  const purchasePlane = () => console.log(`🛩`);
  const el = document.querySelector('.buy');

  el.addEventListener('click', purchasePlane); // Here, `purchasePlane`is callback and `addEventListener` is HOF.
}

//* Functions Returning Functions

{
  // https://chatgpt.com/share/93a47c24-a1fd-43aa-96f6-51b750dc1144

  // In JavaScript, functions can return other functions. This is a common pattern in functional programming and can be used to create higher-order functions, currying, and closures. Here are a few examples to illustrate how functions returning functions work in JavaScript.

  // Example 1: Higher-Order Function
  // A higher-order function is a function that takes another function as an argument or returns a function as a result.

  function createGreeting(greeting) {
    return function (name) {
      return `${greeting}, ${name}!`;
    };
  }

  const sayHello = createGreeting('Hello');
  console.log(sayHello('Alice')); // Hello, Alice!
  console.log(sayHello('Bob')); // Hello, Bob!

  // NOTE: USING Arrow Function
  const createGreetingArrow = (greeting) => (name) => `${greeting}, ${name}!`;

  const sayHello2 = createGreetingArrow('Hello');
  console.log(sayHello2('Alice')); // Hello, Alice!
  console.log(sayHello2('Bob')); // Hello, Bob!

  // Example 2: Closure
  // A closure is created when an inner function has access to the outer (enclosing) function’s variables.

  function counter() {
    let count = 0;
    return function () {
      count += 1;
      return count;
    };
  }

  const increment = counter();
  console.log(increment()); // Output: 1
  console.log(increment()); // Output: 2
  console.log(increment()); // Output: 3

  // Example 3: Currying
  // Currying is a technique where a function is transformed into a sequence of nested functions, each taking a single argument.

  function multiply(a) {
    return function (b) {
      return a * b;
    };
  }

  const double = multiply(2);
  const triple = multiply(3);

  console.log(double(5)); // Output: 10
  console.log(double(10)); // Output: 20

  console.log(triple(5)); // Output: 15
  console.log(triple(10)); // Output: 30
}

//* The call and apply Methods

{
  // 🧠 MUST READ: https://claude.ai/share/f0a110df-be50-46be-9fd9-eb5b70db714f

  // https://www.w3schools.com/js/js_function_call.asp
  // https://www.w3schools.com/js/js_function_apply.asp

  /*
  The call and apply methods are fundamental JavaScript tools that let you explicitly control the `this` context when invoking functions. They're essentially different ways to "borrow" methods from other objects or execute functions with a specific context.

  The Core Concept
  Both methods allow you to invoke a function while explicitly setting what `this` refers to inside that function. The key difference lies in how you pass arguments:
  
  - call(thisArg, arg1, arg2, ...) - Arguments passed individually
  - apply(thisArg, [arg1, arg2, ...]) - Arguments passed as an array
  */

  // Practical Examples
  // Here's where these methods shine in real-world scenarios:

  // Object method borrowing
  const person1 = {
    name: 'Alice',
    greet() {
      return `Hello, I'm ${this.name}`;
    },
  };

  const person2 = { name: 'Bob' };

  // Borrowing person1's greet method for person2
  console.log(person1.greet.call(person2)); // "Hello, I'm Bob"
  console.log(person1.greet.apply(person2)); // Same result

  // Another Example
  // The `call` method calls a function with a given `this` value and arguments provided individually.
  // The `apply` method calls a function with a given `this` value and arguments provided as an array (or array-like object).

  const person = {
    fullName(city, country) {
      console.log(`${this.firstName} ${this.lastName}, ${city}, ${country}`);
    },
  };

  const person3 = {
    firstName: 'John',
    lastName: 'Doe',
  };

  const person4 = {
    firstName: 'John',
    lastName: 'Smith',
  };

  // Borrowing person's fullName method for person3 & person4 objects
  person.fullName.call(person3, 'Oslo', 'Norway'); // John Doe, $Oslo, Norway
  person.fullName.apply(person4, ['Oslo', 'Norway']); // John Smith, $Oslo, Norway
}

// Lecture Code

{
  const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };

  lufthansa.book(239, 'Jonas Schmedtmann');
  lufthansa.book(635, 'John Smith');
  console.log(lufthansa);

  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };

  const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
  };

  // - call(thisArg, arg1, arg2, ...) - Arguments passed individually
  // - apply(thisArg, [arg1, arg2, ...]) - Arguments passed as an array

  // Borrowing lufthansa's book method for eurowings & swiss objects
  lufthansa.book.call(eurowings, 23, 'Sarah Williams');
  lufthansa.book.call(swiss, 583, 'Mary Cooper');

  console.log(eurowings);
  console.log(swiss);

  lufthansa.book.apply(swiss, [583, 'George Cooper']);
  console.log(swiss);
}

//* The bind Method

{
  // 🧠 MUST READ: https://claude.ai/share/df58f31b-47ee-4f18-a8ee-2f0659c7140a

  /*
  The `bind` method is one of JavaScript's most powerful yet underutilized function methods. It "creates a new function" with a "permanently bound this context" and "optionally pre-filled arguments". Let me break this down for you.

  What bind() Does
    The bind method returns a "new function" where:
    - The `this` value is permanently set to whatever you specify
    - You can optionally "pre-fill" some arguments

  Basic Syntax
    const boundFunction = originalFunction.bind(thisArg, arg1, arg2, ...);
  */

  // Practical Examples

  // 1. Fixing `this` Context Issues
  // This is the most common use case - preventing `this` from being lost:

  class UserService {
    constructor(name) {
      this.name = name;
    }

    greet() {
      return `Hello, I'm ${this.name}`;
    }
  }

  const service = new UserService('Alice');

  // ❌ Problem: `this` gets lost when passed as callback
  setTimeout(service.greet, 1000); // "Hello, I'm undefined"

  // ✅ Solution: Use bind to preserve `this`
  setTimeout(service.greet.bind(service), 1000); // "Hello, I'm Alice"

  // ✅ Solution: Modern Alternatives
  setTimeout(() => service.greet(), 1000); // "Hello, I'm Alice"

  // 2. Partial Application (Pre-filling Arguments)
  // This is where `bind` gets really interesting:

  function multiply(a, b, c) {
    return a * b * c;
  }

  // Create a new function with the first arguments pre-filled
  const double = multiply.bind(null, 2);
  console.log(double(3, 4)); // 2 * 3 * 4 = 24

  // Create a function that always multiplies by 2 and 5
  const multiplyBy2And5 = multiply.bind(null, 2, 5);
  console.log(multiplyBy2And5(3)); // 2 * 5 * 3 = 30

  /*
  When to Use bind()
  - When you need to pass methods as callbacks while preserving `this`
  - For partial application/currying scenarios
  - When working with older codebases or specific patterns that require it
  - Creating reusable, pre-configured functions

  The `bind` method is particularly valuable when you need precise control over function context and argument pre-filling. It's a foundational concept that helps you understand how JavaScript handles function execution contexts - knowledge that's crucial for debugging those tricky `this`-related issues we all encounter.
  */
}

// Lecture Code

{
  const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };

  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };

  const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
  };

  // Bind method
  // book.call(eurowings, 23, 'Sarah Williams');

  const bookEW = lufthansa.book.bind(eurowings);
  const bookLH = lufthansa.book.bind(lufthansa);
  const bookLX = lufthansa.book.bind(swiss);

  bookEW(23, 'Sarah Williams');
  bookLH(239, 'Jonas Schmedtmann');
  bookLX(583, 'Mary Cooper');

  // Partial Application (Pre-filling Arguments)
  const bookEW23 = lufthansa.book.bind(eurowings, 23); // Pre-filled flightNum
  bookEW23('Jonas Schmedtmann');
  bookEW23('Martha Cooper');

  //  Fixing `this` Context Issues (With Event Listeners)
  lufthansa.planes = 300;
  lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
  };

  const buttonEl = document.querySelector('.buy');

  // ❌ Problem: `this` gets lost when passed as callback
  // buttonEl.addEventListener('click', lufthansa.buyPlane);

  // ✅ Solution: Use `bind` to preserve `this`
  buttonEl.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

  // ✅ Solution: Modern Alternatives
  buttonEl.addEventListener('click', () => lufthansa.buyPlane());

  // Another Example of Partial Application (Pre-filling Arguments)
  const addTax = (rate, value) => value + value * rate;
  console.log(addTax(0.1, 200));

  const addVAT = addTax.bind(null, 0.23); // Here, we pre-filled the rate 0.23, now we need to provide just value
  // addVAT = (value) => value + value * 0.23;

  console.log(addVAT(100)); // 100 + 23 = 123
  console.log(addVAT(200)); // 200 + 46 = 246

  // Do the same Using Higher-Order Function
  const addTaxRate = (rate) => (value) => value + value * rate;

  const addVAT2 = addTaxRate(0.23);
  console.log(addVAT2(100)); // 100 + 23 = 123
  console.log(addVAT2(200)); // 200 + 46 = 246
}

//* Immediately Invoked Function Expressions (IIFE)

{
  // https://chatgpt.com/share/ea9b19a1-5b50-4825-97cd-28763fc05d33

  (function () {
    console.log(`This will never run again`);
  })();

  (() => console.log(`This will ALSO never run again`))();
}

//* Closure

// Claude
{
  // https://claude.ai/share/70347a95-d0dc-495f-8689-df9a1f269d44

  // Closures are one of JavaScript's most powerful and fundamental concepts, yet they trip up many developers because they're both elegant and counterintuitive.

  // What's a closure?
  // A closure is created when an inner function has access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing. The inner function "closes over" these variables, keeping them alive.

  // Here's a classic example:

  function outerFunction(x) {
    // This is the outer function's scope

    function innerFunction(y) {
      // Inner function has access to 'x' from outer scope
      return x + y;
    }

    return innerFunction; // Return the function, not call it
  }

  const addFive = outerFunction(5);
  console.log(addFive(3)); // 8 - 'x' is still 5!

  // The magic here? When `outerFunction` finishes executing, normally its variables would be garbage collected. But because `innerFunction` references `x`, JavaScript keeps that variable alive in a closure.

  console.dir(addFive); // 👁️ See: [[Scopes]] -> Closure

  // Practical applications you'll actually use:

  // 1. Data Privacy (before classes were cool):
  function createCounter() {
    let count = 0; // Private variable

    return {
      increment: () => ++count,
      decrement: () => --count,
      getCount: () => count,
    };
  }

  const counter = createCounter();
  counter.increment(); // 1
  // No way to directly access 'count' from outside

  // 2. Event Handlers with State:
  function attachListeners() {
    let clickCount = 0;

    document.addEventListener('click', () => {
      clickCount++;
      console.log(`Clicked ${clickCount} times`);
    });
  }

  // 3. Function Factories (super useful for your React work):
  function createValidator(rules) {
    return function (data) {
      // `rules` is captured in the closure
      return rules.every((rule) => rule(data));
    };
  }

  const userValidator = createValidator([
    (user) => user.email.includes('@'),
    (user) => user.age >= 18,
  ]);

  // ⁉️ INTERESTING: The gotcha that catches everyone:

  // This doesn't work as expected
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints 3, 3, 3
  }

  // Fix with closure
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints 0, 1, 2
  }

  // With `var`, all callbacks share the same `i` variable. With `let`, each iteration creates a new lexical scope.

  // Why closures matter for your stack:

  // In React, you're using closures constantly without realizing it. Every time you use useState, useEffect, or create event handlers, you're leveraging closures. They're what make hooks work - the closure preserves state between renders.

  // The key insight? Closures aren't just academic concepts - they're the foundation of modern JavaScript patterns, from module systems to React hooks. Master them, and you'll understand why JavaScript behaves the way it does.

  // NOTE: Think of closures as JavaScript's way of giving functions a "memory" - they remember where they came from, even when they're called somewhere else entirely.
}

// ChatGPT
{
  // https://chatgpt.com/share/20399463-0f0d-4cae-81b9-21b54efff12a

  // What is a Closure?
  // A closure is created when a function is defined inside another function and the inner function references variables from the outer function's scope. The inner function retains access to those variables even after the outer function has finished executing.

  function outerFunction() {
    let outerVariable = `I am from the outer scope!`;

    function innerFunction() {
      console.log(outerVariable);
    }

    return innerFunction;
  }

  const myClosure = outerFunction();
  myClosure(); // Output: I am from the outer scope!

  /*
  In this example:

  `outerFunction` defines a variable `outerVariable` and an inner function `innerFunction` that references `outerVariable`.

  `outerFunction` returns `innerFunction`.

  Even after `outerFunction` has finished executing, `myClosure` (which is a reference to `innerFunction`) retains access to `outerVariable`.
  */

  console.dir(myClosure); // 👁️ See: [[Scopes]] -> Closure

  // Practical Uses of Closures

  // 1. Data Privacy: Closures can be used to create private variables that cannot be accessed directly from outside a function.

  // This method was useful before JS Classes were introduced.

  function createCounter() {
    let count = 0; // Private variable

    return {
      increment: () => ++count,
      decrement: () => --count,
      getCount: () => count,
    };
  }

  const counter = createCounter();
  counter.increment(); // 1
  // No way to directly access 'count' from outside

  // 2. Function Factories: Closures can be used to create functions with preset arguments.

  function createGreeting(greeting) {
    return function (name) {
      console.log(`${greeting}, ${name}`);
    };
  }

  const sayHello = createGreeting('Hello');
  sayHello('Alice'); // Output: Hello, Alice

  const sayHi = createGreeting('Hi');
  sayHi('Bob'); // Output: Hi, Bob

  // 3. Maintaining State: Closures can help maintain state in asynchronous code or loops.

  // for (let i = 1; i <= 5; i++) {
  //   setTimeout(() => {
  //     console.log(i); // Outputs: 1, 2, 3, 4, 5
  //   }, i * 1000);
  // }

  // Without closures (or using var instead of let), all timeout functions would log the same final value.
}

// Lecture Code

{
  function secureBooking() {
    let passengerCount = 0;

    return function () {
      passengerCount++;
      console.log(`${passengerCount} passengers`);
    };
  }

  const booker = secureBooking();

  booker(); // 1 passengers
  booker(); // 2 passengers
  booker(); // 3 passengers

  console.dir(booker); // 👁️ See: [[Scopes]] -> Closure
}

//* More Closure Examples

// Lecture Code
{
  // Example 1
  let f;

  const g = function () {
    const a = 23;
    f = function () {
      console.log(a * 2);
    };
  };

  const h = function () {
    const b = 500;
    f = function () {
      console.log(b * 2);
    };
  };

  g();
  f();
  console.dir(f); // 👁️ See: [[Scopes]] -> Closure

  // Re-assigning f function
  h();
  f();
  console.dir(f); // 👁️ See: [[Scopes]] -> Closure

  // Example 2
  const boardPassengers = function (numOfPassengers, wait) {
    const perGroup = numOfPassengers / 3;

    setTimeout(() => {
      console.log(`We are now boarding all ${numOfPassengers} passengers`);
      console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
  };

  boardPassengers(180, 3);
}

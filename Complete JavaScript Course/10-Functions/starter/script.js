'use strict';

//* Parameters Default Value

/* const bookings = [];

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
createBooking('LH123', undefined, undefined); */

//* Pass By Value vs. Pass By Reference

/* // Pass By Value
function modifyPrimitive(primitive) {
  primitive = 100; // this change won't affect the original variable
}

let num = 50;
modifyPrimitive(num);
console.log(num); // Output: 50

// Pass By Reference
function modifyObject(obj) {
  obj.name = 'Alice'; // this change will affect the original object
}

let person = { name: 'Bob' };
modifyObject(person);
console.log(person.name); // Output: Alice */

//* First-Class and Higher-Order Functions

/* 
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
const sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);
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
 */

//* Functions Accepting Callback Functions

/* const oneWord = (str) => {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = (str) => {
  const [firstWord, ...others] = str.split(' '); // convert string to array
  return [firstWord.toUpperCase(), ...others].join(' '); // convert array to string
};

// Higher Order Function
const transformer = (str, callbackFn) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${callbackFn(str)}`);

  console.log(`Transformed by: ${callbackFn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord); */

//* Functions Returning Functions

/* 
// In JavaScript, functions can return other functions. This is a common pattern in functional programming and can be used to create higher-order functions, currying, and closures. Here are a few examples to illustrate how functions returning functions work in JavaScript.

// Example 1: Higher-Order Function
// A higher-order function is a function that takes another function as an argument or returns a function as a result.
function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeting('Hello');
console.log(sayHello('Alice')); // Output: Hello, Alice!
console.log(sayHello('Bob')); // Output: Hello, Bob!

// NOTE: USING Arrow Function
const createGreeting2 = (greeting) => {
  return (name) => {
    return `${greeting}, ${name}!`;
  };
};

const sayHello2 = createGreeting2('Hello');
console.log(sayHello2('Alice')); // Output: Hello, Alice!
console.log(sayHello2('Bob')); // Output: Hello, Bob!

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
console.log(double(5)); // Output: 10
console.log(double(10)); // Output: 20

const triple = multiply(3);
console.log(triple(5)); // Output: 15
console.log(triple(10)); // Output: 30
 */

//* The call and apply Methods

/* const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, ' John Smith');
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

const book = lufthansa.book;

// NOTE: With call() method, an object can use a method belonging to another object.
book.call(eurowings, 23, 'Sarah Williams');
book.call(swiss, 583, 'Mary Cooper');

console.log(eurowings);
console.log(swiss);

// NOTE: The apply() method is similar to the call() method BUT it takes arguments as an array.
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = lufthansa.book.bind(eurowings);
const bookLH = lufthansa.book.bind(lufthansa);
const bookLX = lufthansa.book.bind(swiss);

bookEW(23, 'Sarah Williams');
bookLH(239, 'Jonas Schmedtmann');
bookLX(583, 'Mary Cooper');

console.log(eurowings); */

//* Immediately Invoked Function Expressions (IIFE)

/* (function () {
  console.log(`This will never run again`);
})();

(() => console.log(`This will ALSO never run again`))();
 */

//* Closure

/* 
function outerFunction() {
  let outerVariable = `I am from the outer scope!`;

  return function innerFunction() {
    console.log(outerVariable);
  };
}

const myClosure = outerFunction();
myClosure(); // Output: I am from the outer scope!

// Practical Uses of Closures
// 1. Data Privacy: Closures can be used to create private variables that cannot be accessed directly from outside a function.

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.getCount()); // Output: 1
console.log(counter.decrement()); // Output: 0

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
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i); // Outputs: 1, 2, 3, 4, 5
  }, i * 1000);
}
// Without closures (or using var instead of let), all timeout functions would log the same final value.
*/

/* 
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker(); // Output: 1 passengers
booker(); // Output: 2 passengers
booker(); // Output: 3 passengers

console.dir(booker);
*/

//* More Closure Examples

/* 
// Example: 1
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
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example: 2
const boardPassengers = function (numOfPassengers, wait) {
  const perGroup = numOfPassengers / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${numOfPassengers} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
 */

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
  f;
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

//* Scope and The Scope Chain

{
  /*
  Scope refers to the context in which variables and functions are accessible.

  The scope chain is the mechanism that JavaScript uses to resolve variable names when they are referenced. When a variable is used, JavaScript looks for it in the current scope. If it can't find it, it moves up to the next outer scope, continuing until it reaches the global scope. If the variable isn't found in any scope, a ReferenceError is thrown.
  */

  const a = 'Jonas';
  first();

  function first() {
    const b = 'Hello';
    second();

    function second() {
      const c = 'Hi';
      third();
    }
  }

  function third() {
    const d = 'Hey';
    console.log(a + b + c + d); // ❌ Reference Error: b, c is not defined
  }

  // Here, `third()` function will look `b` & `c` variable inside its current scope. As they are not declared inside third()  function, then it will look for global scope. Since b & c also not available in global scope, then a ReferenceError is thrown.
}

//* Scoping in Practice

{
  const myName = 'Jonas';

  function first() {
    const age = 30;

    if (age >= 30) {
      const decade = 3;
      var millennial = true;
    }

    function second() {
      const job = 'teacher';

      console.log(`${myName} is a ${age}-year old ${job}`);
      // Jonas is a 30-year old teacher
    }

    second();
  }

  first();
}

// Lecture Code

{
  const firstName = 'Jonas';

  function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
      const output = `You are ${firstName}, born in ${birthYear}, and are ${age} years old.`;
      console.log(output);

      if (birthYear >= 1981 && birthYear <= 1996) {
        const str = `Oh, and you're a millennial, ${firstName}`;
        console.log(str);
      }
    }

    printAge(); // You are Jonas, born in 1991, and are 46 years old.

    return age;
  }

  calcAge(1991);
}

//* Variable Environment: Hoisting and The TDZ

{
  // https://chatgpt.com/share/39a8193b-e6ef-4833-91b1-401f4bdca86c

  /*
  Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use variables and functions before their declarations in the code.
  */

  /*
  Summary:
    Hoisting:
    - `var`: Hoisted and initialized to `undefined`.
    - `let` and `const`: Hoisted but not initialized, leading to the TDZ.
    - Function Declarations: Fully hoisted.
    - Function Expressions and Arrow Functions: Not hoisted.

   Temporal Dead Zone (TDZ):
    - The Temporal Dead Zone (TDZ) is a term to describe the state where `let` and `const` declarations cannot be accessed before they are defined. The TDZ starts from the beginning of the block until the variable declaration is processed.
    - Accessing variables in the TDZ results in a `ReferenceError`.

   Why TDZ Matters:
    - Makes it easier to avoid and catch errors.
    - Accessing variables before declaration is bad practice and should be avoided.
  */

  console.log(a); // undefined
  var a = 5;
  console.log(a); // 5

  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 10;
  console.log(b); // 10

  console.log(c); // ReferenceError: Cannot access 'c' before initialization
  const c = 15;
  console.log(c); // 15

  console.log(sum(2, 3)); // 5

  function sum(x, y) {
    return x + y;
  }

  console.log(multiply(2, 3)); // TypeError: multiply is not a function

  var multiply = function (x, y) {
    return x * y;
  };

  /* 
  Adhering to best practices when dealing with variable environments, hoisting, and the Temporal Dead Zone (TDZ) can help you write clean, maintainable, and bug-free JavaScript code. Here are some best practices to follow:

    1. Prefer `let` and `const` over `var`
      - Use `const` by default
      - Use `let` when reassignment is needed
    2. Declare variables at the top of their scope
      - Declare all variables at the top of their scope to avoid confusion and reduce the chance of errors due to hoisting. 
    3. Initialize variables when you declare them
    4. Minimize global variables
    5. Use block scoping with `let` and `const`
    6. Be mindful of the Temporal Dead Zone (TDZ)
    7. Use function declarations for hoisting benefits
    8. Prefer `const` for function expressions and arrow functions
    9. Avoid inline variable declarations in loops
  */
}

//* Hoisting and TDZ in Practice

{
  console.log(me); // undefined
  // console.log(job); // ReferenceError: Cannot access 'job' before initialization
  // console.log(year); // ReferenceError: Cannot access 'year' before initialization

  var me = 'Jonas';
  let job = 'teacher';
  const year = 1991;

  // Function hoisting
  console.log(addDecl(2, 3)); // 5
  // console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization
  // console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization

  function addDecl(a, b) {
    return a + b;
  }

  const addExpr = function (a, b) {
    return a + b;
  };

  const addArrow = (a, b) => a + b;

  // ⚠️ Example (Avoiding pitfalls)
  if (!numProducts) deleteShoppingCart(); // `numProducts` is undefined, so condition is true

  var numProducts = 10;

  function deleteShoppingCart() {
    console.log('All products deleted!');
  }
}

//* The this Keyword

{
  /* 
  What is `this`?
    In JavaScript, the `this` keyword refers to an object.
    The `this` keyword refers to different objects depending on how it is used:

    1. In an object method, `this` refers to the object.
    2. Alone, `this` refers to the global object. (window in browsers, global in Node.js)
    3. In a function, `this` refers to the global object. (window in browsers, global in Node.js)
    4. In a function, in strict mode, `this` is `undefined`.
    5. In an event, `this` refers to the element that received the event.
    6. Methods like `call()`, `apply()`, and `bind()` can refer this to any object.

    (Note: Methods like call(), apply(), and bind() can explicitly set the value of this to any object you pass to them.)
  */

  // Example 1: In an object method
  const person = {
    name: 'Alice',
    greet: function () {
      console.log(this.name);
    },
  };
  person.greet(); // `this` refers to the person object, outputs: Alice

  // Example 2: Alone
  console.log(this); // `this` refers to the global object (window in browsers, global in Node.js)

  // Example 3: In a function
  function myFunction() {
    console.log(this);
  }
  myFunction(); // `this` refers to the global object (window in browsers, global in Node.js)

  // Example 4: In a function, in strict mode
  ('use strict');
  function myStrictFunction() {
    console.log(this);
  }
  myStrictFunction(); // `this` is undefined

  // Example 5: In a event handler
  <button onclick="this.style.backgroundColor">Click Me</button>;

  // Example 6: Using call(), apply(), and bind()
  const person1 = { name: 'Alice' };

  function greet() {
    console.log(this.name);
  }

  greet.call(person1); // `this` refers to person1, outputs: Alice
  greet.apply(person1); // `this` refers to person1, outputs: Alice

  const boundGreat = greet.bind(person1);
  boundGreat(); // `this` refers to person1, outputs: Alice
}

//* Regular Functions vs. Arrow Functions

{
  // https://chatgpt.com/share/8230e91a-e999-4b6c-925a-80c178ddbbbf
  // https://www.w3schools.com/js/js_this.asp

  // IMPORTANT: An arrow function inherits the `this` keyword from the parent scope.

  /* 
  Usage Considerations
  Regular Functions:
   - Preferred when `this` needs to refer to the object the method is called on.
   - Useful in object-oriented programming and when creating methods within objects or classes.

  Arrow Functions:
   - Preferred for non-method functions, especially for callbacks, array operations (e.g., map, filter, reduce), and when you need to maintain the context of `this` from the enclosing scope.
   - More concise and often used in functional programming patterns.
  */

  //  Syntax Differences

  // Regular Function
  function regularFunction(param1, param2) {
    return param1 + param2;
  }

  // Arrow Function
  const arrowFunction = (param1, param2) => param1 + param2;

  //* `this` Binding
  // One of the most significant differences between regular functions and arrow functions is how they handle the `this` keyword.

  // Regular Function:
  // - `this` refers to the object that called the function, which can change depending on the context.
  // - Useful for methods in objects.

  const obj = {
    value: 42,
    regularMethod: function () {
      console.log(this.value); // `this` refers to `obj`
    },
  };

  obj.regularMethod(); // Output: 42

  // Arrow Function:
  // - An arrow function inherits the `this` keyword from the parent scope.
  // - Never use an arrow function as a method.

  const obj2 = {
    value: 42,
    arrowMethod: () => {
      console.log(this.value); // 'this' refers to the global object, not 'obj2'
    },
  };

  obj2.arrowMethod(); // Output: undefined (in strict mode) or global value (in non-strict mode)
}

// Lecture Code
{
  const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
      console.log(this); // `this` refers to `jonas` object
      console.log(2037 - this.year); // 46

      // IMPORTANT: Scenario: We want to get `this` value inside a function (`isMillennial`) which is inside a method.

      // Solution 1
      // const self = this; // `this` refers to `jonas` object
      // const isMillennial = function () {
      //   console.log(this); // here `this` is undefined because `isMillennial()` is just a regular function call.
      //   console.log(self);
      //   console.log(self.year >= 1981 && self.year <= 1996);
      // };

      // ✅ Solution 2 (Modern Approach)
      // An arrow function inherits the `this` keyword from the parent scope. In this case, parent is calcAge method

      const isMillennial = () => {
        console.log(this); // `this` refers to `jonas` object
        console.log(this.year >= 1981 && this.year <= 1996);
      };
      isMillennial();
    },

    // ⚠️ Pitfall with arrow function
    // Never use an arrow function as a method
    greet: () => {
      console.log(this); // `this` refers to the global object (window in browsers, global in Node.js)
      console.log(`Hey ${this.firstName}`); // Hey undefined
    },
  };

  jonas.calcAge();

  //* `arguments` keyword

  // Regular Function:
  // - Have an `arguments` object that contains all arguments passed to the function.

  function regularFunction() {
    console.log(arguments); // Outputs the arguments passed to the function
  }

  regularFunction(1, 2, 3); // Output: [1, 2, 3]

  // Arrow Function:
  // - Do not have an `arguments` object. To achieve similar functionality, you can use rest parameters.

  const arrowFunction = (...args) => {
    console.log(args); // Outputs the arguments passed to the function
  };

  arrowFunction(1, 2, 3); // Output: [1, 2, 3]
}

//* Memory Management: Primitives vs. Objects

{
  /*
  IMPORTANT:
  - Primitives are immutable and compared by value. They are stored directly in the variable
  - Objects are mutable and compared by reference. They are stored as references in the variable
  */

  // Characteristics of Primitives
  // Immutability
  let x = 10;
  let y = x; // y is a copy of x
  y = 20;
  console.log(x); // 10 (x is not affected by changes to y)

  // Comparison
  let a = 5;
  let b = 5;
  console.log(a === b); // true

  // Characteristics of Objects
  // Mutability
  let person = { name: 'Alice' };
  person.name = 'Bob';
  console.log(person.name); // Bob

  // Stored by Reference
  let obj1 = { key: 'value' };
  let obj2 = obj1; // obj2 references the same object as obj1
  obj2.key = 'newValue';
  console.log(obj1.key); // newValue (obj1 is affected by changes to obj2)

  // Comparison
  let objA = { value: 10 };
  let objB = { value: 10 };
  let objC = objA;
  console.log(objA === objB); // false (different objects / different memory address)
  console.log(objA === objC); // true (same reference)
}

// Lecture Code

{
  // Understanding Object References

  const name = 'Jonas';
  const age = calcAge(1991);
  let newAge = age;
  newAge++;

  const location = {
    city: 'Faro',
    country: 'Portugal',
  };

  const newLocation = location; // Here, `location` & `newLocation` points to the same memory address. So, changing one will affect other.
  newLocation.city = 'Lisbon';

  console.log(location); // {city: 'Lisbon', country: 'Portugal'}

  function calcAge(birthYear) {
    const now = 2037;
    const x = now - birthYear;
    return x;
  }
}

//* Object References in Practice (Shallow vs. Deep Copies)

{
  // https://chatgpt.com/share/d1e093d8-c8ee-4cda-9c5e-d1ddae0b7523

  // To copy a nested object in JavaScript, you'll want to ensure that the copy is deep rather than shallow. A shallow copy will only copy the references to nested objects, meaning changes to the nested objects in the copied variable will affect the original object and vice versa. A deep copy, on the other hand, will create a completely new copy of the entire structure.

  // NOTE: To achieve a "deep copy with" the "spread operator", you would need to manually spread each level of the object. This approach is only feasible for objects with a known and fixed structure.

  const original = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
  };

  const deepCopy = {
    ...original,
    b: {
      ...original.b,
      d: {
        ...original.b.d,
      },
    },
  };

  // Modify the nested object in the copy
  deepCopy.b.d.e = 4;

  console.log(original.b.d.e); // Output: 3
  console.log(deepCopy.b.d.e); // Output: 4

  // ⚠️ This approach quickly becomes impractical for deeply nested objects or objects with an unknown structure.

  // ✅ For such cases, it's better to use one of the deep copy methods:
  // - Using `structuredClone()` function (Modern Approach)
  // - Using `JSON.parse()` and `JSON.stringify()` (suitable for JSON-serializable objects)
  // - Using a library like Immer or Lodash.

  {
    // ✅ Deep Copy: Using `structuredClone()` function
    const mushrooms = {
      amanita: ['mercari', 'verona'],
    };

    const mushroomsCopy = structuredClone(mushrooms);

    mushroomsCopy.amanita.push('pantheon');
    mushrooms.amanita.pop();

    console.log(mushroomsCopy.amanita); // ["mercari", "verona", "pantheon"]
    console.log(mushrooms.amanita); // ["mercari"]
  }

  {
    // Deep Copy: Using JSON.parse and JSON.stringify
    // - This method is simple but only works if your object is JSON-serializable (i.e., it doesn't contain functions, `undefined`, `NaN`, or other non-JSON data types).

    const original = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };

    const copy = JSON.parse(JSON.stringify(original));

    // Test
    copy.b.d.e = 4;
    console.log(original.b.d.e); // Output: 3
    console.log(copy.b.d.e); // Output: 4
  }
}

// Lecture Code

{
  const jessica1 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
  };

  // ⚠️ Problems with Reference Type
  // Here, `jessica1` & `marriedJessica` points to the same memory address. So, changing one will affect other.

  // const marriedJessica = jessica1;
  // marriedJessica.lastName = 'Davis';

  // Same problem in different situation
  function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
  }

  const marriedJessica = marryPerson(jessica1, 'Davis');

  console.log('Before:', jessica1); // {firstName: 'Jessica', lastName: 'Davis', age: 27}
  console.log('After:', marriedJessica); // {firstName: 'Jessica', lastName: 'Davis', age: 27}

  // ------------------------------****------------------------------

  // TODO: Copy of an Object
  const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
  };

  // Shallow Copy
  const jessicaShallowCopy = { ...jessica };

  //* Deep Copy using spread operator
  // ✅ To achieve a "deep copy with" the "spread operator", you would need to manually spread each level of the object. In JavaScript, an array is also an object.

  const jessicaDeepCopy = { ...jessica, family: [...jessica.family] };

  // jessicaDeepCopy.family.push('Mary');
  // jessicaDeepCopy.family.push('John');

  // console.log('Before:', jessica);
  // console.log('After:', jessicaDeepCopy);

  // Another way of Deep Copy/Clone
  const jessicaClone = structuredClone(jessica);

  // jessicaDeepCopy.family.push('Mary');
  // jessicaDeepCopy.family.push('John');

  // console.log('Before:', jessica);
  // console.log('After:', jessicaClone);
}

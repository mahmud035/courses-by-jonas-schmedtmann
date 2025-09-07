'use strict';

//* Lecture 3: Functions

{
  function logger() {
    console.log('My name is Jonas!');
  }

  // Calling/running/invoking the function
  logger();
  logger();

  function fruitProcessor(apples, oranges) {
    return `Juice with ${apples} apples and ${oranges} oranges.`;
  }

  // Using the function with arguments 5 and 0
  const appleJuice = fruitProcessor(5, 0);
  console.log(appleJuice);

  // Reusing the function with different inputs
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
}

//* Lecture 4: Function Declarations vs. Expressions

{
  // Function Declaration:
  function calcAge1(birthYear) {
    return 2037 - birthYear;
  }

  // Function Expression:
  const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
  };

  const age1 = calcAge1(1991); // 46
  const age2 = calcAge2(1991); // 46
  console.log(age1, age2); // Both produce the same result

  // NOTE: The main difference between them is that function declarations can be called before they're defined in the code (due to a process called hoisting), while function expressions cannot.
}

//* Lecture 5: Arrow Functions

{
  // Arrow function with one parameter and implicit return
  const calcAge3 = (birthYear) => 2037 - birthYear;
  const age3 = calcAge3(1991);
  console.log(age3);

  // Arrow function with multiple parameters and multiple lines of code
  const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement} years.`;
  };

  // NOTE: Key points about arrow functions:

  /* 
  - For one parameter and one-line body, you can omit parentheses      around parameters and curly braces
  - With a one-liner without curly braces, the return is implicit
  - For multiple parameters, you need parentheses: (param1, param2) => expression
  - For multiple lines of code, you need curly braces and an explicit return statement
  - Arrow functions don't have their own this keyword (important for more advanced JavaScript)
  */
}

//* Lecture 6: Functions Calling Other Functions

{
  // Function to cut fruit into pieces
  const cutFruitPieces = (fruit) => 4 * fruit;

  // Function that uses the cutFruitPieces function
  const fruitProcessor = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
  };

  // console.log(fruitProcessor(2, 3)); // Juice with 8 pieces of apple and 12 pieces of orange.
}

//* Lecture 7: Reviewing Functions

{
  const calcAge = (birthYear) => 2037 - birthYear;

  const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 60 - age;

    if (retirement >= 0) return `${firstName} retires in ${retirement} years!`;
    else return `${firstName} is already retired 🎉`;
  };

  console.log(yearsUntilRetirement(1991, 'Jonas'));
  console.log(yearsUntilRetirement(1950), 'Mike');

  // NOTE: Important points about functions:

  /*
  - Functions can call other functions (like `calcAge` inside `yearsUntilRetirement`)
  - Parameters are like local variables that only exist inside the function
  - Functions with the same parameter names don't interfere with each other
  - The return statement immediately exits the function - any code after it won't run
  - Functions can return different values based on conditions (like our retirement example)
  - Functions can be stored as values and accessed through the console
  */
}

//* Lecture 9: Introduction to Arrays

{
  // Instead of this:
  const friend1 = 'Michael';
  const friend2 = 'Steven';
  const friend3 = 'Peter';

  // We can use an array:
  const friends = ['Michael', 'Steven', 'Peter'];
  console.log(friends);

  // Accessing array elements (using zero-based indexing):
  console.log(friends[0]); // Michael
  console.log(friends[2]); // Peter

  // Getting the array length
  console.log(friends.length); // 3

  // Getting the last element
  console.log(friends.at(-1)); // Peter
  console.log(friends[friends.length - 1]); // Peter

  // Arrays can be mutated even when declared with `const`:
  friends[1] = 'Jay'; // Replace 'Steven' with 'Jay'
  console.log(friends); // ['Michael', 'Jay', 'Peter']

  // However, this would not work:
  // friends = ['Bob', 'Alice']; // Error! Cannot reassign const variable;

  // Arrays can hold values of different types:
  const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
  console.log(jonas);

  // Example of using arrays with functions:
  const calcAge = (birthYear) => 2037 - birthYear;

  const years = [1990, 1967, 2002, 2010, 2018];

  const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[2]),
    calcAge(years.at(-1)),
  ];
  console.log(ages); // [47, 70, 35, 19]
}

//* Lecture 10: Basic Array Operations (Methods)

{
  const friends = ['Michael', 'Steven', 'Peter'];

  // Adding elements:
  // Add to end
  friends.push('Jay');
  console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']

  // Add to beginning
  friends.unshift('John');
  console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']

  // Push and unshift both return the new array length:
  const newLength = friends.push('Andrew');
  console.log(newLength); // 6

  // Removing elements:
  // Remove from end
  const popped = friends.pop();
  console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']
  console.log(popped); // 'Andrew'

  // Remove from beginning
  const shifted = friends.shift();
  console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
  console.log(shifted); // 'John'

  // Finding elements:
  console.log(friends.indexOf('Steven')); // 1
  console.log(friends.indexOf('Bob')); // -1 (not found)

  // ES6 method - returns boolean
  console.log(friends.includes('Steven')); // true
  console.log(friends.includes('Bob')); // false

  // The `includes` method is useful for conditionals:
  if (friends.includes('Peter')) {
    console.log('You have a friend called Peter!');
  }
}

//* Lecture 12: Introduction to Objects
{
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
  };

  // console.log(
  //   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
  // );
}

//* Lecture 13: Dot vs. Bracket Notation

{
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
  };

  // There are two ways to access object properties:

  // Dot Notation:
  console.log(jonas.lastName); // 'Schmedtmann'

  // Bracket Notation:
  console.log(jonas['lastName']); // 'Schmedtmann'

  // The main difference is that bracket notation allows us to use expressions:
  const nameKey = 'Name';
  console.log(jonas[`first${nameKey}`]); // 'Jonas'
  console.log(jonas[`last${nameKey}`]); // 'Schmedtmann'

  // This would NOT work with dot notation:
  // console.log(jonas.'last' + nameKey); // Error

  // Bracket notation is useful when we don't know which property to access until runtime:
  const interestedIn = prompt(`What do you want to know about Jonas?`);

  if (jonas[interestedIn]) console.log(jonas[interestedIn]);
  else
    console.log(
      'Wrong request! Choose between firstName, lastName, age, job and friends.'
    );

  // We can also add new properties to objects using either notation:
  jonas.location = 'Portugal';
  jonas['twitter'] = '@jonasschmedtman';
  console.log(jonas); // Now has location and twitter properties
}

//* Lecture 14: Object Methods
{
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // Method (function as property)
    calcAge: function () {
      // 'this' refers to the current object (jonas)
      return 2037 - this.birthYear;
    },

    getSummary: function () {
      const summary = `${
        this.firstName
      } is a ${this.calcAge()}-year old teacher, and he has ${
        this?.hasDriversLicense ? 'a' : 'no'
      } driver's license.`;

      return summary;
    },
  };

  // console.log(jonas.calcAge());
  // console.log(jonas.getSummary());
}

//* Lecture 16: Iteration: The for Loop

{
  const birthYears = [1991, 2007, 1969, 2020];
  const ages = [];

  const calcAge = (birthYear) => {
    const now = new Date().getFullYear();
    return now - birthYear;
  };

  for (let i = 0; i < birthYears.length; i++) {
    ages[i] = calcAge(birthYears[i]);
  }

  // console.log({ ages });

  for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  }
}

//* Lecture 17: Looping Arrays, Breaking and Continuing

{
  const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
  ];
  const types = [];

  for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling types array
    types[i] = typeof jonasArray[i];
  }

  console.log(types); // ['string', 'string', 'number', 'string', 'object']

  // We can also use loops to transform one array into another:
  const years = [1991, 2007, 1969, 2020];
  const ages = [];

  for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
  }
  console.log(ages); // [46, 30, 68, 17]

  // `continue` and `break` statements:

  // The continue statement skips the current iteration and continues with the next one:
  for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i]);
  }

  // The break statement completely terminates the loop:
  for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i]);
  }
}

//* Lecture 18: Looping Backwards and Loops in Loops

{
  const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
  ];

  // Looping backwards through an array:
  for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
  }

  // Nested loops (a loop inside another loop):
  for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----- Starting exercise ${exercise} ------`);
    for (let rep = 1; rep <= 5; rep++) {
      console.log(`Exercise ${exercise}: Lifting weights repetition
${rep}
`);
    }
  }
}

//* Lecture 19: The while Loop

{
  let rep = 1;
  while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
  }

  // The while loop is particularly useful when you don't know in advance how many iterations you need:

  let dice = Math.trunc(Math.random() * 6) + 1;

  while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
  }

  // In this example, we keep rolling a die until we get a 6. Since we can't predict when we'll roll a 6, a while loop is more appropriate than a for loop.

  // NOTE: Key differences between for and while loops:
  /*
  - Use `for` when you know the exact number of iterations
  - Use `while` when you don't know how many iterations will be needed
  - The while loop is more flexible but requires manual setup of the  counter (if needed)
  */
}

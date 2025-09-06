'use strict';

//* Lecture 2: Hello World!

console.log('Hello World!');

const javascript = 'amazing';
if (javascript === 'amazing') console.log(`Let's learn JavaScript!`);

// We can also do math
40 + 8 + 23 - 10; // 61

// Store results in variables
const totalHours = 40 + 8 + 23 - 10;
console.log(totalHours); // 61

//* Lecture 5: Values and Variables

// Values
console.log('Jonas'); // String value
console.log(23); // Number value
console.log(23 + 7); // Expression creating a new value (30)

// Storing values in variables
const userName = 'Jonas';
console.log(userName);
console.log(userName);

/*
When naming variables, follow these rules:
 - Use camelCase (first word lowercase, subsequent words capitalized)
 - Names can contain letters, numbers, underscores, or $ signs
 - Cannot start with a number
 - Cannot use reserved JavaScript keywords
 - Variable names should be descriptive
*/

// Valid variable names
let _age = 26;
let $name = 'Jonas';
let myFirstJob = 'Programmer'; // Descriptive - good!

// Invalid variable names
// let 3years = 3; // Cannot start with a number
// let jonas& matilda = 'JM'; // No special characters like &
// let new = 27; // Cannot use reserved keyword

// Less descriptive - avoid
let job1 = 'Programmer';
let job2 = 'Teacher';

//* Lecture 6: Data Types

// Different data types
let javascriptIsFun = true; // Boolean
console.log(typeof javascriptIsFun); // "boolean"
console.log(typeof 23); // "number"
console.log(typeof 'Jonas'); // "string"

// Dynamic typing in action - type can change
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); // Now "string"

// Undefined type
let year; // Value is undefined
console.log(year); // undefined
console.log(typeof year); // "undefined

// Later define the variable
year = 1991;
console.log(typeof year); // Now "number"

// NOTE: typeof null returns "object" - this is a known JavaScript bug!
console.log(typeof null); // "object" (should be "null")

//* Lecture 7: Let, Const, and Var

// 1. `let` - for variables that can change (mutable)
let age = 30;
age = 31; // Reassigning is allowed

let name; // Can declare without initializing

// 2. `const` - for variables that shouldn't change (immutable)
const birthYear = 1991;
// birthYear = 1990; // Error: Assignment to constant variable
// const job; // Error: Missing initializer in const declaration

// 3. `var` - old way of defining variables (avoid using)
var job = 'Programmer';
job = 'Teacher'; // Can be reassigned like let

//* Lecture 8: Basic Operators

// Math operators
const now = 2037;
const ageJonas = now - 1991; // 46
const ageSarah = now - 2018; // 19
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2); // 92
console.log(ageJonas / 10); // 4.6
console.log(2 ** 3); // 2³ = 8 (Exponentiation)

// Concatenation with + operator
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(`${firstName} ${lastName}`); // "Jonas Schmedtmann"

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x); // 100

// Comparison operators (return boolean values)
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true
console.log(now - 1991 > now - 2018); // true

//* Lecture 9: Operator Precedence

{
  const now = 2037;
  const ageJonas = now - 1991;
  const ageSarah = now - 2018;

  // Math before comparison
  console.log(now - 1991 > now - 2018); // 46 > 19, so true

  // Left-to-right execution for same-precedence operators
  console.log(25 - 10 - 5); // (25 - 10) - 5 = 10

  // Right-to-left for assignment
  let x, y;
  x = y = 25 - 10 - 5; // x = y = 10, so x = 10, y = 10
  console.log(x, y);

  // Grouping with parentheses (highest precedence)
  const averageAge = (ageJonas + ageSarah) / 2;
  console.log(averageAge); // (46 + 19) / 2 = 32.5
}

//* Lecture 11: Strings and Template Literals

{
  const firstName = 'Jonas';
  const job = 'teacher';
  const birthYear = 1991;
  const year = 2037;

  // Old way (string concatenation)
  const jonasOld =
    "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
  console.log(jonasOld);

  // New way (template literals)
  const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old
${job}!`;
  console.log(jonasNew);

  // Template literals also work for regular strings
  console.log(`Just a regular string!`);

  // Multi-line strings with template literals
  console.log(`String with
multiple
lines`);

  // Old way of multi-line strings (less clean)
  console.log(
    'String with \n\
multiple \n\
lines'
  );
}

//* Lecture 12: Taking Decisions: if/else Statements

{
  const age = 19;

  // If/else conditional statement
  if (age >= 18) console.log('Sarah can start driving license 🚗');
  else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years ⏳
`);
  }

  // Creating variables conditionally
  const birthYear = 1991;
  let century;

  if (birthYear <= 2000) century = 20;
  else century = 21;

  console.log(century);
}

//* Lecture 14: Type Conversion and Coercion

{
  // Type Conversion (explicit)
  const inputYear = '1991';
  console.log(Number(inputYear) + 18); // 2009

  // Conversion examples
  console.log(Number('Jonas')); // NaN (Not a Number)
  console.log(String(23)); // "23"

  // Type Coercion (automatic)
  console.log('I am ' + 23 + ' years old'); // String concatenation
  // The + operator triggers coercion to string

  console.log('23' - '10' - 3); // 10
  console.log('23' * '2'); // 46
  console.log('23' > '18'); // true
  // Other operators trigger coercion to number

  // Mixed coercion example
  let n = '1' + 1; // '11' (string)
  n = n - 1; // 10 (number)
  console.log(n);

  /*
  Key points:
  - The + operator converts numbers to strings when used with a string
  - The -, *, /, >, < operators convert strings to numbers
  - Understanding coercion helps you write cleaner code and avoid unexpected bugs
  */
}

//* Lecture 15: Truthy and Falsy Values

{
  console.log(Boolean(0)); // false
  console.log(Boolean('')); // false
  console.log(Boolean(undefined)); // false
  console.log(Boolean('Jonas')); // true
  console.log(Boolean({})); // true

  // In practice, conversion to boolean happens implicitly
  // For example, in conditions:
  const money = 0;

  if (money) console.log("Don't spend it all!");
  else {
    console.log('You should get a job!'); // This executes because 0 is falsy;
  }

  // Be careful with 0
  let height;
  if (height) console.log('Height is defined');
  else console.log('Height is UNDEFINED'); // This executes because height is undefined
}

//* Lecture 16: Equality Operators: == vs. ===

{
  const age = 18;

  // Strict equality (===) - NO type coercion
  console.log(age === 18); // true
  console.log('18' === 18); // false

  // Loose equality (==) - WITH type coercion
  console.log(age == 18); // true
  console.log('18' == 18); // true

  // Practical example
  const favorite = Number(prompt("What's your favorite number?"));

  if (favorite === 23) console.log('Cool! 23 is an amazing number!');
  else if (favorite === 7) console.log('7 is also a cool number');
  else console.log('Number is not 23 or 7');

  // Inequality operators
  const notEqual = favorite !== 23;
  console.log(notEqual);

  // NOTE: As a best practice, always use strict equality (===) to avoid unexpected type coercion bugs. If you need to compare values of different types, convert them explicitly before comparison.
}

//* Lecture 18: Logical Operators

{
  const hasDriversLicense = true; // A
  const hasGoodVision = true; // B
  const isTired = false; // C

  // AND operator
  console.log(hasDriversLicense && hasGoodVision); // true

  // OR operator
  console.log(hasDriversLicense || hasGoodVision); // true

  // NOT operator
  console.log(!hasDriversLicense); // false

  // Practical example
  const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

  if (shouldDrive) console.log('Sarah is able to drive!');
  else console.log('Someone else should drive...');

  // Complex conditions
  console.log(hasDriversLicense && hasGoodVision && !isTired); // true
}

//* Lecture 20: The Switch Statement

{
  const day = 'monday';

  switch (day) {
    case 'monday': // day === 'monday'
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break; // Without break, code would continue to next case

    case 'tuesday':
      console.log('Prepare theory videos');
      break;

    case 'wednesday':
    case 'thursday': // Same code for both days
      console.log('Write code examples');
      break;

    case 'friday':
      console.log('Record videos');
      break;

    case 'saturday':
    case 'sunday':
      console.log('Enjoy the weekend :D');
      break;

    default: // Like 'else' - runs if no case matches
      console.log('Not a valid day!');
  }

  // Equivalent if/else structure
  if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
  } else if (day === 'tuesday') {
    console.log('Prepare theory videos');
  } else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
  } else if (day === 'friday') {
    console.log('Record videos');
  } else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
  } else {
    console.log('Not a valid day!');
  }
}

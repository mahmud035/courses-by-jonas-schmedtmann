'use strict';

//* Simple Array Methods

/* 
const arr = ['a', 'b', 'c', 'd', 'e'];

// slice (keep the original array unchanged)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// splice (mutate original array)
console.log(arr.splice(-1));
console.log(arr);

// toSpliced (keep the original array unchanged)
const months = ['Jan', 'Feb', 'Mar', 'Apr'];
console.log(months.toSpliced(0, 1));
console.log(months);

// reverse (mutate original array)
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// toReversed (keep the original array unchanged)
const arr3 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr3.toReversed());
console.log(arr3);

// concat (keep the original array unchanged)
const myGirls = ['Cecilie', 'Lone'];
const myBoys = ['Emil', 'Tobias', 'Linus'];
const mySiblings = ['Alice', 'Bob'];

const myChildren = myGirls.concat(myBoys, mySiblings);
console.log(myChildren);
console.log([...myGirls, ...myBoys, ...mySiblings]); // Using Spread Operator

// join (joins all array elements into a string)
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits.join(' - '));
 */

//* The new at Method

/* 
// at
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Get the third element of fruits using at():
console.log(fruits.at(2));

// Get the third element of fruits using []:
console.log(fruits[2]);

// The at() method returns an indexed element from an array.
// The at() method returns the same as [].

const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// getting last array element
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64
console.log(arr.at(-1)); // 64
 */

//* Looping Arrays: forEach

/* 
// Basic Iteration:
const array = [1, 2, 3, 4, 5];

array.forEach((element) => {
  console.log(element);
});

// Using Index:
const array2 = ['a', 'b', 'c'];

array2.forEach((element, index) => {
  console.log(`Element at index ${index} is ${element}`);
});

// Practical Example: Summing Array Elements
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach((element) => {
  sum += element;
});

console.log(`Sum:`, sum);

// Practical Example: Modifying Elements
const array3 = [1, 2, 3, 4, 5];
const newArray = [];

array3.forEach((element) => {
  newArray.push(element * 2);
});

console.log(newArray); // [2, 4, 6, 8, 10]
*/

/*
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('=== Using for of loop ===');

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('=== Using forEach method ===');

movements.forEach((movement, index, array) => {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
 */

//* forEach With Maps and Sets

/* 
// Using forEach with Maps
const myMap = new Map();

myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

console.log(myMap);
// Output:

// new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2'],
//   ['key3', 'value3'],
// ]);

myMap.forEach((value, key, map) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

// Using forEach with Sets
const mySet = new Set();

mySet.add('value1');
mySet.add('value2');
mySet.add('value3');

console.log(mySet);
// new Set(['value1', 'value2', 'value3']);

mySet.forEach((value, valueAgain, set) => {
  console.log(`Value: ${value}`);
}); 
*/

/* 
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'EUR', 'GBP']);

currenciesUnique.forEach((value, valueAgain, set) => {
  console.log(`Value: ${value}`);
});
*/

//* The map Method

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements.map((movement) => movement * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

const movementsDescriptions = movements.map((movement, index) => {
  return `You ${movement > 0 ? 'deposit' : 'withdrew'} ${Math.abs(movement)}`;
});

console.log(movementsDescriptions);

movementsDescriptions.map((description) => console.log(description)); 
*/

//* The filter Method

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((movement) => movement > 0);
const withdrawals = movements.filter((movement) => movement < 0);

console.log(deposits);
console.log(withdrawals); 
*/

//* The reduce Method

/* 
// 1. sums all the numbers in an array
const numbers = [1, 2, 3, 4, 5];

const initialValue = 0;

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);

console.log(sum); // Output: 15

// Additional Examples

// 2. Finding the Maximum Value in an Array
const max = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, -Infinity);

console.log(max); // Output: 5

// Another way to find the Maximum Value in an Array
const max2 = Math.max(...numbers);
console.log(max2); // Output: 5

// 3. Flattening an Array of Arrays
const arrayOfArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenedArray = arrayOfArrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// Another way of Flattening an Array of Arrays
const flattenedArray2 = arrayOfArrays.flat(1);
console.log(flattenedArray2); // Output: [1, 2, 3, 4, 5, 6]
*/

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const initialValue = 0;

// Sum
const balance = movements.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);

console.log(balance);

// Maximum value
const max = movements.reduce((accumulator, currentMovement) => {
  return Math.max(accumulator, currentMovement);
}, -Infinity);

console.log(max); // 3000 
*/

//* The Magic of Chaining Methods

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const initialValue = 0;
const eurToUsd = 1.1;

// PIPELINE: Chaining Methods
const totalDepositInUSD = Number(
  movements
    .filter((movement) => movement > 0) // take all deposit
    .map((deposit) => deposit * eurToUsd) // convert deposit from euro to dollar
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, initialValue)
    .toFixed(2)
);

console.log(totalDepositInUSD); // Output: 5522
 */

//* The find Method

/*
 // Ex: 1
const array = [5, 12, 8, 130, 44];

const found = array.find((element) => element > 10);

console.log(found); // 12

// Ex: 2
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 },
];

const result = inventory.find((item) => item.name === 'cherries');

console.log(result);
// { name: 'cherries', quantity: 5 }
 */

/* 
// Ex: 1
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((movement) => movement < 0);
const firstWithdrawalIndex = movements.findIndex((movement) => movement < 0);

console.log(firstWithdrawal);
console.log(firstWithdrawalIndex);

// Ex: 2
const accounts2 = [
  {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  },
  {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
  {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  },
  {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  },
];

const result = accounts2.find((account) => account.owner === 'Jessica Davis');

console.log(result);
 */

//* The findIndex Method

/*
const array = [5, 12, 8, 130, 44];

const index = array.findIndex((element) => element > 13);

console.log(index); // Output: 3

// In this example, findIndex finds the index of the first element in the array that is greater than 13. The first element that satisfies this condition is 130, which is at index 3.

// Practical Usage
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Mike' },
];

const index2 = users.findIndex((user) => user.id == 2);

console.log(index2); // Output: 1

// Example: Finding an Object by a Property
const users2 = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Mike', age: 35 },
];

// Find the index of the user with the name 'Jane'
const index3 = users2.findIndex((user) => user.name === 'Jane');

console.log(index3); // Output: 1

// Example: Using findIndex with Optional Parameters
const index4 = array.findIndex((element, index, array) => {
  console.log(`Checking element: ${element}, at index: ${index}`);
  return element > 10;
});

console.log(index4); // Output: 1 (and logs for each element check)

// Example: Complex Conditions
const products = [
  { name: 'Laptop', price: 1000, available: true },
  { name: 'Phone', price: 500, available: false },
  { name: 'Tablet', price: 700, available: true },
];

// Find the index of the first available product costing more than $600
const index5 = products.findIndex(
  (product) => product.available && product.price > 600
);

console.log(index5); // Output: 0 (the Laptop)

// Example: Error Handling with findIndex
const numbers = [1, 2, 3, 4, 5];

const index6 = numbers.findIndex((number) => number > 10);

if (index6 === -1) {
  console.log('No elements match the condition.');
} else {
  console.log(`First matching element index: ${index6}`);
}
// Output: No elements match the condition.

// Comparison with indexOf
const array2 = [5, 12, 8, 130, 44];

// Using indexOf
console.log(array2.indexOf(12)); // Output: 1
console.log(array2.indexOf(100)); // Output: -1

// Using findIndex
console.log(array2.findIndex((element) => element > 100)); // Output: 3
console.log(array2.findIndex((element) => element === 100)); // Output: -1

// Example: Using findIndex with Strings
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// Find the index of the first fruit with more than 5 characters
const index7 = fruits.findIndex((fruit) => fruit.length > 5);

console.log(index7); // Output: 1 (banana)

// Example: Using findIndex in a Function
const cars = [
  { brand: 'Toyota', model: 'Corolla', year: 2020 },
  { brand: 'Honda', model: 'Civic', year: 2019 },
  { brand: 'Ford', model: 'Mustang', year: 2021 },
];

const findCarByModel = (cars, model) => {
  return cars.findIndex((car) => car.model === model);
};

console.log(findCarByModel(cars, 'Civic')); // Output: 1
console.log(findCarByModel(cars, 'Model S')); // Output: -1 
*/

//* some and every method

/* 
const array = [1, 2, 3, 4, 5];

const hasEvenNumber = array.some((element) => element % 2 === 0);
console.log(hasEvenNumber); // Output: true

const allLessThanTen = array.every((element) => element < 10);
console.log(allLessThanTen); // Output: true

const allEvenNumbers = array.every((element) => element % 2 === 0);
console.log(allEvenNumbers); // Output: false
 */

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
const anyDeposits = movements.some((movement) => movement > 0);
console.log(anyDeposits);
 */

//* flat and flatMap method

/* 
let arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); // [1, 2, 3, 4]

let arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(arr2.flat(2)); // [1, 2, 3, 4, 5, 6]; 
*/

/* 
// flat
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

console.log(arrDeep.flat()); // [[1, 2], 3, 4, [5, 6], 7, 8]
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

const accounts2 = [
  {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  },
  {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
  {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  },
  {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  },
];

// Practical Example: Calculate the overallBalance of all the movements of all the accounts

// (flat)
const overallBalance = accounts2
  .map((account) => account.movements)
  .flat()
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

console.log(overallBalance); // 17840

// (flatMap)
const overallBalance2 = accounts2
  .flatMap((account) => account.movements)
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

console.log(overallBalance2); // 17840
 */

//* Sorting Arrays

/* 
// 1. Sorting Numbers using Compare function
const numbers = [4, 2, 5, 1, 3];

// Ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// 2. Sorting Strings
const fruits = ['banana', 'apple', 'cherry', 'date'];

// Ascending order
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// Descending order
// fruits.sort((a, b) => b.localeCompare(a));
fruits.sort().reverse();
console.log(fruits); // Output: ['date', 'cherry', 'banana', 'apple']

// 3. Custom Sorting
const items = [
  { name: 'apple', quantity: 2 },
  { name: 'banana', quantity: 5 },
  { name: 'cherry', quantity: 3 },
];

// Sort by quantity in ascending order
items.sort((a, b) => a.quantity - b.quantity);
console.log(items);

// Output:
// [
//   { name: 'apple', quantity: 2 },
//   { name: 'cherry', quantity: 3 },
//   { name: 'banana', quantity: 5 }
// ]

// Sort by name in alphabetical order
items.sort((a, b) => a.name.localeCompare(b.name));
console.log(items);

// Output:
// [
//   { name: 'apple', quantity: 2 },
//   { name: 'banana', quantity: 5 },
//   { name: 'cherry', quantity: 3 }
// ]
 */

/* 
// 1. Sorting Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Ascending order
movements.sort((a, b) => a - b);
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

// Descending order
movements.sort((a, b) => b - a);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

// 2. Sorting Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// Ascending order
owners.sort();
console.log(owners); // ['Adam', 'Jonas', 'Martha', 'Zach']

// Descending order
owners.sort().reverse();
console.log(owners); // ['Zach', 'Martha', 'Jonas', 'Adam']
*/

//* Dynamically Creating and Filling Arrays

// https://chatgpt.com/share/dc6d9ddf-c1ee-4694-86b5-1df176f1b3af

// In JavaScript, you can dynamically create and fill arrays using a variety of methods. Here are a few common techniques:

/* 
// 1. Using a Loop: You can use a for loop to fill an array with values dynamically.
let array = [];
for (let i = 0; i < 10; i++) {
  array.push(i);
}
console.log(array); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 2. Using Array.from(): Array.from() can create an array from any iterable object, including array-like objects. It can also take a mapping function as a second argument.

const array2 = Array.from({ length: 10 }, (_, i) => i);
console.log(array2); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 3. Using Array.map(): You can create an array with a certain length and then use map to fill it.

const array3 = new Array(10).fill(null).map((_, i) => i);
console.log(array3); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 4. Using Array.fill(): You can create an array and fill it with the same value using fill.

const array4 = new Array(10).fill(0);
console.log(array4); // Output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// 5. Using Spread Operator with Array.keys(): The spread operator can be used in combination with Array.keys() to create arrays with dynamic values.

const array5 = [...Array(10).keys()];
console.log(array5); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 6. Using reduce(): You can also use reduce to build an array.

const array6 = Array(10)
  .fill()
  .reduce((acc, _, i) => {
    acc.push(i);
    return acc;
  }, []);

console.log(array6); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

/* 
// Empty arrays + fill method
const array = new Array(7).fill(0);
console.log(array); // Output: [0, 0, 0, 0, 0, 0, 0]

// Array.from
const array2 = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(array2); // Output: [1, 2, 3, 4, 5, 6, 7]

// Task: Create an array with 100 random dice rolls.
const diceRolls = Array.from(
  { length: 100 },
  (_, i) => Math.floor(Math.random() * 6) + 1
);
console.log(diceRolls);
 */

//* Array Methods Practice

/* 
const accounts2 = [
  {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  },
  {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
  {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  },
  {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  },
];

// Task 1: Calculate how much has been deposited in total in the bank.
const bankDepositSum = accounts2
  .map((account) => account.movements)
  .flat(1)
  .filter((movement) => movement > 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(bankDepositSum); // 25180

// Task 2: Count how many deposits there have been in the bank with at least $1000.
const numDeposits1000 = accounts2
  .flatMap((account) => account.movements)
  .filter((movement) => movement >= 1000).length;

console.log(numDeposits1000); // 6

// Using reduce method
const numDeposits1000Reduce = accounts2
  .flatMap((account) => account.movements)
  .reduce((accumulator, currentMovement, currentIndex, array) => {
    // console.log(array);
    return currentMovement >= 1000 ? accumulator + 1 : accumulator;
  }, 0);

console.log(numDeposits1000Reduce); // 6

// Task 3: Create an object which contains the sum of deposits and sum of the withdrawals.
const sums = accounts2
  .flatMap((account) => account.movements)
  .reduce(
    (accumulator, currentMovement) => {
      // console.log(accumulator);
      currentMovement > 0
        ? (accumulator.deposits += currentMovement)
        : (accumulator.withdrawals += Math.abs(currentMovement));

      return accumulator;
    },
    // NOTE: Initial sums object which will be used as accumulator's initial value
    {
      deposits: 0,
      withdrawals: 0,
    }
  );

console.log(sums); // {deposits: 25180, withdrawals: 7340}

// Task 4: Create a simple function to convert any string to a title case. (title case basically means that all the words in a sentence are capitalized except some exceptions => the word that should NOT be capitalized 👇)

// Sample: this is a nice title => This Is a Nice Title

const convertTitleCase = (title) => {
  const capitalize = (str) => str.at(0).toUpperCase() + str.slice(1);

  const exceptionList = [
    'a',
    'an',
    'the',
    'and',
    'but',
    'or',
    'nor',
    'for',
    'yet',
    'so',
    'at',
    'by',
    'for',
    'in',
    'of',
    'off',
    'on',
    'out',
    'to',
    'up',
    'with',
  ];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map((word) => (exceptionList.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title')); // This Is a Nice Title
console.log(convertTitleCase('this is a LONG title but not too long')); // This Is a Long Title but Not Too Long
console.log(convertTitleCase('and here is another title with an EXAMPLE')); // And Here Is Another Title with an Example
 */

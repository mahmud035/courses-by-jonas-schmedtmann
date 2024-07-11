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

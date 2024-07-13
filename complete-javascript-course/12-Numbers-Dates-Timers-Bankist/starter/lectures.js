'use strict';

//* Converting and Checking Numbers

// IMPORTANT: Number.isFinite() method is the best way of checking if a value is a number. A real number, not a string.

/* 
The Number.isFinite() method in JavaScript is used to determine whether a given value is a finite number. This method returns true if the value is a finite number, and false otherwise. Number.isFinite() does not convert the value to a number before checking if it's finite.
*/

/* 
console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite('42')); // false (not converted to a number)
console.log(Number.isFinite(true)); // false (not converted to a number)
console.log(Number.isFinite(null)); // false (not converted to a number)
 */

//* Math and Rounding

/* 
console.log(Math.PI);
console.log(Math.sqrt(25));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

// NOTE: A Proper Random Function
// This JavaScript function always returns a random number between min (included) and max (excluded):
const getRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

// console.log(getRandomInteger(4, 10));
// console.log(getRandomInteger(20, 30));

// This JavaScript function always returns a random number between min and max (both included):
const getRandomInteger2 = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(getRandomInteger2(1, 6)); // dice roll
// console.log(getRandomInteger2(20, 30));

// Rounding integers
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.5)); // 5
console.log(Math.floor(4.5)); // 4

// Rounding decimals (useful when working with money)
console.log((2.7).toFixed(2)); // 2.70 as string
console.log((2.3421).toFixed(2)); // 2.34 as string
console.log((2.7).toPrecision(3)); // 2.70 as string
 */

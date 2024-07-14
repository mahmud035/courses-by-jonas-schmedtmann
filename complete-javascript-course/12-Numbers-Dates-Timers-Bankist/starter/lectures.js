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

//* The Remainder Operator

/*
 console.log(5 % 2); // 1
console.log(8 % 3); // 2

console.log(6 % 2); // 0
console.log(7 % 2); // 1

const isEven = (num) => num % 2 === 0;

console.log(isEven(6)); // true
console.log(isEven(7)); // false

const isOdd = (num) => num % 2 === 1;

console.log(isOdd(7)); // true
console.log(isOdd(10)); // false
 */

//* Numeric Separators

/* 
const diameter = 2_87_46_00_00_000;
console.log(diameter);

const price = 34_599;
console.log(price);
 */

//* Creating Dates

/* 
// Create a date
// const now = new Date();
// console.log(now);

// console.log(new Date('Jul 13 2024 14:37:52'));
// console.log(new Date('2019-11-18T21:31:17.178Z'));

// console.log(new Date(0)); // milliseconds
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // milliseconds

// Working with dates
const future = new Date(2037, 10, 19, 8, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // milliseconds

console.log(new Date(2142210180000));

console.log(Date.now()); 
*/

//* Operations With Dates

/* 
const future = new Date(2037, 10, 19, 8, 23);
console.log(future.getTime()); // milliseconds
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1); // 10 days
 */

//* Internationalizing Numbers (Intl)

/* 
const num = 3884764.23;

console.log('US:      ', new Intl.NumberFormat('en-US').format(num));
console.log('BD:      ', new Intl.NumberFormat('bn-BD').format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE').format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY').format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);
 */

//* Implementing a Countdown Timer

/* 
let timeoutId;

const startLogoutTimer = () => {
  // Set time to 1 minutes
  let time = 1 * 60; // seconds

  // Clear any existing interval
  if (timeoutId) {
    clearInterval(timeoutId);
  }

  const tick = () => {
    const minutes = String(Math.trunc(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');

    // In each call, print the remaining time to UI
    console.log(`Time left: ${minutes}:${seconds}`);
    console.log('time', time);

    // When 0 seconds, stop timer and logout user
    if (time === 0) {
      clearInterval(timeoutId);
      console.log('logout');
    }

    // Decrees 1s
    time--;
  };

  // Call the timer every second
  tick();
  timeoutId = setInterval(tick, 1000);
};

startLogoutTimer();
 */

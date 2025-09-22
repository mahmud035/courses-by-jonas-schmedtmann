'use strict';

//* Converting and Checking Numbers

/* 
{
  // https://chatgpt.com/share/2466d3c4-e346-4e7e-9c1b-9979fa2b41c9
  // 👁️ Lecture Article Tab

  // IMPORTANT: Number.isFinite() method is the best way of checking if a value is a number. A real number, not a string.

  // The Number.isFinite() method in JavaScript is used to determine whether a given value is a finite number. This method returns true if the value is a finite number, and false otherwise. Number.isFinite() does not convert the value to a number before checking if it's finite.

  console.log(Number.isFinite(42)); // true
  console.log(Number.isFinite(-Infinity)); // false
  console.log(Number.isFinite(Infinity)); // false
  console.log(Number.isFinite(NaN)); // false
  console.log(Number.isFinite('42')); // false (not converted to a number)
  console.log(Number.isFinite(true)); // false (not converted to a number)
  console.log(Number.isFinite(null)); // false (not converted to a number)
}
 */

//* Math and Rounding

/* 
{
  // https://www.w3schools.com/js/js_math.asp
  // 👁️ Lecture Article Tab

  console.log(Math.PI);
  console.log(Math.sqrt(25)); // 5

  console.log(Math.max(5, 18, 23, 11, 2)); // 23
  console.log(Math.max(5, 18, '23', 11, 2)); // 23 (string is converted to number)
  console.log(Math.max(5, 18, '23px', 11, 2)); // NaN (string is not converted to number)

  console.log(Math.min(5, 18, 23, 11, 2)); // 2
  console.log(Math.random()); // random number between 0 and 1 (excluded)

  // NOTE: A Proper Random Function
  // This JavaScript function always returns a random number between min (included) and max (excluded):
  const getRandomInteger = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

  console.log(getRandomInteger(4, 10));
  console.log(getRandomInteger(20, 30));

  // This JavaScript function always returns a random number between min and max (both included):
  const getRandomInteger2 = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(getRandomInteger2(1, 6)); // dice roll
  console.log(getRandomInteger2(20, 30));

  // Rounding integers
  console.log(Math.round(4.4)); // 4
  console.log(Math.round(4.5)); // 5
  console.log(Math.ceil(4.5)); // 5
  console.log(Math.floor(4.5)); // 4
  console.log(Math.trunc(4.9)); // 4
  Math.trunc(-23.3); // -23
  Math.floor(-23.3); // -24

  // Rounding decimals (useful when working with Money)
  console.log((2.7).toFixed(2)); // 2.70 as string
  console.log((2.3421).toFixed(2)); // 2.34 as string
  console.log((2.7).toPrecision(3)); // 2.70 as string
}
 */

//* The Remainder Operator

/* 
{
  // https://chatgpt.com/share/74e4be05-dda8-4869-9ad2-8a083daa22b0

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
}
 */

//* Numeric Separators

/* 
{
  // https://chatgpt.com/share/f9adcb0e-e58b-4b36-8fd8-019a9b6b9b79

  // Integer Literals
  const diameter = 2_87_46_00_00_000;
  console.log(diameter); // 287460000000

  const price = 34_599;
  console.log(price); // 34599

  // Floating-Point Literals
  let floatNumber = 1_234.567_890;
  console.log(floatNumber); // 1234.56789
}
 */

//* Working with BigInt

{
  // 🧠 MUST READ https://claude.ai/share/ad9f7cca-ff8f-4025-897a-fed20b15758a

  // BigInt is JavaScript's solution to the fundamental limitation of the Number type, which can only safely represent integers up to Number.MAX_SAFE_INTEGER (2^53 - 1, or 9,007,199,254,740,991). Beyond that, you start losing precision and getting unexpected results.

  // Creating BigInt Values
  // You've got two primary ways to create BigInts:

  // Using the 'n' suffix (most common)
  const bigNum1 = 123456789012345678901234567890n;

  // Using the BigInt() constructor
  const bigNum2 = BigInt('123456789012345678901234567890');
  const bigNum3 = BigInt(123); // From regular number

  // From hex, binary, octal
  const hexBig = BigInt('0x1fffffffffffff');
  const binBig = BigInt(
    '0b111111111111111111111111111111111111111111111111111111'
  );

  // Key Operations
  // BigInts support all the standard arithmetic operations, but here's the critical part: you cannot mix BigInt and Number types directly:

  const big = 123n;
  const regular = 456;

  // This will throw a TypeError
  // const result = big + regular; // ❌ Error!

  // You must convert explicitly
  const result1 = big + BigInt(regular); // ✅ 579n
  const result2 = Number(big) + regular; // ✅ 579 (but loses precision if big is too large)

  // Practical Operations
  const a = 123456789012345678901234567890n;
  const b = 987654321098765432109876543210n;

  // Arithmetic works as expected
  console.log(a + b); // 1111111110111111111011111111100n
  console.log(a * b); // Very large result
  console.log(a / b); // 0n (integer division, no decimals)
  console.log(a % b); // Remainder

  // Comparison works intuitively
  console.log(a > b); // false
  console.log(a === 123456789012345678901234567890n); // true

  // But be careful with type coercion
  console.log(123n == 123); // true (loose equality)
  console.log(123n === 123); // false (strict equality)

  // The bottom line: BigInt solves real precision problems in JavaScript, but it requires disciplined type management. When you're dealing with large integers from APIs, databases, or crypto operations, it's often your only reliable option. Just remember to handle the type conversions explicitly and be aware of the performance implications.
}

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

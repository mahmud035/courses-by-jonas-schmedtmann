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

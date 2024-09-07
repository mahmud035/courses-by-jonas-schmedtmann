'use strict';

/* const a = 'Jonas';
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
  console.log(d + c + b + a);
}
 */

const firstName = 'Jonas';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    // console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = `New Output`;

      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // add(2, 3);
    }

    // console.log(output);
  }

  printAge();
  return age;
}

calcAge(1991);

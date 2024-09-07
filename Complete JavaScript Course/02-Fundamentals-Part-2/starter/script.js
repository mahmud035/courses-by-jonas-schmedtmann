'use strict';

{
  const cutFruitPieces = (fruit) => {
    return 4 * fruit;
  };

  const fruitProcessor = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const juicePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${juicePieces} pieces of orange.`;
    return juice;
  };

  // console.log(fruitProcessor(2, 3));
}

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

{
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
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
}

// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Micheal', 'Peter', 'Steven'],
// ];

// Looping Backwards
// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i]);
// }

// Nested loop
// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`=== Starting exercise: ${exercise} ===`);
//   for (let repetition = 1; repetition <= 5; repetition++) {
//     console.log(`Repetition no: ${repetition}`);
//   }
// }

//* Roll a dice
// let dice;

// while (dice !== 6) {
//   dice = Math.floor(Math.random() * 6) + 1; // Roll a dice from 1 to 6
//   console.log(`You rolled a: ${dice}`);

//   if (dice === 6) {
//     console.log(`Loop is about to end...`);
//   }
// }

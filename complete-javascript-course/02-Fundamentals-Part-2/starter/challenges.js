'use strict';

// Challenge #1

/* const calcAverage = (score1, score2, score3) => {
  const averageScore = (score1 + score2 + score3) / 3;
  return averageScore;
};

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

console.log({ scoreDolphins, scoreKoalas });

const checkWinner = (avgDolphins, avgKoalas) => {
  const winner =
    avgDolphins >= avgKoalas * 2
      ? `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
      : avgKoalas >= avgDolphins * 2
      ? `Koalas win (${avgKoalas} vs. ${avgDolphins})`
      : `No team wins...`;

  console.log(winner);
};

checkWinner(scoreDolphins, scoreKoalas); */

// Challenge #2

/* const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals); */

// Challenge #3

/* const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height); // assign a new property called "bmi"
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height); // assign a new property called "bmi"
    return this.bmi;
  },
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

// console.log({ markBMI, johnBMI });

if (johnBMI > markBMI) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s (${mark.calcBMI()})!`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s (${john.calcBMI()})!`
  );
}
 */

// Challenge #4

/* const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}

// console.log(tips);
// console.log(totals);

const calcAverage = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  
  const average = sum / arr.length;
  return average;
};

console.log(`Average value: ${calcAverage(totals)}`); */

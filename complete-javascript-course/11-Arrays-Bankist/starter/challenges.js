'use strict';

//* Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* 
const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaCopy = [...dogsJulia];
  const dogsJuliaCorrected = dogsJuliaCopy.slice(1, -2);
  const dogsAges = [...dogsJuliaCorrected, ...dogsKate];

  console.log(dogsAges);

  dogsAges.forEach((dogAge, index) => {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]); 
*/

//* Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* 
const calcAverageHumanAge = (ages) => {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAges.filter((dogHumanAge) => dogHumanAge >= 18);

  const totalAge = adults.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const averageAge = totalAge / adults.length;

  // console.log(humanAges, adults, totalAge, averageAge);

  return averageAge;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1); // 44
console.log(avg2); // 47.33
*/

//* Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// PIPELINE: Chaining Methods

/* 
const calcAverageHumanAge = (ages) => {
  const averageAge = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((dogHumanAge) => dogHumanAge >= 18)
    .reduce((accumulator, currentAge, currentIndex, array) => {
      // console.log(array);
      return accumulator + currentAge / array.length;
    }, 0);

  return averageAge;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1); // 44
console.log(avg2); // 47.33 
*/

//* Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

/* 
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

// Solution: 1
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach((dog) => {
  dog.recommendedFood = parseInt(dog.weight ** 0.75 * 28);
  console.log(dog);
});

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

// Solution: 2
const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));

const message = `Sarah's dog is eating too ${
  dogSarah.curFood > dogSarah.recommendedFood ? `Much` : `Little`
}`;
console.log(message);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

// Solution: 3
//* Using filter method
// const ownersEatTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recommendedFood)
//   .map((dog) => dog.owners)
//   .flat();

// const ownersEatTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recommendedFood)
//   .map((dog) => dog.owners)
//   .flat();

// NOTE: Using reduce method
const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
  (accumulator, currentDog) => {
    currentDog.curFood > currentDog.recommendedFood
      ? accumulator.ownersEatTooMuch.push(...currentDog.owners)
      : accumulator.ownersEatTooLittle.push(...currentDog.owners);

    return accumulator;
  },
  // NOTE: Initial object which will be used as accumulator's initial value
  {
    ownersEatTooMuch: [],
    ownersEatTooLittle: [],
  }
);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// Solution: 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

// Solution: 5
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

// Solution: 6
console.log(
  dogs.some(
    (dog) =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

// Solution: 7
const dogsEatingOkayAmount = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(dogsEatingOkayAmount);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

// Solution: 8
const dogsSorted = dogs
  .slice() // copy the dogs array
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
 */

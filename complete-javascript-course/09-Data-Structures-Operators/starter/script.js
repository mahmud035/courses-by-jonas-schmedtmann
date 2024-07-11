'use strict';

/* //* Destructuring Object & Array
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 10, // Open 24 hours
      close: 24,
    },
  },
};


const {
  name,
  categories: [Italian, , Vegetarian] = [],
  mainMenu: [, pasta] = [],
  openingHours: {
    thu: { open: thuOpen = 0 } = {},
    fri: { close: friClose = 0 } = {},
    sat: { open: satOpen = 0 } = {},
  } = {},
} = restaurant || {};

// console.log(Italian, Vegetarian, pasta);
console.log(friClose, satOpen); */

//* Sets
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.

/* 
//* Find the unique elements of an array and put them inside a new array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // ['Waiter', 'Chef', 'Manager']

// Counting how many unique characters are in a string
console.log(new Set('mahamudulHasanPavel').size); // 12 
*/

//* Here’s a complete example demonstrating the use of a Set:

/* const mySet = new Set([1, 2, 3, 4, 5]);

mySet.add(6);
mySet.add(6); // Duplicate values are ignored

console.log(mySet.has(3)); // true
console.log(mySet.has(10)); // false

mySet.delete(3);

console.log(mySet.size); // 5

mySet.forEach((element) => {
  console.log(element); // 1, 2, 4, 5, 6
});

mySet.clear();

console.log(mySet); */

// Working with Sets
// IMPORTANT: Sets are particularly useful when you need to ensure that a collection of values remains unique. Here are some common operations you might perform with sets:

// Union
// Combining two sets:

/* const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log(union); // Set { 1, 2, 3, 4, 5 } */

// Intersection
// Finding common elements between two sets:

/* const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const intersection = new Set([...setA].filter((element) => setB.has(element)));
console.log(intersection); // Set { 3 } */

// Difference
// Finding elements in one set that are not in another:

/* const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const difference = new Set([...setA].filter((element) => !setB.has(element)));
console.log(difference); // Set { 1, 2 } 
*/

//* Maps

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

//* Here's a complete example demonstrating the basics of using a Map:

/* 
const myMap = new Map();

// Adding key-value pairs
myMap.set('name', 'Alice');
myMap.set(1, 'one');
myMap.set(true, 'boolean value');

// Accessing values
console.log(myMap.get('name')); // 'Alice'
console.log(myMap.get(1)); // 'one'
console.log(myMap.get(true)); // 'boolean value'

// Checking for keys
console.log(myMap.has('name')); // true
console.log(myMap.has('age')); // false

// Removing a key-value pair
myMap.delete('name');
console.log(myMap.has('name')); // false

// Getting the size
console.log(myMap.size); // 2

//* Iterating over a Map

// You can iterate over a Map using several methods:

// keys method: Returns an iterator for the keys in the Map.
// values method: Returns an iterator for the values in the Map.
// entries method: Returns an iterator for the [key, value] pairs in the Map.
// forEach method: Executes a provided function once for each value-key pair.

// Using for...of
for (const [key, value] of myMap) {
  console.log(key, value);
}

// Using for...of with keys
for (const key of myMap.keys()) {
  console.log(key);
}

// Using for...of with values
for (const value of myMap.values()) {
  console.log(value);
}

// Using for...of with entries
for (const [key, value] of myMap.entries()) {
  console.log(key, value);
}

// Using forEach
myMap.forEach((value, key) => {
  console.log(key, value);
});

console.log(myMap); 
*/

/* const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [4, 'Python'],
  [true, 'Correct 🏆'],
  [false, 'Try again!'],
]);

// console.log(question);

const keys = question.keys();
const values = question.values();
const entries = question.entries();

// Using for...of
for (const [key, value] of question) {
  console.log(key, value);
}

// Using for...of with keys
for (const key of keys) {
  console.log(key);
}

// Using for...of with values
for (const value of values) {
  console.log(value);
}

// Using for...of with entries
for (const [key, value] of entries) {
  console.log(key, value);
}

// Using forEach
question.forEach((value, key) => {
  console.log(key, value);
}); 
*/

// NOTE: Being able to use objects as keys is an important Map feature.

/* // Create a Map
const fruits = new Map();

// Create Objects
const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

// Remember: The key is an object (apples), not a string ("apples"):

// Accessing values
console.log(fruits.get(apples)); // 500

console.log(fruits); 
*/

//* String - PART-1
/* const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane.at(0));
console.log(plane.charAt(0));
console.log(plane.charCodeAt(0));

console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, 3));
console.log(airline.slice(0, airline.indexOf(' '))); // dynamically set end index
console.log(airline.slice(airline.lastIndexOf(' '))); //dynamically set start index

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = (seat) => {
  // B and E are middle seats
  const seatLetter = seat.slice(-1); // return: B or C or E

  if (seatLetter === 'B' || seatLetter === 'E') {
    console.log(`You got the middle seat 😍`);
  } else {
    console.log(`You got lucky 😎`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E'); 
*/

//* String - PART-2
/* const airline = 'TAP Air Portugal';

console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
console.log(airline.toLowerCase()); // tap air portugal

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas (required)
const firstCharacter = passenger.slice(0, 1).toUpperCase();
const remainingCharacter = passenger.slice(1).toLowerCase();
const passengerCorrect = `${firstCharacter}${remainingCharacter}`;

console.log(passengerCorrect); // Jonas

// Comparing email
const email = 'hello@jonas.io'; // email stored in database
const loginEmail = '   Hello@Jonas.Io  \n'; // input email
const correctLoginEmail = loginEmail.toLowerCase().trim();
console.log(email === correctLoginEmail); // true

// replacing
const priceGB = '288,98£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS); // 288.98$

const announcement = `All passengers come to bording door 23. Bording door 23!`;

console.log(announcement.replace(/door/g, 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'A320neo';
console.log(plane.includes('A32')); // true
console.log(plane.includes('A37')); // false
console.log(plane.startsWith('A')); // true
console.log(plane.startsWith('H')); // false
console.log(plane.endsWith('o')); // true
console.log(plane.endsWith('7')); // false

// Practice Exercise
const checkBaggage = (items) => {
  const baggage = items.toLowerCase(); // IMPORTANT

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are NOT allowed on board ⛔`);
  } else {
    console.log(`Welcome aboard! ✈`);
  }
};

checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`I have some Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);
 */

//* String - PART-3
/* 
// split and join
console.log(`a+very+nice+string`.split('+'));
console.log(`Jonas Schmedtmann`.split(' '));

const [firstName, lastName] = `Jonas Schmedtmann`.split(' ');
console.log(firstName, lastName);

// const fullName = `Mr. ${firstName} ${lastName.toUpperCase()}`;
const fullName2 = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

// console.log(fullName);
console.log(fullName2);

const capitalizeName = (nameStr) => {
  const names = nameStr.split(' ');
  const namesCapitalize = [];

  for (const name of names) {
    // solution: 1
    namesCapitalize.push(
      name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
    );

    // solution: 2
    // namesCapitalize.push(
    //   name.at(0).toUpperCase() + name.slice(1).toLowerCase()
    // );

    // solution: 3
    // namesCapitalize.push(name.replace(name.at(0), name.at(0).toUpperCase()));
  }

  console.log(namesCapitalize.join(' '));
};

capitalizeName(`jessica ann smith davis`);
capitalizeName(`jonas schmedtmann`);
capitalizeName(`mahamudul hasan pavel`);
capitalizeName(`sanjida akter akhi`);

// Padding
const message = `Go to gate 23!`;
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// Practical Example
const maskCreditCard = (number) => {
  const str = number.toString();
  const lastFourChar = str.slice(-4);
  return lastFourChar.padStart(str.length, '*');
};

console.log(maskCreditCard(12345678));
console.log(maskCreditCard(4148506473));
console.log(maskCreditCard('34129868123'));

// Repeat
const message2 = `Bad weather... All Departure Delayed... `;
console.log(message2.repeat(4));

const planesInLine = (numberOfPlanes) => {
  console.log(
    `There ara ${numberOfPlanes} planes in line ${'✈'.repeat(numberOfPlanes)}`
  );
};

planesInLine(2);
planesInLine(5);
planesInLine(10);
 */

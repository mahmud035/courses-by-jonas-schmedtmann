'use strict';

//* Destructuring Array & Object

{
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

  console.log(name, Italian, Vegetarian, pasta);
  console.log(friClose, satOpen, thuOpen);
}

//* The Spread Operator (...)

{
  // The spread operator (`...`) in JavaScript is a powerful feature that allows you to expand elements in an iterable (like an array or string) or properties in an object. Here are some common uses of the spread operator:

  // 1. Copying Arrays
  const originalArray = [1, 2, 3];
  const copiedArray = [...originalArray];
  console.log(copiedArray); // Output: [1, 2, 3]

  // 2. Merging Arrays
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const mergedArray = [...array1, ...array2];
  console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

  // 3. Spreading Elements in Function Calls (IMPORTANT)
  function sum(a, b, c) {
    return a + b + c;
  }
  const numbers = [1, 2, 3];
  console.log(sum(...numbers)); // Output: 6

  // 4. Copying Objects
  const originalObject = { a: 1, b: 2 };
  const copiedObject = { ...originalObject };
  console.log(copiedObject); // Output: { a: 1, b: 2 }

  // 5. Merging Objects
  const object1 = { a: 1, b: 2 };
  const object2 = { c: 3, d: 4 };
  const mergedObject = { ...object1, ...object2 };
  console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

  // 6. Adding New Properties to an Object
  const newObject = { ...originalObject, c: 3 };
  console.log(newObject); // Output: { a: 1, b: 2, c: 3 }

  // 7. Handling Immutable Updates (IMPORTANT)
  const state = { a: 1, b: 2 };
  const newState = { ...state, b: 3 };
  console.log(newState); // Output: { a: 1, b: 3 }

  // 8. Combining with Rest Parameters
  function myFunction(x, y, ...rest) {
    console.log(x, y, rest);
  }
  myFunction(1, 2, 3, 4, 5); // Output: 1 2 [3, 4, 5]
}

//* Rest Pattern and Parameters

{
  // https://chatgpt.com/share/0bd899dd-c8ea-4260-bee2-fcb0cbeb1bcc

  // In JavaScript, the rest parameter syntax allows us to represent an indefinite number of arguments as an array. This can be used in function parameters, array destructuring, and object destructuring. Here's a detailed look at how the rest parameter works in these different contexts:

  // 1. Rest Parameters in Functions
  // Rest parameters allow a function to accept an indefinite number of arguments as an array.

  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }

  console.log(sum(1, 2, 3)); // 6
  console.log(sum(1, 2, 3, 4, 5)); // 15

  // In this example, the `...numbers` syntax allows the function to take any number of arguments and treats them as an array named numbers.

  // 2. Rest Parameters in Array Destructuring
  // Rest parameters can be used in array destructuring to collect the remaining elements into a new array.

  const [first, second, ...rest] = [1, 2, 3, 4, 5];

  console.log(first); // 1
  console.log(second); // 2
  console.log(rest); // [3, 4, 5]

  // Here, first gets the first element, second gets the second element, and rest gets the remaining elements as an array.

  // 3. Rest Parameters in Object Destructuring
  // Rest parameters can also be used in object destructuring to collect the remaining properties into a new object.

  const { a, b, ...rests } = { a: 1, b: 2, c: 3, d: 4 };

  console.log(a); // 1
  console.log(b); // 2
  console.log(rests); // {c: 3, d: 4}

  // In this example, a and b get their respective values from the object, and rest is a new object containing the remaining properties.

  /*
  Summary
    - Functions: Use rest parameters to accept any number of arguments as an array.
    - Arrays: Use rest parameters in destructuring to collect the remaining elements into a new array.
    - Objects: Use rest parameters in destructuring to collect the remaining properties into a new object.

    These capabilities make the rest parameter a powerful and flexible tool in JavaScript for handling collections of data.
  */

  // Examples
  // Functions with Rest Parameters
  function greet(greeting, ...names) {
    return `${greeting} ${names.join(', ')}`;
  }

  console.log(greet('Hello', 'Alice', 'Bob', 'Charlie')); // Output: "Hello Alice, Bob, Charlie"

  // Array Destructuring with Rest Operator
  const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
  const [firstFruit, secondFruit, ...otherFruits] = fruits;

  console.log(firstFruit); // Output: "apple"
  console.log(secondFruit); // Output: "banana"
  console.log(otherFruits); // Output: ["cherry", "date", "fig"]

  // Object Destructuring with Rest Operator
  const user = { id: 1, name: 'Alice', age: 25, city: 'Wonderland' };
  const { id, name, ...details } = user;

  console.log(id); // Output: 1
  console.log(name); // Output: "Alice"
  console.log(details); // Output: { age: 25, city: "Wonderland" }
}

//* Short Circuiting (&& and ||)

{
  // https://chatgpt.com/share/b5a17f5d-b8d2-4e9e-b932-afde3ad7fbb4
}

//* The Nullish Coalescing Operator (??)

{
  // https://chatgpt.com/share/74d1fad9-21a8-475f-bc62-b8ff5b42b0c7
}

//* Logical Assignment Operators

{
  // https://chatgpt.com/share/2a667239-d97e-4453-9c4a-30337df0cd56
  // https://www.w3schools.com/js/js_assignment.asp
}

//* Looping Arrays: The for-of Loop

{
  // https://chatgpt.com/share/5030ad39-ae64-4934-9c36-db7ec4261360
  // https://www.w3schools.com/js/js_loop_forof.asp
}

//* Enhanced Object Literals

{
  // https://chatgpt.com/share/3fdd6167-e0db-44b8-9813-1ca938cd5bb7
}

//* Optional Chaining (?.)

{
  // https://chatgpt.com/share/29a2fafc-f025-4461-9d60-1a9adc310075
}

//* Looping Objects: Object Keys, Values, and Entries

{
  // https://chatgpt.com/share/12b343b8-4d7a-4270-b296-7bf8bfbd31ab
}

//* Sets

{
  // https://chatgpt.com/share/68c60af4-e968-800f-9e15-983207db1e2f

  // 👉 Set Methods: https://www.w3schools.com/js/js_set_methods.asp
  // 👉 Set Logic: https://www.w3schools.com/js/js_set_logic.asp#mark_set_union

  // A JavaScript Set is a collection of unique values.
  // Each value can only occur once in a Set.
  // The values can be of any type, primitive values or objects.

  const emptySet = new Set();
  const numSet = new Set([1, 2, 3, 4]);
  const strSet = new Set('hello');

  console.log(strSet); // Set(4) { 'h', 'e', 'l', 'o' }

  const mySet = new Set();

  mySet.add(10);
  mySet.add(20).add(30); // chaining possible
  console.log(mySet); // Set(3) {10, 20, 30}

  mySet.delete(20);
  console.log(mySet); // Set(2) {10, 30}

  console.log(mySet.has(10)); // true
  console.log(mySet.has(40)); // false

  mySet.clear();
  console.log(mySet); // Set(0) {}

  const set1 = new Set([1, 2, 3]);
  console.log(set1.size); // 3

  // Use Cases of Sets

  //* Removing Duplicates from an Array
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = [...new Set(numbers)];
  console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  const staffUnique = [...new Set(staff)];
  console.log(staffUnique); // ['Waiter', 'Chef', 'Manager']

  // Counting how many unique characters are in a string
  console.log(new Set('mahamudulHasanPavel').size); // 12
}

//* New Operations to Make Sets Useful!

{
  // 👉 Set Logic: https://www.w3schools.com/js/js_set_logic.asp#mark_set_union

  const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
  ]);

  const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
  ]);

  // Union
  const italianMexicanFusion = italianFoods.union(mexicanFoods);
  console.log('Union:', italianMexicanFusion);

  // Intersection
  const commonFoods = italianFoods.intersection(mexicanFoods);
  console.log('Intersection:', commonFoods);
  console.log([...commonFoods]);

  // Differences
  const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
  console.log('Difference italian:', uniqueItalianFoods);

  const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
  console.log('Difference mexican:', uniqueMexicanFoods);

  // Symmetric Difference
  const uniqueItalianAndMexicanFoods =
    italianFoods.symmetricDifference(mexicanFoods);
  console.log('Symmetric Difference:', uniqueItalianAndMexicanFoods);

  // isDisjointFrom()
  console.log(italianFoods.isDisjointFrom(mexicanFoods)); // false
}

//* Maps: Fundamentals

{
  // A Map holds key-value pairs where the keys can be any datatype.
  // A Map remembers the original insertion order of the keys.

  //* Here's a complete example demonstrating the basics of using a Map:

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
}

//* Maps: Iteration

{
  // You can iterate over a Map using several methods:

  // `keys` method: Returns an iterator for the keys in the Map.
  // `values` method: Returns an iterator for the values in the Map.
  // `entries` method: Returns an iterator for the [key, value] pairs in the Map.
  // `forEach` method: Executes a provided function once for each value-key pair.

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

  // Another Example
  const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    [4, 'Python'],
    [true, 'Correct 🏆'],
    [false, 'Try again!'],
  ]);

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

  // From w3school
  // NOTE: Being able to use objects as keys is an important Map feature.

  // Create a Map
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
}

//* String - PART-1

{
  // W3schools - Strings

  // https://www.w3schools.com/js/js_strings.asp

  // https://www.w3schools.com/js/js_string_methods.asp

  // https://www.w3schools.com/js/js_string_search.asp

  // https://www.w3schools.com/js/js_string_templates.asp

  const airline = 'TAP Air Portugal';
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
  console.log(airline.slice(airline.lastIndexOf(' '))); // dynamically set start index

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
}

//* String - PART-2

{
  const airline = 'TAP Air Portugal';

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
}

//* String - PART-3

{
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
}

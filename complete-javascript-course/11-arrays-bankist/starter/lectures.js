'use strict';

//* Simple Array Methods

/* 
{
  const arr = ['a', 'b', 'c', 'd', 'e'];

  // slice (keep the original array unchanged)
  console.log(arr.slice(2)); // ['c', 'd', 'e']
  console.log(arr.slice(2, 4)); // ['c', 'd']
  console.log(arr.slice(-2)); // ['d', 'e']
  console.log(arr.slice(-1)); // ['e']
  console.log(arr.slice(1, -2)); // ['b', 'c']
  console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
  console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

  // splice (mutate original array)
  console.log(arr.splice(-1)); // ['e']
  console.log(arr); // ['a', 'b', 'c', 'd']

  // toSpliced (keep the original array unchanged)
  const months = ['Jan', 'Feb', 'Mar', 'Apr'];
  console.log(months.toSpliced(0, 1)); // ['Feb', 'Mar', 'Apr'];
  console.log(months); // ['Jan', 'Feb', 'Mar', 'Apr']

  // reverse (mutate original array)
  const arr2 = ['j', 'i', 'h', 'g', 'f'];
  console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
  console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

  // toReversed (keep the original array unchanged)
  const arr3 = ['j', 'i', 'h', 'g', 'f'];
  console.log(arr3.toReversed()); // ['f', 'g', 'h', 'i', 'j']
  console.log(arr3); // ['j', 'i', 'h', 'g', 'f']

  // concat (keep the original array unchanged)
  const myGirls = ['Cecilie', 'Lone'];
  const myBoys = ['Emil', 'Tobias', 'Linus'];
  const mySiblings = ['Alice', 'Bob'];

  const myChildren = myGirls.concat(myBoys, mySiblings);
  console.log(myChildren); // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Alice', 'Bob']

  console.log([...myGirls, ...myBoys, ...mySiblings]); // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Alice', 'Bob']

  // join (joins all array elements into a string)
  const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  console.log(fruits.join(' - ')); // Banana - Orange - Apple - Mango
}
*/

//* The new `at` Method

/* 
{
  // NOTE:
  // The at() method accept negative index.
  // The at() method returns the same as [].

  const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

  // Get the third element of fruits using at():
  console.log(fruits.at(2)); // Apple

  // Get the third element of fruits using []:
  console.log(fruits[2]); // Apple

  const arr = [23, 11, 64];

  console.log(arr.at(0)); // 23
  console.log(arr[0]); // 23

  // getting last array element
  console.log(arr.at(-1)); // 64
  console.log(arr[arr.length - 1]); // 64
  console.log(arr.slice(-1)[0]); // 64
}
 */

//* Looping Arrays: `forEach`

/* 
{
  // https://chatgpt.com/share/b0c08966-2310-45be-b3b3-1f8259ea5513
  // https://www.w3schools.com/js/js_array_iteration.asp#mark_foreach

  // Basic Iteration:
  const array = [1, 2, 3, 4, 5];

  array.forEach((element) => {
    console.log(element);
  });

  // Using Index:
  const array2 = ['a', 'b', 'c'];

  array2.forEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
  });

  // Practical Example: Summing Array Elements
  const numbers = [1, 2, 3, 4, 5];
  let sum = 0;

  numbers.forEach((element) => {
    sum += element;
  });

  console.log(`Sum:`, sum);

  // Practical Example: Modifying Elements
  const array3 = [1, 2, 3, 4, 5];
  const newArray = [];

  array3.forEach((element) => {
    newArray.push(element * 2);
  });

  console.log(newArray); // [2, 4, 6, 8, 10]
}
 */

// Lecture Code

/* 
{
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  console.log('=== Using for of loop ===');

  for (const movement of movements) {
    if (movement > 0) console.log(`You deposited ${movement}`);
    else console.log(`You withdrew ${Math.abs(movement)}`);
  }

  console.log('=== Using forEach method ===');

  movements.forEach((movement, index, array) => {
    if (movement > 0) console.log(`You deposited ${movement}`);
    else console.log(`You withdrew ${Math.abs(movement)}`);
  });
}
 */

//* forEach With Maps and Sets

/* 
{
  // https://chatgpt.com/share/ed25184a-127a-4f76-9aa4-81cc2c11ea32
  // https://www.w3schools.com/js/js_sets.asp
  // https://www.w3schools.com/js/js_maps.asp

  // Using `forEach` with Maps
  // Maps in JavaScript are collections of key-value pairs. The forEach method for Maps takes a callback function that has three parameters: the value, the key, and the Map itself.
  const myMap = new Map();

  myMap.set('key1', 'value1');
  myMap.set('key2', 'value2');
  myMap.set('key3', 'value3');

  console.log(myMap);
  // Output:
  // new Map([
  //   ['key1', 'value1'],
  //   ['key2', 'value2'],
  //   ['key3', 'value3'],
  // ]);

  myMap.forEach((value, key, map) => {
    console.log(`Key: ${key}, Value: ${value}`);
  });

  // Using `forEach` with Sets
  // Sets are collections of unique values. The forEach method for Sets takes a callback function that has three parameters: the value, the same value again (since there are no keys in Sets), and the Set itself.
  const mySet = new Set();

  mySet.add('value1');
  mySet.add('value2');
  mySet.add('value3');

  console.log(mySet); // Output: new Set(['value1', 'value2', 'value3']);

  mySet.forEach((value, valueAgain, set) => {
    console.log(`Value: ${value}`);
  });
}
 */

// Lecture Code

/* 
{
  // Map
  const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

  currencies.forEach((value, key, map) => {
    console.log(`Key: ${key}, Value: ${value}`);
  });

  // Set
  const currenciesUnique = new Set(['USD', 'EUR', 'GBP']);

  currenciesUnique.forEach((value, valueAgain, set) => {
    console.log(`Value: ${value}`);
  });
}
 */

//* The `map` Method

// Lecture Code:

/* 
{
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  const eurToUsd = 1.1;
  const movementsUSD = movements.map((movement) => movement * eurToUsd);

  // console.log(movements);
  // console.log(movementsUSD);

  const movementsDescriptions = movements.map((movement, index) => {
    return `You ${movement > 0 ? 'deposit' : 'withdrew'} ${Math.abs(movement)}`;
  });

  console.log(movementsDescriptions);

  movementsDescriptions.map((description) => console.log(description));
}
 */

//* The `filter` Method

/* 
{
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const deposits = movements.filter((movement) => movement > 0);
  const withdrawals = movements.filter((movement) => movement < 0);

  console.log(deposits); // [200, 450, 3000, 70, 1300];
  console.log(withdrawals); // [-400, -650, -130]
}
 */

//* The `reduce` Method

/* 
{
  // https://chatgpt.com/share/1d36e057-fbbf-4381-82fd-bffdf9fa71d5

  // The `reduce` method in JavaScript is a powerful tool used to reduce an array to a single value by applying a callback function against an accumulator and each element in the array. This method is particularly useful for operations like summing all elements, finding the maximum/minimum value, or transforming data structures.

  // 1. sums all the numbers in an array
  const numbers = [1, 2, 3, 4, 5];

  const initialValue = 0;

  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, initialValue);

  console.log(sum); // Output: 15

  // Additional Examples

  // 2. Finding the Maximum Value in an Array
  const max = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
  }, -Infinity);

  console.log(max); // Output: 5

  // Another way to find the Maximum Value in an Array
  const max2 = Math.max(...numbers);
  console.log(max2); // Output: 5

  // 3. Flattening an Array of Arrays
  const arrayOfArrays = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  const flattenedArray = arrayOfArrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, []);

  console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

  // Another way of Flattening an Array of Arrays
  const flattenedArray2 = arrayOfArrays.flat(1);
  console.log(flattenedArray2); // Output: [1, 2, 3, 4, 5, 6]
}
 */

// Lecture Code:

/* 
{
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  const initialValue = 0;

  // Sum
  const balance = movements.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  console.log(balance); // 3840

  // Maximum value
  const max = Math.max(...movements);
  console.log(max); // 3000
}
 */

//* The Magic of Chaining Methods

/* 
{
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  const initialValue = 0;
  const eurToUsd = 1.1;

  // PIPELINE: Chaining Methods
  const totalDepositInUSD = Number(
    movements
      .filter((movement) => movement > 0) // take all deposit
      .map((deposit) => deposit * eurToUsd) // convert deposit from euro to dollar
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      )
      .toFixed(2)
  );

  console.log(totalDepositInUSD); // Output: 5522
}
 */

//* The `find` Method

/* 
{
  // https://chatgpt.com/share/224c4bda-9c63-4894-a1e8-242deb5fd198

  // The `find` method in JavaScript is used to find the first element in an array that satisfies a provided testing function. If no elements satisfy the testing function, it returns undefined.

  // Ex: 1
  const array = [5, 12, 8, 130, 44];

  const found = array.find((element) => element > 10);

  console.log(found); // 12

  // Ex: 2
  const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
  ];

  const result = inventory.find((item) => item.name === 'cherries');

  console.log(result); // { name: 'cherries', quantity: 5 }
}
 */

// Lecture Code

/* 
{
  // Ex: 1
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const firstWithdrawal = movements.find((movement) => movement < 0);
  const firstWithdrawalIndex = movements.findIndex((movement) => movement < 0);

  console.log(firstWithdrawal); // -400
  console.log(firstWithdrawalIndex); // 2

  // Ex: 2
  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2, // %
      pin: 1111,
    },
    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: 2222,
    },
    {
      owner: 'Steven Thomas Williams',
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      interestRate: 0.7,
      pin: 3333,
    },
    {
      owner: 'Sarah Smith',
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
      pin: 4444,
    },
  ];

  const result = accounts.find((account) => account.owner === 'Jessica Davis');

  console.log(result); // {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222}
}
 */

//* The `findIndex` Method

/* 
{
  // https://chatgpt.com/share/76350aaa-4f04-4372-b81a-7a704a5f636d

  // The `findIndex` method in JavaScript is used to find the index of the first element in an array that satisfies a provided testing function. If no elements satisfy the testing function, it returns `-1`.

  const array = [5, 12, 8, 130, 44];

  const index = array.findIndex((element) => element > 13);

  console.log(index); // Output: 3

  // In this example, findIndex finds the index of the first element in the array that is greater than 13. The first element that satisfies this condition is 130, which is at index 3.

  // Practical Usage
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Mike' },
  ];

  const index2 = users.findIndex((user) => user.id == 2);

  console.log(index2); // Output: 1

  // Example: Finding an Object by a Property
  const users2 = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Mike', age: 35 },
  ];

  // Find the index of the user with the name 'Jane'
  const index3 = users2.findIndex((user) => user.name === 'Jane');

  console.log(index3); // Output: 1

  // Example: Using findIndex with Optional Parameters
  const index4 = array.findIndex((element, index, array) => {
    console.log(`Checking element: ${element}, at index: ${index}`);
    return element > 10;
  });

  console.log(index4); // Output: 1 (and logs for each element check)

  // Example: Complex Conditions
  const products = [
    { name: 'Laptop', price: 1000, available: true },
    { name: 'Phone', price: 500, available: false },
    { name: 'Tablet', price: 700, available: true },
  ];

  // Find the index of the first available product costing more than $600
  const index5 = products.findIndex(
    (product) => product.available && product.price > 600
  );

  console.log(index5); // Output: 0 (the Laptop)

  // Example: Error Handling with findIndex
  const numbers = [1, 2, 3, 4, 5];

  const index6 = numbers.findIndex((number) => number > 10);

  if (index6 === -1) {
    console.log('No elements match the condition.');
  } else {
    console.log(`First matching element index: ${index6}`);
  }
  // Output: No elements match the condition.

  // Comparison with indexOf
  const array2 = [5, 12, 8, 130, 44];

  // Using indexOf
  console.log(array2.indexOf(12)); // Output: 1
  console.log(array2.indexOf(100)); // Output: -1

  // Using findIndex
  console.log(array2.findIndex((element) => element > 100)); // Output: 3
  console.log(array2.findIndex((element) => element === 100)); // Output: -1

  // Example: Using findIndex with Strings
  const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

  // Find the index of the first fruit with more than 5 characters
  const index7 = fruits.findIndex((fruit) => fruit.length > 5);

  console.log(index7); // Output: 1 (banana)

  // Example: Using findIndex in a Function
  const cars = [
    { brand: 'Toyota', model: 'Corolla', year: 2020 },
    { brand: 'Honda', model: 'Civic', year: 2019 },
    { brand: 'Ford', model: 'Mustang', year: 2021 },
  ];

  const findCarByModel = (cars, model) => {
    return cars.findIndex((car) => car.model === model);
  };

  console.log(findCarByModel(cars, 'Civic')); // Output: 1
  console.log(findCarByModel(cars, 'Model S')); // Output: -1
}
 */

//* The New `findLast` and `findLastIndex` Methods

/* 
{
  // 🧠 MUST READ  https://claude.ai/share/cb1cde3d-47a9-46e7-9afe-0501e1eff4e1

  // 👁️ findLast and findLastIndex Methods Demo

  const users = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      role: 'developer',
      department: 'engineering',
      isActive: true,
      lastLogin: '2024-09-15T10:30:00Z',
      salary: 85000,
      joinedAt: '2022-03-15',
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@company.com',
      role: 'designer',
      department: 'design',
      isActive: false,
      lastLogin: '2024-08-20T14:22:00Z',
      salary: 75000,
      joinedAt: '2023-01-10',
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily.davis@company.com',
      role: 'manager',
      department: 'engineering',
      isActive: true,
      lastLogin: '2024-09-17T09:15:00Z',
      salary: 95000,
      joinedAt: '2021-06-01',
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      email: 'alex.rodriguez@company.com',
      role: 'developer',
      department: 'engineering',
      isActive: false,
      lastLogin: '2024-07-30T16:45:00Z',
      salary: 82000,
      joinedAt: '2022-11-20',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      email: 'lisa.thompson@company.com',
      role: 'analyst',
      department: 'data',
      isActive: true,
      lastLogin: '2024-09-16T11:20:00Z',
      salary: 78000,
      joinedAt: '2023-05-08',
    },
    {
      id: 6,
      name: 'David Wilson',
      email: 'david.wilson@company.com',
      role: 'developer',
      department: 'engineering',
      isActive: true,
      lastLogin: '2024-09-17T08:45:00Z',
      salary: 88000,
      joinedAt: '2020-09-12',
    },
    {
      id: 7,
      name: 'Rachel Green',
      email: 'rachel.green@company.com',
      role: 'designer',
      department: 'design',
      isActive: false,
      lastLogin: '2024-06-15T13:30:00Z',
      salary: 72000,
      joinedAt: '2023-08-25',
    },
    {
      id: 8,
      name: 'James Brown',
      email: 'james.brown@company.com',
      role: 'manager',
      department: 'data',
      isActive: true,
      lastLogin: '2024-09-17T07:30:00Z',
      salary: 92000,
      joinedAt: '2021-12-03',
    },
  ];

  console.log('=== Users Array ===');
  console.table(users);

  console.log('\n=== findLast() Examples ===');

  // 1. Find the last active user
  const lastActiveUser = users.findLast((user) => user.isActive);
  console.log('Last active user:', lastActiveUser);

  // 2. Find the last inactive user
  const lastInactiveUser = users.findLast((user) => !user.isActive);
  console.log('Last inactive user:', lastInactiveUser);

  // 3. Find the last developer
  const lastDeveloper = users.findLast((user) => user.role === 'developer');
  console.log('Last developer:', lastDeveloper);

  // 4. Find the last user from engineering department
  const lastEngineer = users.findLast(
    (user) => user.department === 'engineering'
  );
  console.log('Last user from engineering:', lastEngineer);

  // 5. Find the last user with high salary (>80k)
  const lastHighEarner = users.findLast((user) => user.salary > 80000);
  console.log('Last high earner (>80k):', lastHighEarner);

  console.log('\n=== findLastIndex() Examples ===');

  // 1. Find index of last active user
  const lastActiveIndex = users.findLastIndex((user) => user.isActive);
  console.log('Index of last active user:', lastActiveIndex);

  // 2. Find index of last inactive user
  const lastInactiveIndex = users.findLastIndex((user) => !user.isActive);
  console.log('Index of last inactive user:', lastInactiveIndex);

  // 3. Find index of last manager
  const lastManagerIndex = users.findLastIndex(
    (user) => user.role === 'manager'
  );
  console.log('Index of last manager:', lastManagerIndex);

  // 4. Find index of last user who joined after 2022
  const lastRecentJoinerIndex = users.findLastIndex(
    (user) => new Date(user.joinedAt) > new Date('2022-01-01')
  );
  console.log(
    'Index of last user who joined after 2022:',
    lastRecentJoinerIndex
  );

  console.log('\n=== Practical Use Cases ===');

  // Use case 1: Get the most recently added active user for notification
  const mostRecentActiveUser = users.findLastIndex((user) => user.isActive);
  if (mostRecentActiveUser)
    console.log(`Sending notification to: ${mostRecentActiveUser}`);
  else console.log(`No active user found`);

  // Use case 2: Find and update the last inactive user
  const lastInactiveUserIndex = users.findLastIndex((user) => !user.isActive);
  if (lastInactiveUserIndex !== -1) {
    console.log(
      `Last inactive user at index ${lastInactiveUserIndex}: ${users[lastInactiveUserIndex].name}`
    );

    // You could update the user here
    // users[lastInactiveUserIndex].isActive = true;
    // users[lastInactiveUserIndex].lastLogin = new Date().toISOString();
  }

  // Use case 3: Check if the last user added is active (onboarding success)
  const lastUser = users.at(-1);
  const isLastUserActive = lastUser.isActive;
  console.log(
    `Last user (${lastUser.name}) is ${
      isLastUserActive ? 'active' : 'inactive'
    }`
  );
}
 */

// Lecture Code

/* 
{
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const lastWithdrawal = movements.findLast((movement) => movement < 0);
  console.log(lastWithdrawal);

  const latestLargeMovementIndex = movements.findLastIndex(
    (movement) => Math.abs(movement) > 1000
  );
  console.log(
    `Your largest movement was ${
      movements.length - latestLargeMovementIndex
    } movements age`
  );
}
 */

//* `some` and `every` method

/* 
{
  // https://chatgpt.com/share/209f4d9f-f981-4ef4-bca5-9b305292ea79

  // The `some` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value.

  const array = [1, 2, 3, 4, 5];

  const hasEvenNumber = array.some((element) => element % 2 === 0);
  console.log(hasEvenNumber); // Output: true

  // The `every` method tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value.

  const allLessThanTen = array.every((element) => element < 10);
  console.log(allLessThanTen); // Output: true

  const allEvenNumbers = array.every((element) => element % 2 === 0);
  console.log(allEvenNumbers); // Output: false

  // In summary, use `some` when you want to check if at least one element meets a condition, and use `every` when you want to check if all elements meet a condition.
}
 */

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
const anyDeposits = movements.some((movement) => movement > 0);
console.log(anyDeposits);
 */

//* `flat` and `flatMap` method

/* 
{
  // Basic Example
  const arr1 = [1, 2, [3, 4]];
  console.log(arr1.flat()); // [1, 2, 3, 4]

  const arr2 = [1, 2, [3, 4, [5, 6]]];
  console.log(arr2.flat()); // [1, 2, 3, 4, [5, 6]]
  console.log(arr2.flat(2)); // [1, 2, 3, 4, 5, 6];

  // `flat`
  const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
  console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

  const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

  console.log(arrDeep.flat()); // [[1, 2], 3, 4, [5, 6], 7, 8]
  console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

  const accounts = [
    {
      owner: 'Jonas Schmedtmann',
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2, // %
      pin: 1111,
    },
    {
      owner: 'Jessica Davis',
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: 2222,
    },
    {
      owner: 'Steven Thomas Williams',
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      interestRate: 0.7,
      pin: 3333,
    },
    {
      owner: 'Sarah Smith',
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
      pin: 4444,
    },
  ];

  // Practical Example: Calculate the overallBalance of all the movements of all the accounts

  // (flat)
  const overallBalance = accounts
    .map((account) => account.movements)
    .flat()
    .reduce((totalBalance, currentValue) => totalBalance + currentValue, 0);

  console.log(overallBalance); // 17840

  // (flatMap)
  const overallBalance2 = accounts
    .flatMap((account) => account.movements)
    .reduce((totalBalance, currentValue) => totalBalance + currentValue, 0);

  console.log(overallBalance2); // 17840
}
 */

//* Sorting Arrays

/* 
{
  // https://chatgpt.com/share/931754ed-e1b8-4a6d-9aef-79327258d0a6

  // 1. Sorting Numbers using Compare function
  const numbers = [4, 2, 5, 1, 3];

  // Ascending order
  numbers.sort((a, b) => a - b);
  console.log(numbers); // Output: [1, 2, 3, 4, 5]

  // Descending order
  numbers.sort((a, b) => b - a);
  console.log(numbers); // Output: [5, 4, 3, 2, 1]

  // 2. Sorting Strings
  const fruits = ['banana', 'apple', 'cherry', 'date'];

  // Ascending order
  fruits.sort();
  console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

  // Descending order
  // fruits.sort((a, b) => b.localeCompare(a));
  fruits.sort().reverse();
  console.log(fruits); // Output: ['date', 'cherry', 'banana', 'apple']

  // 3. Custom Sorting
  // For more complex sorting scenarios, you can create custom comparison functions. For example, sorting objects by a property:
  const items = [
    { name: 'apple', quantity: 2 },
    { name: 'banana', quantity: 5 },
    { name: 'cherry', quantity: 3 },
  ];

  // Sort by quantity in ascending order
  items.sort((a, b) => a.quantity - b.quantity);
  console.log(items);

  // Output:
  // [
  //   { name: 'apple', quantity: 2 },
  //   { name: 'cherry', quantity: 3 },
  //   { name: 'banana', quantity: 5 }
  // ]

  // Sort by name in alphabetical order
  items.sort((a, b) => a.name.localeCompare(b.name));
  console.log(items);

  // Output:
  // [
  //   { name: 'apple', quantity: 2 },
  //   { name: 'banana', quantity: 5 },
  //   { name: 'cherry', quantity: 3 }
  // ]
}
 */

// Lecture Code

/* 
{
  // 1. Sorting Numbers
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  // Ascending order
  movements.sort((a, b) => a - b);
  console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

  // Descending order
  movements.sort((a, b) => b - a);
  console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

  // 2. Sorting Strings
  const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

  // Ascending order
  owners.sort();
  console.log(owners); // ['Adam', 'Jonas', 'Martha', 'Zach']

  // Descending order
  // owners.sort((a, b) => b.localeCompare(a));
  owners.sort().reverse();
  console.log(owners); // ['Zach', 'Martha', 'Jonas', 'Adam']
}
 */

//* Array Grouping

// MDN

{
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy

  // Syntax: Object.groupBy(items, callbackFn)

  const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
    { name: 'bananas', type: 'fruit', quantity: 0 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 5 },
    { name: 'fish', type: 'meat', quantity: 22 },
  ];

  const groupByType = Object.groupBy(inventory, (item) => item.type);

  console.log('Group by type:', groupByType);

  // Output:
  // {
  //   vegetables: [
  //     { name: 'asparagus', type: 'vegetables', quantity: 5 },
  //   ],
  //   fruit: [
  //     { name: "bananas", type: "fruit", quantity: 0 },
  //     { name: "cherries", type: "fruit", quantity: 5 }
  //   ],
  //   meat: [
  //     { name: "goat", type: "meat", quantity: 23 },
  //     { name: "fish", type: "meat", quantity: 22 }
  //   ]
  // }

  // We can also create groups inferred from values in one or more properties of the elements. Below is a very similar example that puts the items into ok or restock groups based on the value of the quantity field.

  const myCallback = (item) => {
    return item.quantity > 5 ? 'ok' : 'restock';
  };

  const groupByQuantity = Object.groupBy(inventory, myCallback);

  console.log('Group by quantity:', groupByQuantity);

  // Output:
  //   {
  //   restock: [
  //     { name: "asparagus", type: "vegetables", quantity: 5 },
  //     { name: "bananas", type: "fruit", quantity: 0 },
  //     { name: "cherries", type: "fruit", quantity: 5 }
  //   ],
  //   ok: [
  //     { name: "goat", type: "meat", quantity: 23 },
  //     { name: "fish", type: "meat", quantity: 22 }
  //   ]
  // }
}

// Claude AI

{
  // 🧠 MUST READ https://claude.ai/share/13c9a1ee-7a35-4d9b-9121-98d22e976261
  // 👁️ Array Grouping Examples

  // Syntax: Object.groupBy(items, callbackFn)

  // Basic Object.groupBy() example
  const users = [
    { name: 'Alice', role: 'admin', active: true },
    { name: 'Bob', role: 'user', active: false },
    { name: 'Charlie', role: 'admin', active: true },
    { name: 'Diana', role: 'user', active: true },
  ];

  // Group by role
  const usersByRole = Object.groupBy(users, (user) => user.role);

  console.log('User grouped by their role:', usersByRole);

  // Output:
  // {
  //   admin: [
  //     { name: 'Alice', role: 'admin', active: true },
  //     { name: 'Charlie', role: 'admin', active: true }
  //   ],
  //   user: [
  //     { name: 'Bob', role: 'user', active: false },
  //     { name: 'Diana', role: 'user', active: true }
  //   ]
  // }

  // Group by active status
  const usersByStatus = Object.groupBy(users, (user) =>
    user.active ? 'active' : 'inactive'
  );
  console.log('User grouped by their active status:', usersByStatus);

  // More complex grouping - by role and status combined
  const complexGrouping = Object.groupBy(
    users,
    (user) => `${user.role}_${user.active}`
  );
  console.log('User grouped by role and status:', complexGrouping);

  //* Practical example: Grouping API responses

  const orders = [
    { id: 1, status: 'pending', customer: 'Alice', amount: 100 },
    { id: 2, status: 'completed', customer: 'Bob', amount: 200 },
    { id: 3, status: 'pending', customer: 'Charlie', amount: 150 },
    { id: 4, status: 'cancelled', customer: 'Diana', amount: 75 },
    { id: 5, status: 'completed', customer: 'Alice', amount: 300 },
  ];

  // Group orders by status for dashboard display
  const ordersByStatus = Object.groupBy(orders, (order) => order.status);

  // Group orders by customer
  const ordersByCustomer = Object.groupBy(orders, (order) => order.customer);

  // Calculate totals per group
  const statusTotals = Object.entries(ordersByStatus).map(
    ([status, orders]) => ({
      status,
      orderCount: orders.length,
      totalAmount: orders.reduce((sum, order) => sum + order.amount, 0),
    })
  );

  console.log('Orders grouped by status:', ordersByStatus);
  console.log('Orders grouped by customer:', ordersByCustomer);
  console.log('Orders totals by status:', statusTotals);

  // Advanced example: Multi-level grouping
  const transactions = [
    { date: '2024-01-15', category: 'food', amount: 25, type: 'expense' },
    { date: '2024-01-15', category: 'transport', amount: 15, type: 'expense' },
    { date: '2024-01-16', category: 'food', amount: 30, type: 'expense' },
    { date: '2024-01-16', category: 'salary', amount: 3000, type: 'income' },
    { date: '2024-01-17', category: 'food', amount: 20, type: 'expense' },
  ];

  // Group by date, then by type
  const transactionsByDate = Object.groupBy(transactions, (t) => t.date);
  const nestedGrouping = Object.fromEntries(
    Object.entries(transactionsByDate).map(([date, trans]) => [
      date,
      Object.groupBy(trans, (t) => t.type),
    ])
  );

  console.log('Nested grouping:', JSON.stringify(nestedGrouping, null, 2));
}

//* Dynamically Creating and Filling Arrays

// https://chatgpt.com/share/dc6d9ddf-c1ee-4694-86b5-1df176f1b3af

// In JavaScript, you can dynamically create and fill arrays using a variety of methods. Here are a few common techniques:

/* 
// 1. Using a Loop: You can use a for loop to fill an array with values dynamically.
let array = [];
for (let i = 0; i < 10; i++) {
  array.push(i);
}
console.log(array); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 2. Using Array.from(): Array.from() can create an array from any iterable object, including array-like objects. It can also take a mapping function as a second argument.

const array2 = Array.from({ length: 10 }, (_, i) => i);
console.log(array2); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 3. Using Array.map(): You can create an array with a certain length and then use map to fill it.

const array3 = new Array(10).fill(null).map((_, i) => i);
console.log(array3); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 4. Using Array.fill(): You can create an array and fill it with the same value using fill.

const array4 = new Array(10).fill(0);
console.log(array4); // Output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// 5. Using Spread Operator with Array.keys(): The spread operator can be used in combination with Array.keys() to create arrays with dynamic values.

const array5 = [...Array(10).keys()];
console.log(array5); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 6. Using reduce(): You can also use reduce to build an array.

const array6 = Array(10)
  .fill()
  .reduce((acc, _, i) => {
    acc.push(i);
    return acc;
  }, []);

console.log(array6); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

/* 
// Empty arrays + fill method
const array = new Array(7).fill(0);
console.log(array); // Output: [0, 0, 0, 0, 0, 0, 0]

// Array.from
const array2 = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(array2); // Output: [1, 2, 3, 4, 5, 6, 7]

// Task: Create an array with 100 random dice rolls.
const diceRolls = Array.from(
  { length: 100 },
  (_, i) => Math.floor(Math.random() * 6) + 1
);
console.log(diceRolls);
 */

//* Array Methods Practice

/* 
const accounts2 = [
  {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  },
  {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
  {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  },
  {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  },
];

// Task 1: Calculate how much has been deposited in total in the bank.
const bankDepositSum = accounts2
  .map((account) => account.movements)
  .flat(1)
  .filter((movement) => movement > 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(bankDepositSum); // 25180

// Task 2: Count how many deposits there have been in the bank with at least $1000.
const numDeposits1000 = accounts2
  .flatMap((account) => account.movements)
  .filter((movement) => movement >= 1000).length;

console.log(numDeposits1000); // 6

// Using reduce method
const numDeposits1000Reduce = accounts2
  .flatMap((account) => account.movements)
  .reduce((accumulator, currentMovement, currentIndex, array) => {
    // console.log(array);
    return currentMovement >= 1000 ? accumulator + 1 : accumulator;
  }, 0);

console.log(numDeposits1000Reduce); // 6

// Task 3: Create an object which contains the sum of deposits and sum of the withdrawals.
const sums = accounts2
  .flatMap((account) => account.movements)
  .reduce(
    (accumulator, currentMovement) => {
      // console.log(accumulator);
      currentMovement > 0
        ? (accumulator.deposits += currentMovement)
        : (accumulator.withdrawals += Math.abs(currentMovement));

      return accumulator;
    },
    // NOTE: Initial sums object which will be used as accumulator's initial value
    {
      deposits: 0,
      withdrawals: 0,
    }
  );

console.log(sums); // {deposits: 25180, withdrawals: 7340}

// Task 4: Create a simple function to convert any string to a title case. (title case basically means that all the words in a sentence are capitalized except some exceptions => the word that should NOT be capitalized 👇)

// Sample: this is a nice title => This Is a Nice Title

const convertTitleCase = (title) => {
  const capitalize = (str) => str.at(0).toUpperCase() + str.slice(1);

  const exceptionList = [
    'a',
    'an',
    'the',
    'and',
    'but',
    'or',
    'nor',
    'for',
    'yet',
    'so',
    'at',
    'by',
    'for',
    'in',
    'of',
    'off',
    'on',
    'out',
    'to',
    'up',
    'with',
  ];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map((word) => (exceptionList.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title')); // This Is a Nice Title
console.log(convertTitleCase('this is a LONG title but not too long')); // This Is a Long Title but Not Too Long
console.log(convertTitleCase('and here is another title with an EXAMPLE')); // And Here Is Another Title with an Example
 */

'use strict';

// Challenge #1

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  const arrStr = [];
  for (let i = 0; i < arr.length; i++) {
    arrStr[i] = `${arr[i]}°C in ${i + 1} days...`;
  }
  console.log(`...${arrStr.join('')}`);
};

printForecast(data1);
printForecast(data2);

'use strict';

{
  //* LECTURE: Functions

  function describeCountry({ country, population, capitalCity }) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  }

  const country1 = {
    country: 'Bangladesh',
    population: 170,
    capitalCity: 'Dhaka',
  };

  const country2 = {
    country: 'India',
    population: 750,
    capitalCity: 'Delhi',
  };

  const country3 = {
    country: 'Pakistan',
    population: 240,
    capitalCity: 'Islamabad',
  };

  const country1Info = describeCountry(country1);
  const country2Info = describeCountry(country2);
  const country3Info = describeCountry(country3);

  // console.log({ country1Info, country2Info, country3Info });
}

{
  //* LECTURE: Function Declarations vs. Expressions

  // Function Declaration
  function percentageOfWorld1(population) {
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return `${percentage.toFixed(1)}%`;
  }

  const country1 = percentageOfWorld1(1441);
  const country2 = percentageOfWorld1(170);
  const country3 = percentageOfWorld1(750);

  // console.log({ country1, country2, country3 });

  // Function Expression
  const percentageOfWorld2 = function (population) {
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return `${percentage.toFixed(1)}%`;
  };

  const country4 = percentageOfWorld2(1441);
  const country5 = percentageOfWorld2(170);
  const country6 = percentageOfWorld2(750);

  // console.log({ country4, country5, country6 });
}

{
  //* LECTURE: Arrow Functions

  // Arrow Function
  const percentageOfWorld3 = (population) => {
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return `${percentage.toFixed(1)}%`;
  };

  const country7 = percentageOfWorld3(1441);
  const country8 = percentageOfWorld3(170);
  const country9 = percentageOfWorld3(750);

  // console.log({ country7, country8, country9 });
}

{
  //* LECTURE: Functions Calling Other Functions

  const percentageOfWorld1 = (population) => {
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return percentage.toFixed(1);
  };

  const describePopulation = (country, population) => {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  };

  const country1 = describePopulation('China', 1441);
  const country2 = describePopulation('Bangladesh', 170);
  const country3 = describePopulation('India', 750);

  // console.log({ country1, country2, country3 });
}

{
  //* LECTURE: Introduction to Arrays

  const populations = [1441, 170, 750, 240];

  // console.log(populations.length === 4); // true

  const percentageOfWorld1 = (population) => {
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return percentage.toFixed(1);
  };

  const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
  ];

  // console.log(percentages);
}

{
  //* LECTURE: Basic Array Operations (Methods)

  const neighbors = ['India', 'Myanmar'];

  neighbors.push('Utopia');
  neighbors.pop();

  // if (!neighbors.includes('Germany'))
  //   console.log(`Probably not a central European country :D`);

  const index = neighbors.indexOf('India');

  neighbors.splice(index, 1, 'Republic of India');

  // console.log(neighbors);
}

{
  //* LECTURE: Introduction to Objects

  const myCountry = {
    country: 'Bangladesh',
    capital: 'Dhaka',
    language: 'Bangla',
    population: 170,
    neighbors: ['India', 'Myanmar'],
  };
}

{
  //* LECTURE: Dot vs. Bracket Notation

  const myCountry = {
    country: 'Bangladesh',
    capital: 'Dhaka',
    language: 'Bangla',
    population: 170,
    neighbors: ['India', 'Myanmar'],
  };

  const { country, capital, language, population, neighbors } = myCountry;

  // 1.
  //   console.log(`${country} has ${population} million ${language.toLowerCase()}-speaking people, ${
  //     neighbors.length
  //   } neighboring countries
  // and a capital called ${capital}.`);

  // 2.
  myCountry.population += 2;
  // console.log(myCountry);

  myCountry['population'] -= 2;
  // console.log(myCountry);
}

{
  //* LECTURE: Object Methods

  const myCountry = {
    country: 'Bangladesh',
    capital: 'Dhaka',
    language: 'Bangla',
    population: 170,
    neighbors: ['India', 'Myanmar'],

    // 1.
    describe() {
      console.log(`${this.country} has ${
        this.population
      } million ${this.language.toLowerCase()}-speaking people, ${
        this.neighbors.length
      } neighboring countries
and a capital called ${this.capital}.`);
    },

    // 3.
    checkIsland() {
      this.isIsland = this.neighbors.length === 0 ? true : false; // assign a new property called "isIsland"
      return this.isIsland;
    },
  };

  // 2.
  // myCountry?.describe?.();

  // 3.
  myCountry?.checkIsland?.();
  // console.log(myCountry);
}

{
  //* LECTURE: Iteration: The for Loop
  // for (let i = 1; i <= 50; i++) {
  //   console.log(`Voter number ${i} is currently voting`);
  // }
}

{
  //* LECTURE: Looping Arrays, Breaking and Continuing

  const populations = [1441, 170, 750, 240];

  const percentageOfWorld1 = (population) => {
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return percentage.toFixed(1);
  };

  const percentages2 = [];

  for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
  }

  // console.log(percentages2);
}

{
  //* LECTURE: Looping Backwards and Loops in Loops

  const listOfNeighbors = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
  ];

  for (let i = 0; i < listOfNeighbors.length; i++) {
    const neighbors = listOfNeighbors[i];

    for (let j = 0; j < neighbors.length; j++) {
      // console.log(`Neighbor: ${neighbors[j]}`);
    }
  }
}

{
  //* LECTURE: The while Loop

  const populations = [1441, 170, 750, 240];

  const percentageOfWorld1 = (population) => {
    const worldPopulation = 7900;
    const percentage = (population / worldPopulation) * 100;
    return percentage.toFixed(1);
  };

  const percentages3 = [];

  let i = 0;
  while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
  }

  // console.log(percentages3);
}

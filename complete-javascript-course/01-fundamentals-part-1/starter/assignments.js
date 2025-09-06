'use strict';

{
  //* LECTURE: Values and Variables

  const country = 'Bangladesh';
  const continent = 'South Asian';
  const population = 171.2;

  // console.log({ country, continent, population });
}

{
  //* LECTURE: Data Types

  const country = 'Bangladesh';
  const population = 171.2;
  const isIsland = true;
  let language;

  // console.log(typeof isIsland); // boolean
  // console.log(typeof population); // number
  // console.log(typeof country); // string
  // console.log(typeof language); // undefined
}

{
  //* LECTURE: let, const and var

  const country = 'Bangladesh';
  const continent = 'South Asian';
  let population = 171.2;
  const isIsland = true;
  const language = 'Bangla';

  population = 180;

  // console.log(population); // 180
}

{
  //* LECTURE: Basic Operators

  const country = 'Bangladesh';
  const continent = 'South Asian';
  const language = 'Bangla';
  let population = 170;
  const finlandPopulation = 6;
  const averagePopulationOfCountry = 33;

  // 1.
  let halfPopulation = population / 2;

  // 2.
  population += 1;
  // console.log(population); // 171

  // 3.
  const haveMorePeople = population > finlandPopulation;
  // console.log(haveMorePeople); // true

  // 4.
  const haveLessPeople = population < averagePopulationOfCountry;
  // console.log(haveLessPeople); // false

  // 5.
  const description = `${country} is in ${continent}, and its ${population} million
people speak ${language}`;

  // console.log(description); // Bangladesh is in South Asian, and its 171 million people speak Bangla
}

{
  //* LECTURE: Taking Decisions: if / else Statements

  const country = 'Bangladesh';
  const continent = 'South Asian';
  const language = 'Bangla';
  let population = 170;

  /* 
  if (population > 33) console.log(`${country}'s population is above average`);
  else
    console.log(
      `${country}'s population is ${33 - population} million below average`
    );
   */
}

{
  //* LECTURE: Type Conversion and Coercion
  /* 
  // 1. Predicted result:
  // 4
  // 617
  // 23
  // false
  // 1143

  // 2. Checking result:
  console.log('9' - '5'); // 4
  console.log('19' - '13' + '17'); // 617
  console.log('19' - '13' + 17); // 23
  console.log('123' < 57); // false
  console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
   */
}

{
  //* LECTURE: Equality Operators: == vs. ===
  /* 
  const numNeighbors = prompt(
    'How many neighbor countries does your country have?'
  );

  if (+numNeighbors === 1) console.log(`Only 1 border`);
  else if (numNeighbors > 1) console.log(`More than 1 border`);
  else console.log(`No borders`);
   */
}

{
  //* LECTURE: Logical Operators

  const country = 'Bangladesh';
  const continent = 'South Asian';
  const language = 'Bangla';
  const isIsland = true;
  let population = 170;

  /*   
  if (language.toLowerCase() === 'english' && population < 50 && !isIsland)
    console.log(`You should live in ${country}`);
  else console.log(`${country} does not meet your criteria :(`) 
  */
}

{
  //* LECTURE: The switch Statement

  const language = 'Bangla';

  /* 
  switch (language) {
    case 'chinese':
    case 'mandarin': {
      console.log(`MOST number of native speakers!`);
      break;
    }
    case 'spanish': {
      console.log(`2nd place in number of native speakers`);
      break;
    }
    case 'english': {
      console.log(`3rd place`);
      break;
    }
    case 'hindi': {
      console.log(`Number 4`);
      break;
    }
    case 'arabic': {
      console.log(`5th most spoken language`);
      break;
    }

    default: {
      console.log(`Great language too :D`);
    }
  }
 */
}

{
  //* LECTURE: The Conditional (Ternary) Operator

  const country = 'Bangladesh';
  let population = 170;

  /*  
  console.log(
    `${country}'s population is ${population > 33 ? 'above' : 'below'} average.`
  ); 
  */
}

'use strict';

// Selecting elements
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//* Display All Countries From Rest Countries API

{
  const loadCountries = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();
    // console.log(data);
    displayCountries(data);
  };

  const displayCountries = (countries) => {
    countries.forEach((country) => {
      const name = country?.name?.common;
      const flag = country?.flags?.svg;
      const region = country?.region;
      const population = country?.population;
      const language = country.languages
        ? Object.values(country.languages)[0]
        : 'N/A';
      const currency = country.currencies
        ? Object.values(country.currencies)[0].name
        : 'N/A';

      const article = document.createElement('article');
      article.classList.add('country');
      article.innerHTML = `      
          <img class="country__img" src=${flag} />
          <div class="country__data">
            <h3 class="country__name">${name}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>
               ${population}
            </p>
            <p class="country__row"><span>🗣️</span>
               ${language}
            </p>
            <p class="country__row"><span>💰</span>
              ${currency}
            </p>
          </div>`;
      countriesContainer.appendChild(article);
    });
  };

  loadCountries();
}

//* Reverse Geocoding API (Big Data Cloud)

{
  const fetchReverseGeocoding = async () => {
    const bigDataCloudAPIKey = 'bdc_9ecc2e2f97424a23bb33127899371025';
    const latitude = 23.02;
    const longitude = 89.76999;

    //* Both URL works
    // const res = await fetch(
    //   `https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&key=${bigDataCloudAPIKey}`
    // );

    //* Without API Key
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );
    const data = await res.json();
    return data;
  };
  // fetchReverseGeocoding();
}

//* Welcome to Callback Hell

{
  // 1. First get the country data by fullName
  const getCountry = async (countryName) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );
      const data = await res.json();
      console.log(data[0]);
      getNeighbourCountry(data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  // getCountry('Bangladesh');

  // 2. And then get one neighbour country data
  const getNeighbourCountry = async (data) => {
    try {
      const neighbourCountryCode = data?.borders?.[0]; // get first neighbour country code

      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${neighbourCountryCode}`
      );
      const neighbourCountry = await res.json();
      console.log(neighbourCountry[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // WARNING: Don't do this. (Callback Hell)

  // setTimeout(() => {
  //   console.log('1 second passed');
  //   setTimeout(() => {
  //     console.log('2 seconds passed');
  //     setTimeout(() => {
  //       console.log('3 seconds passed');
  //       setTimeout(() => {
  //         console.log('4 seconds passed');
  //       }, 1000);
  //     }, 1000);
  //   }, 1000);
  // }, 1000);
}

//* Promises and the Fetch API
//* Consuming Promises
//* Chaining Promises

{
  //* Promise

  // Creating a Promise
  const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    let success = true;

    if (success) {
      resolve('Operation was successful');
    } else {
      reject('Operation failed');
    }
  });

  // Consuming Promises or Using Promises
  myPromise
    .then((result) => {
      console.log(result); // Operation was successful
    })
    .catch((error) => {
      console.log(error); // Operation failed
    })
    .finally(() => {
      console.log('Promise settled');
    });

  //* Fetch API

  // Basic Fetch Request
  fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network request was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(
        `There was a problem with the fetch operation: ${error.message}`
      );
    });

  // Advanced Fetch Options
  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(
        `There was a problem with the fetch operation: ${error.message}`
      );
    });

  // TODO: NOTE: IMPORTANT: Combining Promises and Fetch API with
  // Both Promises and Fetch API can be combined to handle network requests in a more readable and manageable way, especially with async/await.

  const fetchPost = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/1`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(
        `There was a problem with the fetch operation: ${error.message}`
      );
    }
  };
  fetchPost();
}

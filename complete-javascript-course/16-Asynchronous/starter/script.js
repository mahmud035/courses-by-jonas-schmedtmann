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
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    const data = await res.json();
    console.log(data[0]);
    getNeighbourCountry(data[0]);
  };
  getCountry('Bangladesh');

  // 2. And then get one neighbour country data
  const getNeighbourCountry = async (data) => {
    const neighbourCountryCode = data?.borders?.[0]; // get first neighbour country code

    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${neighbourCountryCode}`
    );
    const neighbourCountry = await res.json();
    console.log(neighbourCountry[0]);
  };

  setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
      console.log('2 seconds passed');
      setTimeout(() => {
        console.log('3 seconds passed');
        setTimeout(() => {
          console.log('4 seconds passed');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

'use strict';

//* Coding Challenge #1

/* 
  In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

  Here are your tasks:

  PART 1
  1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
  2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
  The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
  3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: 'You are in Berlin, Germany'
  4. Chain a .catch method to the end of the promise chain and log errors to the console
  5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

  PART 2
  6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
  7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

  TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
  TEST COORDINATES 2: 19.037, 72.873
  TEST COORDINATES 2: -33.933, 18.474

  GOOD LUCK 😀
 */

{
  const whereAmI = async (lat, lng) => {
    try {
      //* Reverse Geocoding API (Big Data Cloud)
      const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network request was not ok: ${response.status}`);
      }
      const data = await response.json();
      const countryCode = data.countryCode;
      fetchCountry(countryCode);

      console.log(`You are in ${data.city}, ${data.countryName}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);

  // Fetch country
  const fetchCountry = async (countryCode) => {
    try {
      const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network request was not ok: ${response.status}`);
      }
      const data = await response.json();
      displayCountry(data[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Display country
  const displayCountry = async (country) => {
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
    countriesContainer.prepend(article);
  };
}

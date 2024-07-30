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
      const article = document.createElement('article');
      article.classList.add('country');
      article.innerHTML = `      
          <img class="country__img" src=${country?.flags?.png} />
          <div class="country__data">
            <h3 class="country__name">${country?.name?.common}</h3>
            <h4 class="country__region">${country?.region}</h4>
            <p class="country__row"><span>👫</span>
               ${country?.population}
            </p>
            <p class="country__row"><span>🗣️</span>
               ${
                 country?.languages
                   ? Object.keys(country.languages).join(', ').toUpperCase()
                   : 'N/A'
               }
            </p>
            <p class="country__row"><span>💰</span>
              ${
                country.currencies
                  ? Object.keys(country.currencies).join(', ')
                  : 'N/A'
              }
            </p>
          </div>`;
      countriesContainer.appendChild(article);
    });
  };

  loadCountries();
}

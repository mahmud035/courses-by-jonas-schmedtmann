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
  TEST COORDINATES 2: 23.02, 89.769

  GOOD LUCK 😀
 */

/*   
{
  // TODO: NOTE: IMPORTANT: Combining Promises and Fetch API
  // Both Promises and Fetch API can be combined to handle network requests in a more readable and manageable way, especially with async/await.

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

  whereAmI(52.508, 13.381); // Germany
  whereAmI(19.037, 72.873); // India
  whereAmI(23.02, 89.769); // Bangladesh

  //* Fetch country
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

  //* Display country
  const displayCountry = (country) => {
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
 */

//* Coding Challenge #2

/* 
  Build the image loading functionality that I just showed you on the screen.

  Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

  PART 1
  1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

  If this part is too tricky for you, just watch the first part of the solution.

  PART 2
  2. Consume the promise using .then and also add an error handler;
  3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
  4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
  5. After the second image has loaded, pause execution for 2 seconds again;
  6. After the 2 seconds have passed, hide the current image.

  TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

  GOOD LUCK 😀
*/

/* 
{
  const imgContainer = document.querySelector('.images');
  let currentImage;

  const wait = (seconds) => {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  };

  const createImage = (imgPath) => {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = imgPath;

      img.addEventListener('load', () => {
        imgContainer.appendChild(img);
        resolve(img);
      });

      img.addEventListener('error', () => {
        reject(new Error(`Image not found`));
      });
    });
  };

  // IMPORTANT: প্রতিটা .then এর মধ্যে থেকে return করতে হবে, তার নিচে আবার .then ব্যবহার করার জন্য।

  // Load first image
  createImage('./img/img-1.jpg')
    .then((img) => {
      currentImage = img;
      console.log('Image 1 loaded');
      return wait(2); // pause execution for 2 seconds
    })
    .then(() => {
      currentImage.style.display = 'none';
      return createImage('./img/img-2.jpg'); // Load second image
    })
    .then((img) => {
      currentImage = img;
      console.log('Image 2 loaded');
      return wait(2); // pause execution for 2 seconds
    })
    .then(() => {
      currentImage.style.display = 'none';
    })
    .catch((error) => console.error(error.message));
}
 */

//* Coding Challenge #3

/* 
  PART 1
  Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
  Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

  PART 2
  1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
  2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
  3. Check out the 'imgs' array in the console! Is it like you expected?
  4. Use a promise combinator function to actually get the images from the array 😉
  5. Add the 'parallel' class to all the images (it has some CSS styles).

  TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

  GOOD LUCK 😀
*/

{
  // Code from challenge #2
  const imgContainer = document.querySelector('.images');
  let currentImage;

  const wait = (seconds) => {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  };

  const createImage = (imgPath) => {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = imgPath;

      img.addEventListener('load', () => {
        imgContainer.appendChild(img);
        resolve(img);
      });

      img.addEventListener('error', () => {
        reject(new Error(`Image not found`));
      });
    });
  };

  // Part 1
  const setAndHideCurrentImage = async (img) => {
    currentImage = img;
    await wait(2);
    currentImage.style.display = 'none';
  };

  const loadNPause = async () => {
    try {
      const img1 = await createImage('./img/img-1.jpg'); // load image 1
      await setAndHideCurrentImage(img1);

      const img2 = await createImage('./img/img-2.jpg'); // load image 2
      await setAndHideCurrentImage(img2);

      const img3 = await createImage('./img/img-3.jpg'); // load image 3
      await setAndHideCurrentImage(img3);
    } catch (error) {
      console.error(error.message);
    }
  };
  // loadNPause();

  // Part 2
  const loadAll = async (imgArr) => {
    try {
      const imgs = imgArr.map(async (imgPath) => await createImage(imgPath));
      const imgsEl = await Promise.all(imgs);
      // console.log(imgsEl);
      imgsEl.forEach((img) => img.classList.add('parallel'));
    } catch (error) {
      console.error(error.message);
    }
  };
  loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
}

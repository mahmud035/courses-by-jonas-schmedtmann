'use strict';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Selecting Elements
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log(
        `https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`
      );
    },

    (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert(`User denied the request for Geolocation.`);
          break;
        case error.POSITION_UNAVAILABLE:
          alert(`Location information is unavailable.`);
          break;
        case error.TIMEOUT:
          alert(`The request to get user location timed out.`);
          break;
        case error.UNKNOWN_ERROR:
          alert(`An unknown error occurred.`);
          break;
      }
    }
  );
}

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

const getTime = () => {
  const date = new Date();
  const options = {
    month: 'long',
    day: '2-digit',
  };
  const time = new Intl.DateTimeFormat(navigator.language, options).format(
    date
  );
  return time;
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];

      // Leaflet
      const map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      //* Event, Popup & Marker Together
      map.on('click', function (mapEvent) {
        const { lat, lng } = mapEvent.latlng;
        const clickedCoords = [lat, lng];

        L.marker(clickedCoords)
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
              content: `🏃‍♂️ Running on ${getTime()} ${mapEvent.latlng.toString()}`,
            })
          )
          .openPopup();
      });
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

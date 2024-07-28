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

      const map = L.map('map').setView([latitude, longitude], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 25,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      //* Marker
      // const marker = L.marker([latitude, longitude]).addTo(map);

      //* Popup
      // const popup = L.popup()
      //   .setLatLng([latitude, longitude])
      //   .setContent(
      //     `<div class="leaflet-popup-content-wrapper"><div class="leaflet-popup-content" style="width: 148px;">🚴‍♀️ Cycling on July 28</div></div>`
      //   )
      //   .openOn(map);

      //* Event, Popup & Marker Together
      function onMapClick(e) {
        // console.log(e);
        const date = new Date();
        const options = {
          month: 'long',
          day: '2-digit',
        };
        const time = new Intl.DateTimeFormat(
          navigator.language,
          options
        ).format(date);

        const Point = L.point(0, -27);
        const marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
        const popup = L.popup({ offset: Point })
          .setLatLng(e.latlng)
          .setContent(`🏃‍♂️ Running on ${time} ${e.latlng.toString()}`)
          .openOn(map);
      }

      map.on('click', onMapClick);
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

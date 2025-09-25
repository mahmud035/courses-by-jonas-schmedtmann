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

let map;
let mapEvent;

const getTime = () => {
  const date = new Date();
  const locale = navigator.language;
  const options = { month: 'long', day: '2-digit' };
  const time = new Intl.DateTimeFormat(locale, options).format(date);
  return time;
};

// Initialize map with fallback coordinates
const initMap = (coords = [51.505, -0.09]) => {
  console.log('Initializing map with coordinates:', coords);

  // Clear any existing map
  if (map) map.remove();

  try {
    // Create map
    map = L.map('map').setView(coords, 13);

    // Add tile layer with error handling
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    console.log('Map initialized successfully');

    // Handle clicks on map
    map.on('click', (mapE) => {
      mapEvent = mapE;
      form.classList.remove('hidden');
      inputDistance.focus();
    });

    // Add a marker at the center to confirm map is working
    L.marker(coords)
      .addTo(map)
      .bindPopup('Map initialized successfully!')
      .openPopup();
  } catch (error) {
    console.error('Error initializing map:', error);
    alert('Error loading map. Please refresh the page.');
  }
};

// Check if geolocation is supported and get position
if (navigator.geolocation) {
  console.log('Geolocation is supported, requesting position...');

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log('Geolocation success:', position);
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];
      initMap(coords);
    },

    (error) => {
      console.error('Geolocation error:', error);

      let errorMessage = '';
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = 'Location access denied. Using default location.';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage =
            'Location information unavailable. Using default location.';
          break;
        case error.TIMEOUT:
          errorMessage = 'Location request timed out. Using default location.';
          break;
        default:
          errorMessage = 'An unknown error occurred. Using default location.';
          break;
      }

      console.log(errorMessage);
      alert(errorMessage);

      // Initialize with default coordinates (London)
      initMap();
    },
    {
      // Geolocation options
      timeout: 10000, // 10 seconds
      enableHighAccuracy: true,
      maximumAge: 60000, // 1 minute
    }
  );
} else {
  console.log('Geolocation not supported, using default location');
  alert(
    'Geolocation is not supported by this browser. Using default location.'
  );
  initMap();
}

// Input type change handler
inputType.addEventListener('change', () => {
  inputElevation.parentElement.classList.toggle('form__row--hidden');
  inputCadence.parentElement.classList.toggle('form__row--hidden');
});

// Form submission handler
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!mapEvent) {
    alert('Please click on the map first to select a location.');
    return;
  }

  // Get form values
  const type = inputType.value;
  const distance = inputDistance.value;
  const duration = inputDuration.value;
  const cadence = inputCadence.value;
  const elevation = inputElevation.value;

  // Basic validation
  if (!distance || !duration) {
    alert('Please fill in distance and duration.');
    return;
  }

  // Clear input fields
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';

  // Display marker & popup
  const { lat, lng } = mapEvent.latlng;
  const clickedCoords = [lat, lng];

  const workoutEmoji = type === 'running' ? '🏃‍♂️' : '🚴‍♀️';
  const popupClass = `${type}-popup`;

  L.marker(clickedCoords)
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: popupClass,
        content: `${workoutEmoji} ${
          type.charAt(0).toUpperCase() + type.slice(1)
        } on ${getTime()}`,
      })
    )
    .openPopup();

  form.classList.add('hidden');

  console.log('Workout added:', {
    type,
    distance,
    duration,
    coords: clickedCoords,
  });
});

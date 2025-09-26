'use strict';

// https://claude.ai/share/1bf69f5f-4974-4f8e-96db-fc56cfeb2988

// Selecting Elements (moved outside class for global access)
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Workout Base Class
class Workout {
  date = new Date(); // Keep this for consistent timestamps
  id = crypto.randomUUID();
  #clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  setDescription() {
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

    this.description = `${this.type.at(0).toUpperCase()}${this.type.slice(
      1
    )} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }

  click() {
    this.#clicks++;
  }

  getClicks() {
    return this.#clicks;
  }
}

// Running Workout Class
class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.#calcPace();
    this.setDescription();
  }

  #calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

// Cycling Working Class
class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.#calcSpeed();
    this.setDescription();
  }

  #calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// Main Application Class
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  #markers = []; // Track map markers for deletion

  constructor() {
    // Get user's position
    this.#getPosition();

    // Get data from local storage
    this.#getLocalStorage();

    // Attach event handlers
    form.addEventListener('submit', (e) => this.#newWorkout(e));
    inputType.addEventListener('change', this.#toggleElevationField);
    containerWorkouts.addEventListener('click', (e) => this.#moveToPopup(e));
  }

  #getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => this.#loadMap(position),
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
              errorMessage =
                'Location request timed out. Using default location.';
              break;
            default:
              errorMessage =
                'An unknown error occurred. Using default location.';
              break;
          }

          alert(errorMessage);
          this.#loadMap();
        },
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 60000,
        }
      );
    } else {
      alert('Geolocation is not supported. Using default location.');
      this.#loadMap();
    }
  }

  #loadMap(position) {
    let coords;

    if (position) {
      const { latitude, longitude } = position.coords;
      coords = [latitude, longitude];
    } else {
      coords = [51.505, -0.09]; // London default
    }

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', (mapE) => this.#showForm(mapE));

    // Render markers for stored workouts
    this.#workouts.forEach((work) => {
      this.#renderWorkoutMarker(work);
    });
  }

  #showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  #hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  #toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  #newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));
    const allPositives = (...inputs) => inputs.every((inp) => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout running, crate running object
    if (type === 'running') {
      const cadence = +inputCadence.value;

      // Check if data is valid
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositives(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      // Check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositives(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);

    // Render workout on map as marker
    this.#renderWorkoutMarker(workout);

    // Render workout on list
    this.#renderWorkout(workout);

    // Hide form + clear input fields
    this.#hideForm();

    // Set local storage to all workouts
    this.#setLocalStorage();
  }

  #renderWorkoutMarker(workout) {
    const marker = L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();

    // Store marker with workout ID for later deletion
    this.#markers.push({ id: workout.id, marker });
  }

  #renderWorkout(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <button class="workout__delete" data-id="${workout.id}">×</button>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;

    form.insertAdjacentHTML('afterend', html);
  }

  #moveToPopup(e) {
    // Check if delete button was clicked
    if (e.target.classList.contains('workout__delete')) {
      this.#deleteWorkout(e.target.dataset.id);
      return;
    }

    if (!this.#map) return;

    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      (work) => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // Using the public interface
    // workout.click();
  }

  #deleteWorkout(workoutId) {
    // Confirm deletion
    if (!confirm('Are you sure you want to delete this workout?')) return;

    // Find and remove workout from array
    const workoutIndex = this.#workouts.findIndex(
      (work) => work.id === workoutId
    );

    if (workoutIndex === -1) return; // Workout not found

    // Remove from workouts array
    this.#workouts.splice(workoutIndex, 1);

    // Remove marker from map
    const markerIndex = this.#markers.findIndex(
      (item) => item.id === workoutId
    );

    if (markerIndex !== -1) {
      this.#map.removeLayer(this.#markers[markerIndex].marker);
      this.#markers.splice(markerIndex, 1);
    }

    // Remove from DOM
    const workoutElement = document.querySelector(`[data-id="${workoutId}"]`);
    if (workoutElement) workoutElement.remove();

    // Update local storage
    this.#setLocalStorage();

    console.log(`Workout ${workoutId} deleted successfully`);
  }

  #setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  #getLocalStorage() {
    const data = localStorage.getItem('workouts');

    if (!data) return;

    const workoutData = JSON.parse(data);

    // Reconstruct workout objects with proper class instances
    workoutData.forEach((data) => {
      let workout;

      if (data.type === 'running') {
        workout = new Running(
          data.coords,
          data.distance,
          data.duration,
          data.cadence
        );
      } else if (data.type === 'cycling') {
        workout = new Cycling(
          data.coords,
          data.distance,
          data.duration,
          data.elevationGain
        );
      }

      // Preserve original date and id
      if (workout) {
        workout.date = new Date(data.date);
        workout.id = data.id;
        workout.setDescription(); // Regenerate description with preserved date

        this.#workouts.push(workout);
        this.#renderWorkout(workout);
      }
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }

  // Public method for debugging
  getWorkouts() {
    return this.#workouts;
  }

  // Public method to add workout programmatically
  addWorkout(type, coords, distance, duration, extra) {
    let workout;

    if (type === 'running') {
      workout = new Running(coords, distance, duration, extra);
    } else if (type === 'cycling') {
      workout = new Cycling(coords, distance, duration, extra);
    } else {
      throw new Error('Invalid workout type');
    }

    this.#workouts.push(workout);
    this.#renderWorkoutMarker(workout);
    this.#renderWorkout(workout);
    this.#setLocalStorage();

    return workout;
  }
}

// Initialize the app
const app = new App();

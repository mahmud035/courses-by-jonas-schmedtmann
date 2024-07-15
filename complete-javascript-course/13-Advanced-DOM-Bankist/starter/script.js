'use strict';

// Select Elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const section1 = document.querySelector('#section--1');

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const navLinksContainer = document.querySelector('.nav__links');

// Open Modal
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Close Modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//* Event Handlers
// Open Modal Event Listener
btnsOpenModal.forEach((btnOpenModal) =>
  btnOpenModal.addEventListener('click', openModal)
);

// Close Modal Event Listener
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Close Modal Using 'Escape' key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button Scrolling
btnScrollTo.addEventListener('click', () => {
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// IMPORTANT: Event Delegation: Implementing Page Navigation
/* 
  Steps:
  1. Get the parent element.
  2. Add a single event listener to the parent.
  3. Matching strategy - Check if the clicked element is the desired child element. eg: <a>
  4. Perform the desired action. 
*/
navLinksContainer.addEventListener('click', (e) => {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

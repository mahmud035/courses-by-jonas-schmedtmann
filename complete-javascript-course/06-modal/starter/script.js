'use strict';

// Selecting elements
const showModalButtons = document.querySelectorAll('.show-modal');
const modalElement = document.querySelector('.modal');
const overlayElement = document.querySelector('.overlay');
const closeModalIcon = document.querySelector('.close-modal');

// Function to open the modal
const openModal = () => {
  modalElement.classList.remove('hidden');
  overlayElement.classList.remove('hidden');
};

// Function to close the modal
const closeModal = () => {
  modalElement.classList.add('hidden');
  overlayElement.classList.add('hidden');
};

// Open modal button click event
showModalButtons.forEach((showModalButton) => {
  showModalButton.addEventListener('click', () => {
    openModal();
  });
});

// Close modal icon click event
closeModalIcon.addEventListener('click', () => {
  closeModal();
});

// Close modal on ESC key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modalElement.classList.contains('hidden')) {
    closeModal();
  }
});

// Close modal when clicking outside of it (on the overlay)
overlayElement.addEventListener('click', () => {
  closeModal();
});

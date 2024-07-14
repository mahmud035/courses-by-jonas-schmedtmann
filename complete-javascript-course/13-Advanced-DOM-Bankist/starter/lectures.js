'use strict';

//* Selecting, Creating, and Deleting Elements

// 1. Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); // NodeList

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // HTMLCollection

console.log(document.getElementsByClassName('btn')); // HTMLCollection

// IMPORTANT: Keep In Mind: HTMLCollection vs NodeList
// HTMLCollection is always live, meaning it updates automatically when the document changes.
// The NodeList returned by querySelectorAll is static, meaning it does not automatically update when the document changes.

// 2. Creating and Inserting elements
// .insertAdjacentHTML(position, text) -> option-1
// .createElement -> option-2

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `
  <p>We use cookies for improved functionality and analytics.</p>
  <button class="btn btn--close-cookie">Got it!</button>
`;

header.prepend(message); // NOTE: inserts message as a first child of the header
// header.append(message); // NOTE: inserts message as a last child of the header

// header.before(message); // inserts message before the header element as a siblings
// header.after(message); // inserts message after the header element as a siblings

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
  // header.removeChild(message);
});

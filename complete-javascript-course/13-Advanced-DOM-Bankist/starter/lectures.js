'use strict';

//* Selecting, Creating, and Deleting Elements

/* 
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

//* Styles, Attributes and Classes

// Styles (basic)
// element.style.property = new style
message.style.backgroundColor = '#37383d';
message.style.borderRadius = '10px';
message.style.width = '110%';

console.log(message.style.height); // nothing will find because we did't set the height property explicitly
console.log(message.style.backgroundColor); // rgb(55, 56, 61) of #37383d

// NOTE: Get property value which we don't set explicitly using getComputedStyle() function
console.log(getComputedStyle(message).height); // 50px

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px'; // 80px

document.documentElement.style.setProperty('--color-primary', '#ccc');

// Attributes
const logo = document.querySelector('.nav__logo');

// Get attribute value
console.log(logo.src); // http://127.0.0.1:5500/img/logo.png
console.log(logo.getAttribute('src')); // img/logo.png

// Change attribute value. Syntax: element.attribute = new value
logo.alt = 'Beautiful logo';

// Set new attribute and it's value. Syntax: element.setAttribute(attribute, value);
logo.setAttribute('company', 'Bankist');

// Data attributes
console.log(logo.dataset.versionNumber); // 3.0

// Classes
logo.classList.add('class1', 'class2', 'class3', 'class4');
logo.classList.remove('class1', 'class2');
logo.classList.toggle('class3');
logo.classList.contains('class4'); 

*/

//* Event Propagation in Practice (Bubbling)

// rgb(255, 255, 255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  // e.stopPropagation();
  console.log('a', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // e.stopPropagation();
  console.log('ul', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  // e.stopPropagation();
  console.log('nav', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});

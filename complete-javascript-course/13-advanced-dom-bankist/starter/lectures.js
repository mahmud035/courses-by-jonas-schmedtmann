'use strict';

//* Selecting, Creating, and Deleting Elements
//* Styles, Attributes and Classes

/* 
{
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
  // option-1 -> .insertAdjacentHTML(position, text)
  // option-2 -> .createElement (better to use this one))

  const message = document.createElement('div');
  message.classList.add('cookie-message');
  message.innerHTML = `
  <p>We use cookies for improved functionality and analytics.</p>
  <button class="btn btn--close-cookie">Got it!</button>`;

  header.prepend(message); // NOTE: inserts message as a first child of the header
  header.append(message); // NOTE: inserts message as a last child of the header

  // header.before(message); // inserts message before the header element as a siblings
  // header.after(message); // inserts message after the header element as a siblings

  // 3. Delete elements
  document.querySelector('.btn--close-cookie').addEventListener('click', () => {
    message.remove();
    // header.removeChild(message);
  });

  // Styles, Attributes and Classes

  // 4. Styles (basic)
  // element.style.property = new style

  message.style.backgroundColor = '#37383d';
  message.style.borderRadius = '8px';
  message.style.width = '80%';

  console.log(message.style.height); // nothing will find because we did't set the height property explicitly
  console.log(message.style.backgroundColor); // rgb(55, 56, 61) equivalents of #37383d

  // NOTE: Get property value which we don't set explicitly using getComputedStyle() function
  console.log(getComputedStyle(message).height); // 50px

  message.style.height =
    Number.parseFloat(getComputedStyle(message).height) + 30 + 'px'; // 80px

  document.documentElement.style.setProperty('--color-primary', '#ccc');

  // 5. Attributes
  const logo = document.querySelector('.nav__logo');

  // Get attribute value. Syntax: element.getAttribute(attributeName)
  console.log(logo.src); // http://127.0.0.1:5500/images/logo.png
  console.log(logo.getAttribute('src')); // images/logo.png

  // Set new attribute. Syntax: element.setAttribute(attributeName, attributeValue);
  logo.setAttribute('company', 'Bankist');

  // Change attribute value. Syntax: element.attributeName = new value
  logo.alt = 'Beautiful logo';

  // IMPORTANT: Data attributes
  console.log(logo.dataset.versionNumber); // 3.0

  // 6. Classes
  logo.classList.add('class1', 'class2', 'class3', 'class4');
  logo.classList.remove('class1', 'class2');
  logo.classList.toggle('class3');
  logo.classList.contains('class4');
}
 */

//* Event Propagation: Bubbling and Capturing

{
  // 🧠 MUST READ: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648965#
  // Bubbling: Bottom to Top
  // Capturing: Top to Bottom
  // NOTE: By default, event listener works in bubbling phase. But we can make it work in capturing phase by passing a third argument as `true` in the addEventListener function.
}

//* Event Propagation in Practice (Bubbling)

/* 
{
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const randomColor = () =>
    `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

  document.querySelector('.nav__link').addEventListener('click', function (e) {
    // e.stopPropagation();
    console.log('a', e.target, e.currentTarget);
    console.log(e.currentTarget === this); // true
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
}
 */

//* DOM Traversing

/* 
  Traversing from a Node::

  parentElement: Accesses the parent node of an element.
  children: Accesses all child elements of an element.
  firstElementChild: Accesses the first child element.
  lastElementChild: Accesses the last child element.
  previousElementSibling: Accesses the previous sibling element.
  nextElementSibling: Accesses the next sibling element. 
*/

/* 
{
  const h1 = document.querySelector('h1');

  // Going Downwards: child
  console.log(h1.querySelectorAll('.highlight'));
  console.log(h1.children); // Accesses all child elements of h1
  console.log(h1.firstElementChild); // Accesses the first child element of h1
  console.log(h1.lastElementChild); // Accesses the last child element of h1

  h1.firstElementChild.style.color = 'white';
  h1.lastElementChild.style.color = 'gray';

  // Going Upwards: parents
  console.log(h1.parentNode);
  console.log(h1.parentElement);

  // IMPORTANT: & Need To Remember & Will Use It a Lot:
  // The element.closest() method in JavaScript is used to find the closest ancestor of the current element (or the element itself) that matches a specified CSS selector. It traverses the element and its ancestors (up the DOM tree) until it finds a match. If no matching element is found, it returns `null`.

  h1.closest('.header').style.background = 'var(--gradient-secondary)';
  h1.closest('h1').style.background = 'var(--gradient-primary)'; // itself

  // Going Sideways: siblings
  console.log(h1.previousElementSibling);
  console.log(h1.nextElementSibling);

  // Tricks
  console.log(h1.parentNode.children);
  console.log(h1.parentElement.children);

  [...h1.parentElement.children].forEach((element) => {
    if (element !== h1) element.style.transform = 'scale(0.5)';
  });
}
 */

//* The Intersection Observer API

{
  // 🧠 Must Visit This Link: https://chatgpt.com/share/a4c4335e-1b67-463b-b613-091e4cf92af7
  // 👁️ https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648993?start=197#notes
}

//* Lifecycle DOM Events

/* 
{
  document.addEventListener('DOMContentLoaded', (e) => {
    console.log('HTML parsed and DOM tree built', e);
  });

  window.addEventListener('load', (e) => {
    console.log('Page fully loaded, including images!', e);
  });

  // This event fires when the user is trying to leave the page (e.g., closing the tab, refreshing the page, or navigating to a different URL). It allows you to display a confirmation dialog to the user, asking if they really want to leave the page. This can be useful for preventing accidental navigation away from a page where the user has unsaved changes.
  // Most modern browsers do not allow custom messages in the confirmation dialog for security reasons. Instead, they display a generic message.

  // window.addEventListener('beforeunload', (e) => {
  //   e.preventDefault();
  //   e.returnValue = ''; // This line is required for some browsers to show the confirmation dialog
  //   console.log(e);
  // });
}
 */

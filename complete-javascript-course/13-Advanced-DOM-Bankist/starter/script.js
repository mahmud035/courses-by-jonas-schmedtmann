'use strict';

// Select Elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navLinksContainer = document.querySelector('.nav__links');
const section1 = document.querySelector('#section--1');
const allSections = document.querySelectorAll('.section');

const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

const lazyImages = document.querySelectorAll('.features__img');
const features = document.querySelector('.features');

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

// Tabbed Component (using Event Delegation)
tabsContainer.addEventListener('click', (e) => {
  // Get clicked tab
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Get clicked tabId
  const tabId = clicked.dataset.tab;

  // Remove active classes
  tabs.forEach((tab) => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach((tabContent) =>
    tabContent.classList.remove('operations__content--active')
  );

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${tabId}`)
    .classList.add('operations__content--active');
});

// Navbar Menu Fade Animation (using Event Delegation)
const handleHover = (e, opacity) => {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    // Get all links & logo
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    // Change opacity of the links
    siblings.forEach((element) => {
      if (element !== link) element.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};
nav.addEventListener('mouseover', (e) => handleHover(e, 0.5));
nav.addEventListener('mouseout', (e) => handleHover(e, 1));

// Sticky Navigation (using Intersection Observer API)
const navHeight = nav.getBoundingClientRect().height;

// Callback
const stickyNav = (entries) => {
  const [entry] = entries;

  // NOTE: header টা যখন viewport এর বাইরে থাকবে, শুধুমাত্র তখনই nav এ "sticky" class add হবে।
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // Use the viewport as the root (Default)
  rootMargin: `-${navHeight}px`, // Need to provide negative value in this case
  threshold: 0,
});
headerObserver.observe(header);
/* 
  NOTE: threshold
  Target Element টা কতটুকু Visible হলে Callback Function টা Execute হবে।
  It can be a single number or an array of numbers between 0 and 1.

  0: The callback is triggered as soon as any part of the target is visible.
  1: The callback is triggered only when 100% of the target is visible.
  An array: The callback is triggered for each specified visibility percentage.

  Default: 0
*/

// Revealing Sections on Scroll (using Intersection Observer API)
// Callback
const revealSection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const section = entry.target;
      section.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  threshold: 0.1,
  // NOTE: যখন section এর 10% অংশ viewport এর মধ্যে আসবে, তখন revealSection callback function টা execute হবে।
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy Loading Images (using Intersection Observer API)
// NOTE: Lazy loading images means loading them only when they are about to enter the viewport, which can improve page load time.

// Callback
const loadImage = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      // Replace src with data-src
      img.src = img.dataset.src;
      img.classList.remove('lazy-img');
      observer.unobserve(img);
    }
  });
};

const lazyImageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  // NOTE: The callback is triggered as soon as any part of the img is visible.
});
lazyImages.forEach((img) => lazyImageObserver.observe(img));

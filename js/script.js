// establecemos el año actual en la pagina.
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// navegacion mobil
// seleccionamos el elemento cuando hacemos click en el boton
const btnNavEl = document.querySelector('.btn-mobile-nav');
// seleccionamos el header
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

//////////////////////////////////////////////////
// Smooth scrolling application
// select only those with the href property available
const allLinks = document.querySelectorAll('a:Link');
// add an event listener to all of this allLinks on click
allLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const href = link.getAttribute('href');
    // scroll back to top
    // Logos
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // close mobile navigaton
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

//////////////////////////////////////////////////
// Sticky navigation
// intersectional server

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    }
    if (ent.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // inside the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);

//////////////////////////////////////////////////
// fixing flexbox gap property missing in some safari versions

function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}

checkFlexGap();

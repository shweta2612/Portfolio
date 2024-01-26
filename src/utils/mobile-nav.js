// import '../src/main.js';

const mobileNav = () => {
const headerBtn = document.querySelector('button');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav__link');

//State
let isMobileNavOpen = false;
console.log(isMobileNavOpen);

headerBtn.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
        mobileeNav.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        mobileNav.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
  });

  mobileLinks.forEach(Link => {
    Link.addEventListener('click', () => {
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
  });
};

export default mobileNav;


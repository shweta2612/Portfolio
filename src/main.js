import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

import mobileNav from '..utils/mobile-nav';


// const mobileNav = () => {
//     const headerBtn = document.querySelector('button');
//     const mobileNav = document.querySelector('.mobile-nav');
//     const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    
//     //State
//     let isMobileNavOpen = false;
//     console.log(isMobileNavOpen);
    
//     headerBtn.addEventListener('click', () => {
//         isMobileNavOpen = !isMobileNavOpen;
//         if (isMobileNavOpen) {
//             mobileNav.style.display = 'flex';
//             document.body.style.overflow = 'hidden';
//         } else {
//             mobileNav.style.display = 'none';
//             document.body.style.overflow = 'auto';
//         }
//       });
    
//       mobileLinks.forEach(Link => {
//         Link.addEventListener('click', () => {
//             isMobileNavOpen = false;
//             mobileNav.style.display = 'none';
//             document.body.style.overflow = 'auto';
//         });
//       });
//     };
    
    // export default mobileNav;

mobileNav();

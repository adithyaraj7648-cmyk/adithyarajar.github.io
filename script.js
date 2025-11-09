// Reveal animations on scroll
const fadeElems = document.querySelectorAll('.fade-in');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  
  fadeElems.forEach(elem => {
    const elemTop = elem.getBoundingClientRect().top;
    
    if (elemTop < triggerBottom) {
      elem.style.opacity = 1;
      elem.style.transform = 'translateY(0)';
    }
  });
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

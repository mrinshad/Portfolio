const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

backToTopButton.addEventListener("click", goToTop);

// Add the toggle blur functionality
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  // Toggle the overlay when hamburger is clicked
  navbarToggler.addEventListener('click', function() {
    menuOverlay.classList.toggle('active');
  });
  
  // Close menu when clicking outside or on a link
  menuOverlay.addEventListener('click', function() {
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Simulate toggle click to close the menu
    }
  });
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click(); // Simulate toggle click to close the menu
      }
    });
  });
});

// Scroll reveal animations
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}

// Add reveal classes to elements on page load
document.addEventListener('DOMContentLoaded', function() {
  // Add reveal class to all section headings
  const sectionHeadings = document.querySelectorAll('.section-name');
  sectionHeadings.forEach(heading => heading.classList.add('reveal'));
  
  // Add reveal class to all project cards with staggered delays
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.classList.add('reveal');
    card.style.transitionDelay = `${0.1 * (index % 3)}s`;
  });
  
  // Add reveal class to about section content
  const aboutContent = document.querySelector('.about-us .content');
  if (aboutContent) aboutContent.classList.add('reveal');
  
  // Add reveal class to contact form
  const contactForm = document.querySelector('.contact-section form');
  if (contactForm) contactForm.classList.add('reveal');
  
  // Check for elements to reveal on initial load
  revealOnScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', revealOnScroll);
  
  // Page load complete animation
  document.body.classList.add('loaded');
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add subtle parallax effect
window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;
  
  // Parallax effect for landing section
  const landing = document.querySelector('.landing');
  if (landing) {
    landing.style.transform = `translateY(${scrollPosition * 0.03}px)`;
  }
  
  // Subtle rotation for project cards on scroll
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    const rotateAmount = Math.sin(scrollPosition / 1000 + index) * 1;
    card.style.transform = `rotate(${rotateAmount}deg)`;
  });
});


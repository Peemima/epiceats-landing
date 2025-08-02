// JavaScript for smooth scrolling and menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Hero Headline Word Animation Delay
  const heroWords = document.querySelectorAll('.animated-hero-word');
  heroWords.forEach((word, index) => {
    word.style.animationDelay = `${index * 0.12}s`;
  });

  // Mobile Menu Toggle (for small screens)
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('hidden');
    });
  }
});
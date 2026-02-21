// Simple scroll animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = 0;
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    if(window.scrollY + window.innerHeight > section.offsetTop + 100){
       section.style.opacity = 1;
       section.style.transform = 'translateY(0)';
    }
  });
});

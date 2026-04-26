const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = window.scrollY + window.innerHeight;
    if(top > sec.offsetTop + 100){
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec=>{
  sec.style.opacity=0;
  sec.style.transform="translateY(40px)";
  sec.style.transition="all 0.8s ease";
});
---Chuyen khoan---
// Hamburger menu
var toggle = document.getElementById("menu-toggle");
var navLinks = document.getElementById("nav-links");
if (toggle && navLinks) {
  toggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
  });
}

// Scroll animation
var sections = document.querySelectorAll("section");
sections.forEach(function(sec) {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "all 0.8s ease";
});
window.addEventListener("scroll", function() {
  sections.forEach(function(sec) {
    if (window.scrollY + window.innerHeight > sec.offsetTop + 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

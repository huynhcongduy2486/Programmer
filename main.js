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
if (--timer < 0) {
    clearInterval(interval);
    display.textContent = "Hết hạn";
    
    // Làm mờ và ngăn chặn click
    const qrLinks = document.querySelectorAll('.qr-card');
    qrLinks.forEach(link => {
        link.style.pointerEvents = "none"; // Không cho click
        link.style.opacity = "0.3";       // Làm mờ
    });
    
    alert("Phiên thanh toán đã hết hạn!");
}

window.onload = function () {
    const fifteenMinutes = 60 * 15,
    display = document.querySelector('#timer');
    startTimer(fifteenMinutes, display);
};

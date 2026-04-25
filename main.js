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
---
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "Hết hạn";
            document.querySelector('.qr-grid').style.opacity = "0.3";
            alert("Mã QR đã hết hạn, vui lòng tải lại trang để làm mới.");
        }
    }, 1000);
}

window.onload = function () {
    const fifteenMinutes = 60 * 15,
    display = document.querySelector('#timer');
    startTimer(fifteenMinutes, display);
};

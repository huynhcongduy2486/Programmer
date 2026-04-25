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
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    let countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdown);
            display.textContent = "ĐÃ HẾT HẠN";
            
            // Khóa tất cả các link không cho bấm vào nữa
            const links = document.querySelectorAll('.qr-link');
            links.forEach(link => {
                link.style.pointerEvents = "none"; // Không cho click
                link.style.opacity = "0.2";       // Làm mờ hẳn đi
            });
            alert("Phiên thanh toán đã hết hạn, vui lòng tải lại trang!");
        }
    }, 1000);
}

window.onload = function () {
    const fifteenMinutes = 60 * 15,
    display = document.querySelector('#timer');
    startTimer(fifteenMinutes, display);
};

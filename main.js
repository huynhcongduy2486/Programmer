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
function startDonationTimer() {
    const display = document.querySelector('#timer');
    if (!display) return; // Nếu không tìm thấy id timer thì bỏ qua

    let timer = 15 * 60; // 15 phút
    let minutes, seconds;

    const countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdown);
            display.textContent = "ĐÃ HẾT HẠN";
            
            // Khóa tất cả các link ngân hàng
            const qrLinks = document.querySelectorAll('.qr-link');
            qrLinks.forEach(link => {
                link.style.pointerEvents = "none"; // Khóa click
                link.style.opacity = "0.4";        // Làm mờ thẻ
                // Đổi chữ "Bấm để thanh toán" thành thông báo
                link.querySelector('p').textContent = "Phiên đã hết hạn";
                link.querySelector('p').style.color = "#ff4d4d";
            });

            alert("Phiên thanh toán đã hết hạn, vui lòng tải lại trang nếu bạn muốn tiếp tục!");
        }
    }, 1000);
}

// Chạy bộ đếm khi web vừa load xong
document.addEventListener("DOMContentLoaded", function() {
    startDonationTimer();
});

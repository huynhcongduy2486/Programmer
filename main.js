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
var toggle = document.getElementById("menu-toggle");
var navLinks = document.getElementById("nav-links");
if (toggle && navLinks) {
  toggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}
 
 
/* ================================================
   PHẦN 2: SCROLL ANIMATION
   ================================================ */
var sections = document.querySelectorAll("section");
sections.forEach(function (sec) {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "all 0.8s ease";
});
window.addEventListener("scroll", function () {
  sections.forEach(function (sec) {
    if (window.scrollY + window.innerHeight > sec.offsetTop + 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
 
 
/* ================================================
   PHẦN 3: QR POPUP - HÀM MỞ / ĐÓNG
   ================================================ */
function showQR(bankName, acc, owner, bankFull, qrFile) {
  document.getElementById("popupBankName").textContent = bankName;
  document.getElementById("popupOwner").textContent = owner;
  document.getElementById("popupAcc").textContent = acc;
  document.getElementById("popupBankFull").textContent = bankFull;
 
  var img = document.getElementById("popupQRImg");
  var noImg = document.getElementById("popupQRNoImg");
 
  if (qrFile) {
    img.src = qrFile;
    img.style.display = "block";
    noImg.style.display = "none";
  } else {
    img.style.display = "none";
    noImg.style.display = "flex";
  }
 
  document.getElementById("qrOverlay").style.display = "flex";
  document.body.style.overflow = "hidden";
}
 
function closeQR() {
  document.getElementById("qrOverlay").style.display = "none";
  document.body.style.overflow = "";
}
 
 
/* ================================================
   PHẦN 4: GẮN SỰ KIỆN KHI TRANG LOAD XONG
   ================================================ */
document.addEventListener("DOMContentLoaded", function () {
 
  /* --- Nút ngân hàng --- */
  document.getElementById("btn-mb").addEventListener("click", function () {
    showQR("MB Bank", "0704514772", "HUYNH CONG DUY", "Ngân hàng TMCP Quân đội", "qr-mb.jpg");
  });
  document.getElementById("btn-vcb").addEventListener("click", function () {
    showQR("Vietcombank", "1053201984", "HUYNH CONG DUY", "Ngân hàng TMCP Ngoại Thương Việt Nam", "qr-vcb.jpg");
  });
  document.getElementById("btn-bidv").addEventListener("click", function () {
    showQR("BIDV", "6612909907", "HUYNH CONG DUY", "Ngân hàng TMCP Đầu tư & Phát triển Việt Nam", "qr-bidv.jpg");
  });
  document.getElementById("btn-momo").addEventListener("click", function () {
    showQR("MoMo", "0704514772", "HUYNH CONG DUY", "Ví điện tử MoMo", "");
  });
 
  /* --- Đóng popup --- */
  document.getElementById("btnCloseQR").addEventListener("click", closeQR);
  document.getElementById("qrOverlay").addEventListener("click", function (e) {
    if (e.target === this) closeQR();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeQR();
  });
 
  /* --- Countdown timer 15 phút --- */
  var totalSecs = 15 * 60;
  var timerEl = document.getElementById("payTimer");
  var iv = setInterval(function () {
    totalSecs--;
    if (totalSecs <= 0) {
      clearInterval(iv);
      timerEl.textContent = "Hết giờ";
      return;
    }
    var m = Math.floor(totalSecs / 60).toString().padStart(2, "0");
    var s = (totalSecs % 60).toString().padStart(2, "0");
    timerEl.textContent = m + ":" + s;
  }, 1000);
 
});

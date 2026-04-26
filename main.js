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
function showQRPopup(bankName, acc, owner, bankFull, qrFile) {
  document.getElementById('popupBankName').textContent = bankName;
  document.getElementById('popupOwner').textContent = owner;
  document.getElementById('popupAcc').textContent = acc;
  document.getElementById('popupBankFull').innerHTML = bankFull;
 
  var img = document.getElementById('popupQRImg');
  var noImg = document.getElementById('popupQRNoImg');
  if (qrFile) {
    img.src = qrFile;
    img.style.display = 'block';
    noImg.style.display = 'none';
  } else {
    img.style.display = 'none';
    noImg.style.display = 'flex';
  }
 
  var overlay = document.getElementById('qrOverlay');
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
 
function closeQRPopup() {
  document.getElementById('qrOverlay').style.display = 'none';
  document.body.style.overflow = '';
}
 
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeQRPopup();
});
 
/* ===== COUNTDOWN TIMER 15 PHÚT ===== */
(function() {
  let totalSecs = 15 * 60;
  const timerEl = document.getElementById('payTimer');
  const iv = setInterval(function() {
    totalSecs--;
    if (totalSecs <= 0) {
      clearInterval(iv);
      timerEl.textContent = 'Hết giờ';
      timerEl.style.fontSize = '16px';
      timerEl.classList.add('pulse');
      return;
    }
    const m = Math.floor(totalSecs / 60).toString().padStart(2, '0');
    const s = (totalSecs % 60).toString().padStart(2, '0');
    timerEl.textContent = m + ':' + s;
    if (totalSecs <= 60) timerEl.classList.add('pulse');
  }, 1000);
})();

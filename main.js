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
const BANKS = {
  mbbank: {
    name: 'MB Bank',
    fullName: 'Ngân hàng Quân đội',
    acc: '0704514772',
    owner: 'HUYNH CONG DUY',
    qr: 'https://img.vietqr.io/image/mbbank-0704514772-compact.jpg',
    link: 'https://vietqr.net/p/0704514772'
  },
  bidv: {
    name: 'BIDV',
    fullName: 'Ngân hàng Đầu tư & Phát triển',
    acc: '6612909907',
    owner: 'MAYA',
    qr: 'https://img.vietqr.io/image/bidv-6612909907-compact.jpg',
    link: 'https://vietqr.net/p/6612909907'
  },
  momo: {
    name: 'MoMo',
    fullName: 'Ví điện tử MoMo',
    acc: '0704514772',
    owner: 'HUYNH CONG DUY',
    qr: 'https://img.vietqr.io/image/momo-0704514772-compact.jpg',
    link: 'https://vietqr.net/p/0704514772'
  },
};
 
function openQR(key) {
  const b = BANKS[key];
  document.getElementById('bankSelectView').style.display = 'none';
 
  const panel = document.getElementById('qrPanel');
  panel.classList.add('show');
 
  document.getElementById('qrBankBadge').textContent = b.name;
  document.getElementById('qrImage').src = b.qr;
  document.getElementById('qrImage').onerror = function() {
    this.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(b.link);
  };
  document.getElementById('qrOwner').textContent = b.owner;
  document.getElementById('qrAcc').textContent = b.acc;
  document.getElementById('qrBank').textContent = b.fullName;
  document.getElementById('qrPageLink').href = b.link;
}
 
function closeQR() {
  document.getElementById('bankSelectView').style.display = 'block';
  document.getElementById('qrPanel').classList.remove('show');
}
 
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

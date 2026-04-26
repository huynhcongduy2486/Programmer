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
</script>
function showQR(bankName, acc, owner, bankFull, qrFile) {
  const overlay = document.getElementById("qrOverlay");
  const img = document.getElementById("popupQRImg");
  const noImg = document.getElementById("popupQRNoImg");

  document.getElementById("popupBankName").textContent = bankName;
  document.getElementById("popupOwner").textContent = owner;
  document.getElementById("popupAcc").textContent = acc;
  document.getElementById("popupBankFull").textContent = bankFull;

  if (qrFile && qrFile !== "") {
    img.src = "./" + qrFile; 
    img.style.display = "block";
    noImg.style.display = "none";
  } else {
    img.style.display = "none";
    noImg.style.display = "flex";
  }

  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeQR() {
  document.getElementById("qrOverlay").style.display = "none";
  document.body.style.overflow = "";
}

window.onload = function() {
  const mb = document.getElementById("btn-mb");
  const vcb = document.getElementById("btn-vcb");
  const bidv = document.getElementById("btn-bidv");
  const momo = document.getElementById("btn-momo");

  if (mb) {
    mb.onclick = () => showQR("MB Bank","0704514772","HUYNH CONG DUY","Ngân hàng TMCP Quân đội","qr-mb.jpg");
  }
  if (vcb) {
    vcb.onclick = () => showQR("Vietcombank","1053201984","HUYNH CONG DUY","Ngân hàng TMCP Ngoại Thương Việt Nam","qr-vcb.jpg");
  }

  if (bidv) {
    bidv.onclick = () => showQR("BIDV","6612909907","HUYNH CONG DUY","Ngân hàng TMCP Đầu tư & Phát triển Việt Nam","qr-bidv.jpg");
  }
  if (momo) {
    momo.onclick = () => showQR("MoMo","0704514772","HUYNH CONG DUY","Ví điện tử MoMo","");
  }
  document.getElementById("btnCloseQR").onclick = closeQR;

  document.getElementById("qrOverlay").onclick = function(e) {
    if (e.target === this) closeQR();
  };

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeQR();
  });

  // TIMER
  let totalSecs = 15 * 60;
  const timerEl = document.getElementById("payTimer");

  setInterval(function() {
    totalSecs--;
    if (totalSecs <= 0) {
      timerEl.textContent = "Hết giờ";
      return;
    }
    let m = Math.floor(totalSecs / 60).toString().padStart(2,"0");
    let s = (totalSecs % 60).toString().padStart(2,"0");
    timerEl.textContent = m + ":" + s;
  }, 1000);
};
</script>
------
<script>
let currentBank = "";
let currentNumber = "";

currentAcc = acc;

if (bankName.includes("MB")) currentBank = "MB";
else if (bankName.includes("Vietcombank")) currentBank = "VCB";
else if (bankName.includes("BIDV")) currentBank = "BIDV";
else if (bankName.includes("MoMo")) currentBank = "MOMO";
// Lưu tài khoản
document.getElementById("copyAccBtn").onclick = function () {
  navigator.clipboard.writeText(currentAcc);
  alert("Đã lưu: " + currentAcc);
};

// Chuyển khoản
document.getElementById("openBankBtn").onclick = function () {

  if (currentBank === "MB") {
    window.location.href = "mbbank://";
  }
  else if (currentBank === "VCB") {
    window.location.href = "vietcombank://";
  }
  else if (currentBank === "BIDV") {
    window.location.href = "bidvsmartbanking://";
  }
  else if (currentBank === "MOMO") {
    window.location.href = "momo://";
  }
  else {
    alert("Không xác định ngân hàng");
  }
};

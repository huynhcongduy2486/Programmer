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
let currentBank = "";   // Lưu ngân hàng đang chọn
let currentNumber = ""; // Lưu số tài khoản

// --- Khi bấm vào các nút ngân hàng ---
document.getElementById("btn-mb").onclick = function () {
    currentBank = "MB";
    currentNumber = "0704514772";
    showQR();
};

document.getElementById("btn-vcb").onclick = function () {
    currentBank = "VCB";
    currentNumber = "1053201984";
    showQR();
};

document.getElementById("btn-bidv").onclick = function () {
    currentBank = "BIDV";
    currentNumber = "6612909907";
    showQR();
};

document.getElementById("btn-momo").onclick = function () {
    currentBank = "MOMO";
    currentNumber = "0704514772";
    showQR();
};

// Hàm hiện QR
function showQR() {
    document.getElementById("qrOverlay").style.display = "flex";
}

// --- Copy số tài khoản ---
document.getElementById("copyBtn").onclick = function () {
    navigator.clipboard.writeText(currentNumber);
    alert("Đã lưu số tài khoản: " + currentNumber);
};

// --- Mở app chuyển khoản ---
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
        alert("Không xác định ngân hàng.");
    }
};
</script>

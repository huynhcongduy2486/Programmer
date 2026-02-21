function setLang(lang){
  if(lang === 'en'){
    document.getElementById("subtitle").innerText =
      "Programmer | Technology Student";

    document.getElementById("aboutTitle").innerText = "About Me";
    document.getElementById("aboutText").innerText =
      "I am a student passionate about programming and building real-world technology products.";

    document.getElementById("skillTitle").innerText = "Skills";
    document.getElementById("bookTitle").innerText = "Programming Books";
  }
  else{
    document.getElementById("subtitle").innerText =
      "Lập trình viên | Sinh viên công nghệ";

    document.getElementById("aboutTitle").innerText = "Giới thiệu";
    document.getElementById("aboutText").innerText =
      "Tôi là sinh viên đam mê lập trình và xây dựng sản phẩm công nghệ thực tế.";

    document.getElementById("skillTitle").innerText = "Kỹ năng";
    document.getElementById("bookTitle").innerText = "Sách về lập trình";
  }
}

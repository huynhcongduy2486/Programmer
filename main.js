const text = "Web Developer | Programmer | Student";
let i = 0;
const speed = 80;

function typeEffect(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}

window.onload = typeEffect;

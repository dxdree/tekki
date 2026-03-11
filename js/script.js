function checkPassword(){

let password = document.getElementById("password").value;
let card = document.getElementById("card");

if(password === "tekki" || password === "Tekki" || password === "TEKKI"){

window.location.href = "love.html";

}else{

card.classList.add("shake");

setTimeout(()=>{
card.classList.remove("shake");
},400);

document.getElementById("popup").style.display="flex";

}

}

function closePopup(){
document.getElementById("popup").style.display="none";
}

function openEnvelope() {
  typeWriter();
}

function typeWriter() {
  //const text = "HI TEKKI \n\n SO UMM ... I MADE THIS LITTLE PAGE JUST FOR YOU \n\n BECAUSE YOU MAKE MY HEART SKIPS A BEAT WHENEVER I THINK ABOUT YOU \n\n AND HONESTLY... I THINK ABOUT YOU A LOT \n\n LOVE, YOUR LEONNA \u2764\uFE0F";
  const text = "HI TEKKI\n\nI KNOW THIS PAGE IS A LITTLE SILLY\n\nBUT I WANTED TO MAKE SOMETHING JUST FOR YOU\n\nBECAUSE SOMEHOW WITHOUT EVEN TRYING, YOU MAKE MY HEART SKIP A BEAT WHENEVER I THINK ABOUT YOU\n\nAND HONESTLY... I THINK ABOUT YOU A LOT\n\nI JUST THOUGHT YOU SHOULD KNOW THAT\n\nLOVE, YOUR LEONNA \u2764\uFE0F";
  const element = document.querySelector('.paper p');
  element.innerHTML = '';
  let i = 0;
  
  const timer = setInterval(() => {
    if (i < text.length) {
      const char = text.charAt(i);
      if (char === '\n') {
        element.appendChild(document.createElement('br'));
      } else {
        element.appendChild(document.createTextNode(char));
      }
      i++;
    } else {
      clearInterval(timer);
    }
  }, 75);
}

// Auto-start typewriter on page load
window.addEventListener('DOMContentLoaded', function() {
  typeWriter();
  if (document.querySelector('.paper')) {
    createHearts();
  }
});
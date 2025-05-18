function getRandomHexColor() {
  return  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;}
const div=document.querySelector(".widget");

const button=div.querySelector(".change-color");
const span=div.querySelector(".color");

button.addEventListener("click",()=>{
const color=getRandomHexColor();
document.body.style.backgroundColor=color;
span.textContent=color;
})


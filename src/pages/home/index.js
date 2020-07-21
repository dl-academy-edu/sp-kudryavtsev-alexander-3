const wrapper = document.querySelector(".slider__wrapper");
const innerWrapper = document.querySelector(".slider__inner-wrapper");
const pagination = document.querySelector(".slider__pagination");
const buttonBack = document.querySelector(".slider__button_back");
const buttonNext = document.querySelector(".slider__button_next");
const slides = document.querySelectorAll(".slider_slide");

let shearWidth = +getComputedStyle(wrapper).width.split("px")[0];
let numberSlides = innerWrapper.querySelectorAll(".slider_slide").lenght - 1;

let activeSlide = 0;
let dots = [];

function initWidthSlides() {
  shearWidth = +getComputedStyle(wrapper).width.split("px")[0]; 
  for(let i = 0; i < slides.length; i++){
    slides[i].style.width = shearWidth + "px";
  }
}
initWidthSlides();


function init() {
  
  for(let i = 0; i < slides.length; i++) {
    let dot = document.createElement("button");
    dot.classList.add("slider__dot");
    if(i === activeSlide) {
      dot.classList.add("slider__dot_active");
    }
    dot.addEventListener("click", function () {
      setActivSlide(i);
    })
    dots[dots.length] = dot;
    pagination.insertAdjacentElement("afterend", dot); 
  } 
}

init();


function setActivSlide(index) {
  if(index < 0 || index > numberSlides) {
    return;
  }
  
  dots[activeSlide].classList.remove("slider__dot_active"); 
  dots[index].classList.add("slider__dot_active");
  if(activeSlide - index > 0) {
    buttonNext.removeAttribute("disabled");
    
  }
  if(activeSlide - index < 0) {
    buttonBack.removeAttribute("disabled");
  }
  
  if(index === 0) {
    buttonBack.setAttribute("disabled", "disabled");
   }

   if(index === numberSlides) {
    buttonNext.setAttribute("disabled", "disabled");
   }
   
   innerWrapper.style.marginLeft = "-" + shearWidth*index + "px";
   activeSlide = index; 
  };


 buttonNext.addEventListener("click", function () {
  const index = activeSlide + 1; 
  setActivSlide(index);
 })

 buttonBack.addEventListener("click", function () {
  const index = activeSlide - 1; 
  setActivSlide(index);
 })

 window.addEventListener("resize", function () {
   initWidthSlides();
   setActivSlide(activeSlide);
 })
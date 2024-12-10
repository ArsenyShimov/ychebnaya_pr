let menu = document.querySelector(".min2");
let menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click",function(e){
e.preventDefault("show-menu");
menu.classList.toggle("show-menu");
menuToggle.classList.toggle("active");
});

window.addEventListener('resize',function(){
if (this.window.innerHeight > 360 && menu.classList.contains('show-menu')){
    menu.classList.remove('show-menu');
    menuToggle.classList.toggle("active");
}
});

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.blok1'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide(){
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}
function showNextSlide(){
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}
function updateSlider(){
    slides.forEach((slide,index)=>{
        if(index === slideIndex){
            slide.style.display='block';
        }else{
            slide.style.display='none';
        }
    });
}
updateSlider();
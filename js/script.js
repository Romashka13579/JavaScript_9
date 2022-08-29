var slider2Owrerflow = document.querySelector(".slider-2-overflow");
var slider2Full = document.querySelector(".slider-2-full");
var rightBtn = document.getElementById("left-btn");
var leftBtn = document.getElementById("right-btn");
var slides = document.querySelectorAll(".slide");
var interval = 3000;

var i = 1;
var slideId;

var firstClone = slides[0].cloneNode(true);
var lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slider2Full.append(firstClone);
slider2Full.prepend(lastClone);

const slideWidth = slides[i].clientWidth;

slider2Full.style.transform = `translateX(${-slideWidth * i}px)`;

const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide();
    }, interval);
}

slider2Full.addEventListener('transitionend', () => {
    slides = document.querySelectorAll(".slide");
    if (slides[i].id === firstClone.id) {
        slider2Full.style.transition = "none";
        i = 1;
        slider2Full.style.transform = `translateX(${-slideWidth * i}px)`;
    }
    slides = document.querySelectorAll(".slide");
    if (slides[i].id === lastClone.id) {
        slider2Full.style.transition = "none";
        i = slides.length - 2;
        slider2Full.style.transform = `translateX(${-slideWidth * i}px)`;
    }
});

const moveToNextSlide = () => {
    slides = document.querySelectorAll(".slide");
    if(i >=slides.length - 1){return;}
    i++;
    slider2Full.style.transform = `translateX(${-slideWidth * i}px)`;
    slider2Full.style.transition = ".7s";
}

const moveToPreviousSlide = () => {
    slides = document.querySelectorAll(".slide");
    if(i <= 0){return;}
    i--;
    slider2Full.style.transform = `translateX(${-slideWidth * i}px)`;
    slider2Full.style.transition = ".7s";
}

slider2Full.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});
rightBtn.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});
leftBtn.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});

slider2Full.addEventListener('mouseout', startSlide);
rightBtn.addEventListener('mouseout', startSlide);
leftBtn.addEventListener('mouseout', startSlide);

rightBtn.addEventListener('click', moveToNextSlide);
leftBtn.addEventListener('click', moveToPreviousSlide);

startSlide();
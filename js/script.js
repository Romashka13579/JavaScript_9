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

var slider3Owrerflow = document.querySelector(".slider-3-overflow");
var slider3Full = document.querySelector(".slider-3-full");
var rightBtn3 = document.getElementById("right-btn-3");
var leftBtn3 = document.getElementById("left-btn-3");
var slides3 = document.querySelectorAll(".slide-3");

var i_3 = 1;
var slideId3;
var x = -1;

var firstClone3 = slides3[0].cloneNode(true);
var lastClone3 = slides3[slides3.length - 1].cloneNode(true);

firstClone3.id = "first-clone-3";
lastClone3.id = "last-clone-3";

slider3Full.append(firstClone3);
slider3Full.prepend(lastClone3);

const slideWidth3 = slides3[i_3].clientWidth;

slider3Full.style.transform = `translateX(${-slideWidth * i_3}px)`;

const startSlide3 = () => {
    slideId3 = setInterval(() => {
        moveToNextSlide3();
    }, interval);
}

slider3Full.addEventListener('transitionend', () => {
    slides3 = document.querySelectorAll(".slide-3");
    if (slides3[i_3].id === firstClone3.id) {
        slider3Full.style.transition = "none";
        i_3 = 1;
        slider3Full.style.transform = `translateX(${-slideWidth * i_3}px)`;
    }
    slides3 = document.querySelectorAll(".slide-3");
    if (slides3[i_3].id === lastClone3.id) {
        slider3Full.style.transition = "none";
        i_3 = slides3.length - 2;
        slider3Full.style.transform = `translateX(${-slideWidth * i_3}px)`;
    }
});

const moveToNextSlide3 = () => {
    slides3 = document.querySelectorAll(".slide-3");
    if(i_3 >=slides3.length - 1){return;}
    i_3++;
    slider3Full.style.transform = `translateX(${-slideWidth * i_3}px)`;
    slider3Full.style.transition = ".7s";
}

const moveToPreviousSlide3 = () => {
    slides3 = document.querySelectorAll(".slide-3");
    if(i_3 <= 0){return;}
    i_3--;
    slider3Full.style.transform = `translateX(${-slideWidth * i_3}px)`;
    slider3Full.style.transition = ".7s";
}

slider3Full.addEventListener('mouseenter', () => {
    clearInterval(slideId3);
});
rightBtn3.addEventListener('mouseenter', () => {
    clearInterval(slideId3);
});
leftBtn3.addEventListener('mouseenter', () => {
    clearInterval(slideId3);
});

slider3Full.addEventListener('mouseout', startSlide3);
rightBtn3.addEventListener('mouseout', startSlide3);
leftBtn3.addEventListener('mouseout', startSlide3);

rightBtn3.addEventListener('click', moveToNextSlide3);
leftBtn3.addEventListener('click', moveToPreviousSlide3);

startSlide3();
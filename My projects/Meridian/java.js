"use strict";

// readyTo

const readyLeftBtn = document.querySelector(".ready-left-button");
const readyRightBtn = document.querySelector(".ready-right-button");
const readyToCard = document.querySelector(".ready-to-ship-card");

const readyToItemWidth = readyToCard.firstElementChild.clientWidth + 40;
const readyToCardLeng = readyToCard.childElementCount;
let readyToindex = 0;

function changeIiagesReadyTo() {
  if (index > readyToCardLeng - 3) {
    index = 0;
  } else if (index < 0) {
    if (x.matches) {
      index = readyToCardLeng - 1;
    } else {
      index = readyToCardLeng - 3;
    }
  }

  readyToCard.style.transform = `translateX(-${readyToItemWidth * index}px)`;
}

readyRightBtn.addEventListener("click", (e) => {
  readyToindex++;
  changeIiagesReadyTo();
});
readyLeftBtn.addEventListener("click", (e) => {
  readyToindex--;
  changeIiagesReadyTo();
});

// homeAbout

const homeAboutCard = document.querySelector(".home-about-img-card");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const scrollNum = document.querySelector(".scroll-num");

const homeAboutItemWidth = homeAboutCard.firstElementChild.clientWidth;
const homeAboutCardLeng = homeAboutCard.childElementCount;

let homeAboutIndex = 0;
function changeIiagesHomeAbout() {
  if (homeAboutIndex > homeAboutCardLeng - 1) {
    homeAboutIndex = 0;
  } else if (homeAboutIndex < 0) {
    homeAboutIndex = readyToCardLeng - 1;
  }
  console.log(homeAboutItemWidth * homeAboutIndex);
  homeAboutCard.style.transform = `translateX(-${
    homeAboutItemWidth * homeAboutIndex
  }px)`;
}
function homeAboutscroll() {
  scrollNum.textContent = `${homeAboutIndex + 1}/${homeAboutCardLeng}`;
}
homeAboutscroll();
prevBtn.addEventListener("click", (e) => {
  homeAboutIndex--;
  changeIiagesHomeAbout();
  homeAboutscroll();
});
nextBtn.addEventListener("click", (e) => {
  homeAboutIndex++;
  changeIiagesHomeAbout();
  homeAboutscroll();
});

console.dir(window);

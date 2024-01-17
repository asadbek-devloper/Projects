"use strict";

const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;

let int = setInterval(blurring, 100);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.textContent = `${load}%`;
  
  bg.filter =" blur()";
}

function scale(num, inMin, inMax, outMin, outMax) {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

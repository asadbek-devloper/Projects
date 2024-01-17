"use strict";

const accardions = document.querySelectorAll(".accardion");

accardions.forEach((accardion) => {
  accardion.addEventListener("click", (acc) => {
    if (acc.currentTarget.children[0].children[1].textContent === "-") {
      acc.currentTarget.children[0].children[1].textContent = "+";
    } else {
      acc.currentTarget.children[0].children[1].textContent = "-";
    }

    accardion.classList.toggle("activeAcc");
  });
});

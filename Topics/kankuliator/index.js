"use strict";

const son1 = +prompt("Soni kiriting");

const amal = prompt(
  "Amalni  tanlang 1-qo`shish; 2-ayrish 3-ko`paytirish 4-bo`lish"
);

const son2 = +prompt("2-soni kiriting");

if (amal == 1) {
  alert(son1 + son2);
} else if (amal == 2) {
  alert(son1 - son2);
} else if (amal == 3) {
  alert(son1 * son2);
} else if (amal == 4) {
  alert(son1 / son2);
} else {
  alert("eroor");
}

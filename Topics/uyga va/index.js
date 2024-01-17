"use strict";

// ranglar 1-vazifa

const color = prompt("ingiliz tirlida ranglarni kiriting");
switch (color) {
  case "red":
    alert("Qizil");
    break;
  case "black":
    alert("qora");
    break;
  case "white":
    alert("oq");
    break;
  case "yellow":
    alert("sariq");
    break;
  case "blue":
    alert("ko`k");
    break;
  case "green":
    alert("yashil");
    break;
  case "pink":
    alert("pushti");
    break;
  case "gold":
    alert("oltin rang");
    break;
  case "orange":
    alert("apelsin rang");
    break;
  case "brown":
    alert("jigar rang");
    break;
  default:
    alert("Bizda bunaqa rang mavjud emas!");
}

// kara jadvali

for (let a = 1; a <= 10; a++) {
  for (let b = 1; b <= 10; b++) {
    let son = a * b;
    console.log(son);
  }
}
let a = 1;
while (a <= 10) {
  let b = 1;
  while (b <= 10) {
    let son = a * b;
    console.log(son);

    b++;
  }

  a++;
}
let s = 1;
do {
  let b = 1;
  do {
    let son = s * b;
    console.log(son);
    b++;
  } while (b <= 10);
  s++;
} while (s <= 10);

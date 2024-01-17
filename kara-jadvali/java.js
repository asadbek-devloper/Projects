"use strict";
let div = `<div> </div>`;
let a = [];
const b = [];
let todo = "";
const box = document.querySelector(".box");

let d = 10;

for (let i = 1; i <= d; i++) {
  for (let k = 1; k <= 10; k++) {
    div = `<div>${i + "  *  " + k + "  =  " + i * k} </div>`;
    a.push(div);
  }
  if (a.length === 10) {
    b.push(a);
    a = [];
  }
}

b.forEach((e, i) => {
  todo = `<div class="todo"><span>${i + 1}-kara</span></div>`;
  box.insertAdjacentHTML("beforeend", todo);
  e.forEach((c) => {
    box.children[i].insertAdjacentHTML("beforeend", `<div>${c}</div>`);
  });
});

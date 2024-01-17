"use strict";

const btn = document.querySelector(".button");
const box = document.querySelector(".box");
const body = document.querySelector("body");

const names = [
  `forestgreen`,
  `gold`,
  `violet`,
  `rgba(0, 21, 98, 0.422)`,
  `Lavender`,
  `Thistle`,
  `Plum`,
  `Violet`,
  `Orchid`,
  `Fuchsia`,
  `Magenta`,
  `MediumOrchid`,
  `MediumPurple`,
  `RebeccaPurple`,
  `BlueViolet`,
  `DarkViolet`,
  `DarkOrchid`,
  `DarkMagenta`,
  `Purple`,
  `Indigo`,
  `SlateBlue`,
  `DarkSlateBlue`,
  `MediumSlateBlue`,
];

function random() {
  let randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  box.style.background = `${randomName}`;
  //   body.style.background = `${randomName}`;
}

btn.addEventListener("click", (e) => {
  random();
});

Lavender;
Thistle;
Plum;
Violet;
Orchid;
Fuchsia;
Magenta;
MediumOrchid;
MediumPurple;
RebeccaPurple;
BlueViolet;
DarkViolet;
DarkOrchid;
DarkMagenta;
Purple;
Indigo;
SlateBlue;
DarkSlateBlue;
MediumSlateBlue;

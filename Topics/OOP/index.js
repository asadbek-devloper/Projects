"use strict";

// Object literal
// const user = {
//   name: "Alisher",
//   age: 16,
// };

// console.log(user);

// user.map();
// console.log(typeof user);
// console.log(typeof arr);

//  =   =   =   =OOP
// 1. Inheritance  -- meros olish

// 2. Incapsulation  --  tashqi tasirdan saqlash

// 3. Abstraction  --  mavhumlik

// 4. Polimorfism  --  ko'p shakillik

// example
/*
new Date();
new Array()
new Object();
new Set();
new Map();
new Function();
new Symbol();
new Error();
*/

// ====== Constructor Function

// const User = function (firsName, lastName, birthYear, city, job, id) {
//   this.firsName = firsName;
//   this.lastName = lastName;
//   this.birthYear = birthYear;
//   this.job = job;
//   this.id = id;
//   this.city = city;
//   //   bad practice
//   //   this.calcAge = function () {
//   //     return new Date().getFullYear() - this.birthYear;
//   //   };
// };

// User.prototype.calcAge = function () {
//   return new Date().getFullYear() - this.birthYear;
// };

/* 
    1. Bo'sh object ochib berayapti

    2. Bo'sh objectni constructorning 
       thisiga o'zlashtirayapti

    3. Function ishga tushayapti

    4. thisga berilgan objectiga berilgan prototypeni 
       constructorning o'ziga tenglashtirib qo'yadi
    
    5. thisga o'zlashtirilgan bo'sh 
       objectni return qaytarib berib yuborayapti
*/

// const alisher = new User(
//   "Alisher",
//   "Qobilov",
//   1999,
//   "Kesh",
//   "Interior designer",
//   420
// );

const Car = function (name, model, speed) {
  this.name = name;
  this.model = model;
  this.speed = speed;
  this.score = 0;
};

Car.prototype.speedUp = function () {
  if (this.score + 5 >= this.speed) {
    this.score = this.speed;
    return this.score;
  }
  this.score = this.score + 5;
  return `${this.score}`;
};

Car.prototype.break = function () {
  if (this.score - 3 <= 0) {
    this.score = 0;
    return this.score;
  }
  this.score = this.score - 3;
  return `${this.name} avtomashina ${this.score}km/h tezlikda harakatlanayapti;`;
};

Car.prototype.info = function () {
  return `name:${this.name},  model:${this.model},  maxSpeed:${this.speed}`;
};

const Electromobil = function (name, model, speed, charge) {
  Car.call(this, name, model, speed);
  this.charge = charge;
};
Electromobil.prototype = Object.create(Car.prototype);
Electromobil.prototype.speedUp = function () {
  if (this.score + 4 >= this.speed) {
    this.score = this.speed;
    return this.score;
  }
  this.charge = this.charge - 0.2;
  this.score = this.score + 4;
  return `${this.score}  ${this.charge.toFixed(1)}% quvvat`;
};

Electromobil.prototype.break = function () {
  if (this.score - 5 <= 0) {
    this.score = 0;
    return this.score;
  }
  this.score = this.score - 5;
  return `${this.score} ${this.charge.toFixed(1)}% quvvat`;
};

Electromobil.prototype.info = function () {
  return `name:${this.name},  model:${this.model},  maxSpeed:${
    this.speed
  } ${this.charge.toFixed(1)}%  quvvat`;
};
const hangze = new Electromobil("Hangze", "Tayota", 170, 100);
const Petrolmobil = function (name, model, speed, petrolBag) {
  Car.call(this, name, model, speed);
  this.petrolBag = petrolBag;
};
Petrolmobil.prototype = Object.create(Car.prototype);
Petrolmobil.prototype.speedUp = function () {
  if (this.score + 8 >= this.speed) {
    this.score = this.speed;
    return this.score;
  }
  this.petrolBag = this.petrolBag - 0.1;
  this.score = this.score + 8;
  return `${this.score}  ${this.petrolBag.toFixed(1)}L yoqilg'i`;
};

Petrolmobil.prototype.break = function () {
  if (this.score - 5 <= 0) {
    this.score = 0;
    return this.score;
  }
  this.score = this.score - 5;
  return `${this.score} ${this.petrolBag.toFixed(1)}L yoqilg'i`;
};

Petrolmobil.prototype.info = function () {
  return `name:${this.name},  model:${this.model},  maxSpeed:${
    this.speed
  } ${this.petrolBag.toFixed(1)}L yoqilg'i`;
};
// const cobalt = new Petrolmobil("Cobalt", "Chevrolet", 200, 50);

// console.log(cobalt.speedUp());
// console.log(cobalt.speedUp());
// console.log(cobalt.speedUp());
// console.log(cobalt.break());
// console.log(cobalt.break());

const cobalt = new Car("Cobalt", "Chevrolet", 200);
const matiz = new Car("Matiz", "Chevrolet", 160);
const kia = new Car("Kia k8", "Kia", 240);

// Elements

const carInfo = document.querySelector(".car-info");
const speed = document.querySelector(".speed");
const speedButton = document.querySelector(".speedUp");
const breakButton = document.querySelector(".breakUp");
const cars = document.querySelector("#cars");
let car = null;

const writeCarInfo = () => {
  carInfo.textContent = car.info();
};

const writeSpeedInfo = () => {
  speed.textContent = `${car.score} `;
};

cars.addEventListener("change", (e) => {
  const target = e.target.value;
  if (target === "matiz") {
    car = matiz;
  } else if (target === "kia") {
    car = kia;
  } else if (target === "cobalt") {
    car = cobalt;
  }
  writeCarInfo();
  writeSpeedInfo();
});

breakButton.addEventListener("click", () => {
  car.break();
  writeSpeedInfo();
});

speedButton.addEventListener("click", () => {
  car.speedUp();
  writeSpeedInfo();
});

// ====== Class  2015  ES6

class Cars {
  constructor(name, model, speed) {
    this.model = model;
    this.name = name;
    this.speed = speed;
    this.score = 0;
  }

  speedUp() {
    if (this.score + 5 >= this.speed) {
      this.score = this.speed;
      return this.score;
    }
    this.score = this.score + 5;
    return `${this.score}km/h`;
  }

  break() {
    if (this.score - 3 <= 0) {
      this.score = 0;
      return this.score;
    }
    this.score = this.score - 3;
    return `${this.score}km/h`;
  }
  info() {
    return `name:${this.name},  
    model:${this.model},  
    maxSpeed:${this.speed}`;
  }
}

class Electromobils extends Cars {
  constructor(name, model, speed, charge) {
    super(name, model, speed);
    this.charge = charge;
  }

  speedUp() {
    if (this.score + 4 >= this.speed) {
      this.score = this.speed;
      return this.score;
    }
    this.charge = this.charge - 0.2;
    this.score = this.score + 4;
    return `${this.score}km/h  ${this.charge.toFixed(1)}% quvvat`;
  }

  break() {
    if (this.score - 5 <= 0) {
      this.score = 0;
      return this.score;
    }
    this.score = this.score - 5;
    return `${this.score}km/h ${this.charge.toFixed(1)}% quvvat`;
  }

  info() {
    return `name:${this.name},  model:${this.model},  maxSpeed:${
      this.speed
    }km/h, ${this.charge.toFixed(1)}%  quvvat`;
  }
}

const jetaur = new Electromobils("Jetaur", "Jetaur Pro", 170, 100);

// console.log(jetaur.speedUp());
// console.log(jetaur.speedUp());
// console.log(jetaur.speedUp());

class Petrolmobils extends Cars {
  constructor(name, model, speed, petrolBag) {
    super(name, model, speed);
    this.petrolBag = petrolBag;
  }
  speedUp() {
    if (this.score + 8 >= this.speed) {
      this.score = this.speed;
      return this.score;
    }
    this.petrolBag = this.petrolBag - 0.1;
    this.score = this.score + 8;
    return `${this.score}km/h  ${this.petrolBag.toFixed(1)}L yoqilg'i`;
  }
  break() {
    if (this.score - 5 <= 0) {
      this.score = 0;
      return this.score;
    }
    this.score = this.score - 5;
    return `${this.score}km/h, ${this.petrolBag.toFixed(1)}L yoqilg'i`;
  }
  info() {
    return `name:${this.name},  model:${this.model},  maxSpeed:${
      this.speed
    }km/h, ${this.petrolBag.toFixed(1)}L yoqilg'i`;
  }
}

const nexia = new Petrolmobils("Nexia", "Daewoo", 180, 45);

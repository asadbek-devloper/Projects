"use strict";

//  = = = = = = = = = =    ANIMAL

class Animal {
  constructor(name, type, color, position) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.position = position;
  }
  toSee(thing) {
    console.log(`${this.name} ${thing}ni ko'rdi`);
  }

  feedUp(food) {
    console.log(`${this.name} ${food}ni yedi.`);
  }
}

class Pet extends Animal {
  constructor(name, type, color, position, owner, nickname, age) {
    super(name, type, color, position);
    this.owner = owner;
    this.nickname = nickname;
    this.age = age;
  }
  feedUp(food) {
    console.log(
      `${this.nickname}ni ${this.owner} ${food} berib ovqatlantirdi.`
    );
  }
  playGame(game) {
    console.log(
      `${this.nickname} ${this.owner} bilan ${game} o'yinini o'ynadi`
    );
  }
  hiking(location) {
    console.log(
      `${this.nickname} ${this.owner} bilan ${
        location ? location + " joyga" : "hordiq uchun"
      } sayrga chiqdi`
    );
  }
}
const hatiko = new Pet(
  "Hatiko",
  "dog",
  "brown",
  "Italy, Milan city, A.Navoiy street 23",
  "Jonas",
  "Hatiko",
  3
);
hatiko.feedUp("hamburger");
hatiko.hiking("mahalliy park");
hatiko.playGame("basebool");
console.log("==================================");
class Wild extends Animal {
  constructor(name, type, color, position) {
    super(name, type, color, position);
  }
  toFight(rival) {
    console.log(`${this.name} ${rival} bilan urushdi.`);
  }
}
class Predator extends Wild {
  constructor(name, type, color, position) {
    super(name, type, color, position);
  }
  toHunt(kill) {
    console.log(`${this.name} ${kill}ni ovladi`);
  }
}
class Herbivore extends Wild {
  constructor(name, type, color, position) {
    super(name, type, color, position);
  }
}
const lobo = new Predator("Bo'ri og'a", "wolf", "grey", "forest");
lobo.toHunt("quyon og'a");
const quyonOga = new Herbivore("Quyon og'a", "rabbit", "white", "forest");
quyonOga.feedUp("Sabiz");

// // ==========  Inheritance
// // ==========  Abstraction
// // ==========  Polimarfism
// // ==========  Incapsulation

// class AsakaBank {
//   // private field
//   // _login;
//   // _password;
//   // _cardNumber;
//   // _expiredDate;
//   // new private fields
//   #login;
//   #password;
//   #cardNumber;
//   #expiredDate;
//   constructor(firstName, lastName, cardNumber, login, password, expiredDate) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // this._login = login;
//     // this._password = password;
//     // this._cardNumber = cardNumber;
//     // this._expiredDate = expiredDate;
//     this.#login = login;
//     this.#password = password;
//     this.#expiredDate = expiredDate;
//     this.#cardNumber = cardNumber;
//   }

//   // getter
//   // getterLogin() {
//   //   return this._login;
//   // }
//   getterLogin() {
//     return this.#login;
//   }
//   // setter

//   // setterLogin(login) {
//   //   this._login = login;
//   //   return this._login;
//   // }
//   setterLogin(login) {
//     const fullname = prompt("Enter fullname");
//     if (fullname !== this.#getFullname()) {
//       return "fullname xato";
//     }
//     this.#login = login;
//     return this.#login;
//   }

//   // private methods
//   #getFullname() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   // old private method
//   // _getFullname() {
//   //   return `${this.firstName} ${this.lastName}`;
//   // }
// }

// const alisher = new AsakaBank(
//   "Alisher",
//   "Qobilov",
//   1234565432,
//   "alisher12",
//   "alisher@12",
//   "12/26"
// );
// console.log(alisher.getterLogin());
// console.log(alisher.setterLogin("alisher34"));

// // console.log(alisher.#login);

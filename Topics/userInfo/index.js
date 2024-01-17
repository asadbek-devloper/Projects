"use strict";

const firstName = prompt("Ismingizni kiriting");
const lastName = prompt("Familiyangizni kiriting");
const age = prompt("Yoshingizni kiriting");
const email = prompt("Emailingizni kiriting");
const phoneNumber = prompt("Telefon raqamingizni kiriting");
const height = prompt("Uzunligingizni kiriting");
const weight = prompt("Vazningizni kiriting");
const mather = prompt("Onangizni ismini kririting");
const father = prompt("Otangizni ismini kririting");
const brathers = [];
const sisters = [];
const friends = [];

for (;;) {
  const areYouContinue = confirm("yana do'stlaringizni kiritasizmi?");
  if (!areYouContinue) {
    break;
  }
  const friend = prompt("Do'stingizni ismini kiriting...");
  friends.push(friend);
}
for (;;) {
  const areYouContinue = confirm("Aka yoki ukangizni ismini  kiritasizmi?");
  if (!areYouContinue) {
    break;
  }
  const brather = prompt("Aka yoki ukangiznu ismini kiriting...");
  brathers.push(brather);
}
for (;;) {
  const areYouContinue = confirm("Opa yoki singlingizni ismini  kiritasizmi?");
  if (!areYouContinue) {
    break;
  }
  const sister = prompt("Opa yoki singlingizni ismini kiriting...");
  sisters.push(sister);
}

const person = {
  firstName,
  lastName,
  age,
  email,
  phoneNumber,
  height,
  weight,
  friends,
  sisters,
  brathers,
  parents: {
    mather: {
      name: mather,
    },
    father: {
      name: father,
    },
  },
};

console.log(person);
alert(`Ismi:` + person.firstName);
alert(`Familyasi:` + person.lastName);
alert(`Yoshi:` + person.age);
alert(`Email:` + person.email);
alert(`Telfon raqami:` + person.phoneNumber);
alert("Bo`yi:" + person.height);
alert(`Vazni:` + person.weight);
alert(`Onasi:` + person.parents.mather.name);
alert(`Otasi:` + person.parents.father.name);
alert(`Ukasi yoki Akasi:` + person.brathers);
alert(` Singlisi yoki Opasi:` + person.sisters);
alert("Do`slari:" + person.friends);

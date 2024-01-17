"use strict";

const obj = {
  name: "John",
  age: 30,
  parents: {
    mather: {
      name: "Silli",
    },
  },
};

const obj2 = {
  fullName: "John Jonas",
  isTall: true,
  father: {},
  getSum: function (a, b) {
    console.log("this", this.fullName);
    // const func = function () {
    //   console.log(this);
    // };

    // return func;
  },
};

// const property = prompt("Enter name");

// console.log(obj.name);
// console.log(obj[property]);
let search;
for (let key in obj) {
  //   console.log(key);
  //   console.log(obj[key]);
  //   property == obj[key] ? (search = obj[key]) : "";
}

console.log("search", search);

obj.__proto__ = "rg";
obj.name = "rg";

console.log(obj.__proto__);
console.log(obj.name);
console.log({});

const newObj = obj;

console.log(newObj);

const newObj2 = Object.assign({}, obj2);
const newObj3 = Object.assign(obj, obj2);

// console.log(newObj2);
// console.log(newObj3);
// const a = obj2.getSum();
// console.log(a);
// a();
obj2["getSum"]();
console.log("====================================");
const func = function (obj) {
  this.name = "Alijon";
  this.age = 43;
  this.b = obj;
};

const newFuncObj = new func(obj);

console.log(newFuncObj?.b?.parents?.mather?.name);
console.log(newFuncObj?.["b"]?.["parents"]?.["mather"]?.["name"]);
// console.log(new Date());
// console.log(new Error());

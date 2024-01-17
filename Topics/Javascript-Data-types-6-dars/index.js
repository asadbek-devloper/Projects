"use strict";

// const user = {
//   name: "Alisher",
//   parents: {
//     name: "Dilfuza",
//   },
//   2:"salom",
//   true:"Hayir"
// };

// const customer = Object.assign({}, user);
// const customer = structuredClone(user);

// customer.name = "Sherali";
// customer.parents.name = "Zilola";

// console.log(user);
// console.log(customer);

/* 
--Primitves
    1.string
    2.number
    3.null
    4.undefined
    5.boolean
    6.bigInt
    7.Symbol
--Reference
    8.Object (Array, Function....)
*/
// const user = {
//   name: "Alisher",
//   parents: {
//     name: "Dilfuza",
//   },
//   2: "salom",
//   true: "Hayir",
// };
// const id2 = Symbol("id");
// let id1 = Symbol.for("id"); // new Symbol
// let newId = Symbol.for("id"); // 42 ref
// console.log(id1 === id2);
// console.log(id1 === newId);
// const arr = [id1, id2, 3, 4, 5, 6];

// user[id1] = undefined;
// console.log(user);

// alert(id1.toString());

// for (let key in user) {
//   console.log(key);
// }
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

/* 
    ==Primitives and Reference

    1.Privitivelar har doim bitta data typeni saqlaydi
    2.Referencelar bo'sh xolatda ham har doim true ga teng
    3.Primitive methodlaridan foylanganimizda functionning 
        ishi tugaguncha o'zi Object deb tutadi
    4.Primitivelardan ham Constructor object yaratsak bo'ladi
    5.null javascriptda Object type bilan chiqadi. 
        Lekin bu Js xatosi



*/
// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(() => {}));
// const str1 = "Alisher";
// const str = new String("Alisher");
// const num = new Number(458);
// const bool = new Boolean(true);
// const bigInt = new BigInt(13);  //error
// const sym = new Symbol("cbdsh"); //error
// console.log(typeof str);
// console.log(num);
// console.log(bool);
// console.log(sym);
// console.log("hello world".toUpperCase());
// console.log(typeof null);

/*
    === NUMBER

    1. -2**53 ... 2**53;
    2.IEEE-754 64bit lik raqamlar 
    3. bir million = 1000000, 1_000_000, 1e6
    4. ikkilik, sakkizlik, o'n oltilik sanoq 
        sistemalarini qo'llab-quvvatlaydi.
    5.Noto'g'ri hisob-kitoblar
    6.ikki xil no'l qiymati (-0 and 0)
    7.NaN va Infinity maxsus qiymat
    8. isNan() and isFinite()

// */
// console.log(1e450);
// console.log(9999999999999999);
// console.log(+(0.1 + 0.2).toFixed(2));
// console.log(+(0.1 + 0.2).toFixed(2) === 0.3);
// console.log(-0 === 0);
// console.log(-0 < 0);
// console.log(NaN === NaN);

// console.log(+"hello");
// console.log(+"world");
// console.log(isNaN(NaN) === isNaN(NaN));
// console.log(isFinite(3e500) === isFinite(2e699));
// console.log(isFinite(42) === isFinite(2e699));

console.log(typeof (5 + "3"));

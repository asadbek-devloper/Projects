"use strict"; 
// /* =================   RECURSION ============= */
// /*
// // function reverceNum(num) {
// //   for (let i = num; i > 0; i--) {
// //     console.log(i);
// //   }
// // }

// // reverceNum(7);

// // function reverceNum(num) {
// //   if (num <= 0) {
// //     return;
// //   }
// //   console.log(num);
// //   return reverceNum(num - 1);
// // }
// // num = 7 log=>7 : num = 7-1 log=>6 : num = 6-1 log=>5 :
// // num = 5-1 log=>4 : num = 4-1 log=>3 : num = 3-1 log=>2 :
// // num = 2-1 log=>1 : num = 1-1 return;
// // reverceNum(7);

// // function nFac(a) {
// //   let fac = 1;
// //   for (let i = 1; i <= a; i++) {
// //     fac = fac * i;
// //   }

// //   return fac;
// // }
// // console.log(nFac(5));

// // function nFac(a) {
// //   if (a === 1) {
// //     return a;
// //   } else {
// //     return a * nFac(a - 1);
// //   }
// // }

// i:  1-qadam   2-qadam    3-qadam    4-qadam   5-qadam
// (5 = )5 * (5-1 = )20 * (4-1 = )60 (* 3-1 = )120 (2-1 = )120
// s:  else      else       else       else      if
// // console.log(nFac(5));

// const company = {
//   yuridik: [
//     { name: "Alisher", salary: 1200 },
//     { name: "Dilmurod", salary: 900 },
//   ],
//   account: [
//     { name: "Sunnat", salary: 1000 },
//     { name: "Abdulla", salary: 700 },
//   ],
//   development: {
//     backend: [
//       { name: "Jahongir", salary: 1200 },
//       { name: "Komiljon", salary: 1400 },
//     ],
//     frontend: [
//       { name: "Furqat", salary: 1000 },
//       { name: "Bexruz", salary: 1100 },
//     ],
//   },
//   designer: {
//     webDesigner: [
//       { name: "Furqat", salary: 1000 },
//       { name: "Bexruz", salary: 1100 },
//     ],
//     graphicDesigner: [
//       { name: "Furqat", salary: 1000 },
//       { name: "Bexruz", salary: 1100 },
//     ],
//   },
//   branches: {
//     ohongoron: {
//       yuridik: [
//         { name: "Alisher", salary: 1200 },
//         { name: "Dilmurod", salary: 900 },
//       ],
//       account: [
//         { name: "Sunnat", salary: 1000 },
//         { name: "Abdulla", salary: 700 },
//       ],
//       development: {
//         backend: [
//           { name: "Jahongir", salary: 1200 },
//           { name: "Komiljon", salary: 1400 },
//         ],
//         frontend: [
//           { name: "Furqat", salary: 1000 },
//           { name: "Bexruz", salary: 1100 },
//         ],
//       },
//       designer: {
//         webDesigner: [
//           { name: "Furqat", salary: 1000 },
//           { name: "Bexruz", salary: 1100 },
//         ],
//         graphicDesigner: [
//           { name: "Furqat", salary: 1000 },
//           { name: "Bexruz", salary: 1100 },
//         ],
//       },
//     },

//     andijan: {
//       development: [
//         { name: "Furqat", salary: 1000 },
//         { name: "Bexruz", salary: 1100 },
//       ],
//     },
//     sirdarya: {
//       development: [
//         { name: "Furqat", salary: 1000 },
//         { name: "Bexruz", salary: 1100 },
//       ],
//     },
//   },
// };

// function calcSalary(company) {
//   if (Array.isArray(company)) {
//     let sum = 0;
//     company.forEach((obj) => {
//       sum += obj.salary;
//     });
//     return sum;
//   } else {
//     let sumSalary = 0;
//     for (let subComp of Object.values(company)) {
//       sumSalary += calcSalary(subComp);
//     }
//     return sumSalary;
//   }
// }

// console.log(calcSalary(company));
// */
// /* =================   REST AND SPREED  ============= */
// /*
// const arr = [1, 3, 4, 5, 6, 7, 2, 6, 7, 23];
// function func2(name, age, ...info) {
//   //...rest
//   console.log("name: ", name);
//   console.log("age: ", age);
//   console.log("rest: ", info);
// }
// func2("alisher", 23, "Tillayev", "Boboyor o'g'li", "Qaladar mfy");
// func2(...arr); //spreed
// */
// /* =================   VARIABLE SCOPE, SCOPES  ============= */
// // console.log(this);
// const a = 8;
// function func2() {
//   const b = 3;
//   //   const a = 7;
//   console.log(a);
// }
// function func3() {
//   const a = 9;
//   console.log(a);
// }
// func2();
// func3();
// /*
//     1 - GLOBAL SCOPE
//     2 - LOCAL SCOPE (FUNCTION SCOPE)
//     3 - BLOCK SCOPE (FOR, WHILE, IF-ELSE, SWITCH-CASE, )
// */

// /* =================   SCOPE CHAINING  ============= */
// /* =================   CLOSURE  ============= */
// /* =================   THE OLD "VAR" AND IIFE(O'ZINI O'ZI CHAQIRADIGAN FUNCTION)  ============= */

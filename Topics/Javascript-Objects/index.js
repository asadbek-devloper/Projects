"use strict";
// const users = [];

// const user = {};
// for (;;) {
//   const areContinue = confirm();
//   if (!areContinue) {
//     break;
//   }
//   const username = prompt("Username");
//   user.name = username;
//   users.push(user);
// }

// console.log(users);

// customer.name = "Valisher";
// console.log(user);
// console.log(customer);
// console.log(customer === user);

/* 
    --Primitives--
    1. string
    2. number
    3. null
    4. undefined
    5. boolean
    6. bigInt
    7. Symbol

    --References--
    8. Objects

*/

/*
    Objects Copys

    1. Shellow copy
        a. Object.assign({}, user)
        b. {...user}
    2. Deep clone
        a. structuredClone(user)
        b.


*/
// const user = undefined;
// const user1 = {
//   name: "Alisher",
//   parents: {
//     mom: "Adiba",
//     father: "Qahhor",
//     hi: function () {
//       console.log(this);
//     },
//     bye: () => {
//       console.log(this);
//     },
//   },
// };
// 2- console.log(user && user.name);
// 3 console.log(user?.name);
// delete user?.name;
// console.log(user?.name);
// 1- if (user) {
//   console.log(user.name);
// } else {
//   console.log(user);
// }
// user.parents.bye();
// console.log(this);
// const customer = Object.assign({}, user);
// const customer = { ...user };
// const customer = structuredClone(user);
// customer.name = "Valisher";
// customer.parents.father = "Valisher";

// console.log(user);
// console.log(customer);
// console.log(user === customer);

// console.log(customer.parents);
// console.log(user.parents === customer.parents);
// console.log(user.hi === customer.hi);

//==============
// Garbage Collaction
// this
/*
        // Optianal chaining
            1. Objects  = ?.  - read, dellete
            2. Arrays   = ?.[] - read
            3. Functions = ?.() - call   

*/
// const arr = undefined;
// const func = undefined;
// console.log(arr?.[0]);
// console.log(func?.());

//  CONSTRUCTOR  FUNCTION

function User(job) {
  // this = {}
  console.log(this);
  //   this.job = job;
}

const customer = new User("Sotuvchi");
// const mexanic = new User("Usta");
// customer.office = "Bozor";
// mexanic.office = "Ustaxona";
// console.log(customer);
// console.log(mexanic);

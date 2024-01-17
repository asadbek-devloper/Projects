"use strict";
/*
1. JSON and XML
2. Web-api | api
3. XMLHttpRequest
*/
/* 
JSON data-types
1. string
2. number
3. boolean
4. null
5. array
6. object


JSON.parse(data) = js objdan js objga o'tkazadi 
JSON.stringfy(data) = js objdan json objga o'tkazadi 

*/
/* 
              XMLHttpRequest yaratishning 4ta qadami bor
1. const request = new XMLHttpRequest() - request yaratish
2. request.addEventListener("readystatechange", () => {
  console.log(request.readyState);
});  (<=============  readystatechange eventi ===========>)
3. request.open("GET", "https://jsonplaceholder.org/users"); 
(<=============  So'rovning(request) maqsadi  ===========>)

4. request.send()  (<=============  So'rovni(request) yuborish  ===========>)

*/
const getUsers = (resourse, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        callback(null, JSON.parse(request.response));
      } else {
        callback("Xatolik yuz berdi", null);
      }
    }
  });
  request.open("GET", resourse);
  request.send();
};

// callback hall
// getUsers("data/abdulla.json", (err, data) => {
//   console.log(data);
//   getUsers("data/alisher.json", (err, data) => {
//     console.log(data);
//     getUsers("data/sadulla.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// PROMISE ---
// const getData = (resourse) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4) {
//         if (request.status.toString()[0] === "2") {
//           resolve(JSON.parse(request.responseText));
//         } else {
//           reject("Qandaydir xatolik yuz berdi");
//         }
//       }
//     });
//     request.open("GET", resourse);
//     request.send();
//   });
// };
// // promise chaining
// getData("data/alisher.json")
//   .then((data) => {
//     console.log(data);
//     return getData("data/sadulla.json");
//   })
//   .then((data) => {
//     console.log(data);
//     return getData("data/abdulla.json");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// get users infos of real backend web-server;

// CRUD OPERATION WITH CORE JS
// FETCH API

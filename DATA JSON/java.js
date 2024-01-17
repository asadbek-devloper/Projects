"use strict";

let users = null;

const getData = (resourse) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.addEventListener("readystatechange", () => {
      if (req.readyState === 4) {
        if (req.status.toString()[0] === "2") {
          resolve(JSON.parse(req.response));
        } else {
          reject(Xatolik);
        }
      }
    });
    req.open(resourse.method, resourse.path);
    req.send();
  });
};
const tbody = document.querySelector("tbody");

getData({
  method: "GET",
  path: "/admin.apps.approve",
})
  .then((data) => {
    users = data.data.content;

    users.forEach((user, i) => {
      const trEl = `
            <tr>
              <td>${i + 1}</td>
              <td>${user.firstName + " " + user.lastName}</td>
              <td>${user.username}</td>
              <td>${user.phoneNumber}</td>
              <td>${user.status}</td>
              <td><button class="btn" data-id="${user.id}">Edit</button></td>
            </tr>`;
      tbody.insertAdjacentHTML("beforeend", trEl);
    });
  })
  .catch((err) => {
    console.log(err);
  });

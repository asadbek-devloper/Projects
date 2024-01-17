"use strict";
// elements
const tbody = document.querySelector("tbody");
// forms
const updateForm = document.querySelector(".update-user");
const createForm = document.querySelector(".create-user");
// btns
const createBtn = document.querySelector(".create-btn");
let users = null;
let userId = null;
// HTTP REQUEST
const SetUser = (resourse) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(resourse.method, resourse.path, true);
    req.setRequestHeader("Content-type", "application/json; charset=utf-8");
    req.addEventListener("readystatechange", () => {
      if (req.readyState === 4) {
        if (req.status.toString()[0] === "2") {
          resolve(JSON.parse(req.response));
        } else {
          reject(JSON.parse(req.response));
        }
      }
    });
    req.send(resourse.data);
  });
};
// GET USERS
const getUsers = () => {
  SetUser({
    method: "GET",
    path: "https://qarz-daftar.onrender.com/api/v1/users",
  })
    .then((data) => {
      users = data.data.content;
      tbody.innerHTML = "";
      users.forEach((user, i) => {
        const trEl = `
        <tr>
          <td>${i + 1}</td>
          <td>${user.firstName + " " + user.lastName}</td>
          <td>${user.username}</td>
          <td>${user.phoneNumber}</td>
          <td>${user.status}</td>
          <td>
            <button class="btn edit" 
              data-id="${user.id}">Edit</button>
            <button class="btn delete" 
              data-id="${user.id}">Delete</button>
            </td>
          </tr>`;
        tbody.insertAdjacentHTML("beforeend", trEl);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
// UPDATE USER
const updateUser = () => {
  updateForm.addEventListener("click", (e) => {
    e.preventDefault();
    const targetEl = e.target.classList;
    if (!targetEl.contains("btn")) return;
    if (targetEl.contains("save-user")) {
      getUsers();
      const user = {
        firstName: updateForm.children[0].value,
        lastName: updateForm.children[1].value,
      };
      SetUser({
        method: "PUT",
        path: `https://qarz-daftar.onrender.com/api/v1/users/${userId}`,
        data: JSON.stringify(user),
      })
        .then((data) => {
          getUsers();
        })
        .catch((err) => {
          console.log(err);
        });
      updateForm.children[0].value = "";
      updateForm.children[1].value = "";
      updateForm.classList.add("display-none");
    } else {
      updateForm.children[0].value = "";
      updateForm.children[1].value = "";
      updateForm.classList.add("display-none");
    }
  });
};
// CREATE USER
const createUser = () => {
  createForm.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.classList.contains("btn")) return;
    if (e.target.classList.contains("create-user-btn")) {
      const user = [];
      const inputsCount = createForm.children.length - 1;

      for (let i = 0; i < inputsCount; i++) {
        user.push(createForm.children[i].value);
      }
      const [
        firstName,
        lastName,
        passportNumber,
        phoneNumber,
        storeName,
        username,
        password,
      ] = user;
      const userObj = {
        firstName,
        lastName,
        passportNumber,
        phoneNumber,
        storeName,
        username,
        password,
        userRole: "STORE_OWNER",
        userRoleUz: "DOKON",
      };
      SetUser({
        method: "POST",
        path: "https://qarz-daftar.onrender.com/api/v1/users",
        data: JSON.stringify(userObj),
      })
        .then((data) => {
          getUsers();
        })
        .catch((err) => {
          console.log(err);
        });
      createForm.classList.add("display-none");
      createBtn.classList.remove("display-none");
    }
    createForm.classList.add("display-none");
    createBtn.classList.remove("display-none");
    const inputsCount = createForm.children.length - 1;
    for (let i = 0; i < inputsCount; i++) {
      createForm.children[i].value = "";
    }
  });
};
// DELETE USER
const deleteUser = (userId) => {
  SetUser({
    method: "DELETE",
    path: `https://qarz-daftar.onrender.com/api/v1/users/${userId}`,
  })
    .then((data) => {
      console.log(data.message);
      getUsers();
    })
    .catch((err) => {
      console.log(err.message);
    });
};
// EVENTS
tbody.addEventListener("click", (e) => {
  const classlist = e.target.classList;
  if (!classlist.contains("btn")) return;
  const id = +e.target.dataset.id;
  if (classlist.contains("edit")) {
    updateForm.classList.remove("display-none");
    users.forEach((u) => {
      if (u.id === id) {
        updateForm.children[0].value = u.firstName;
        updateForm.children[1].value = u.lastName;
        userId = id;
        updateUser();
      }
    });
  } else if (classlist.contains("delete")) {
    deleteUser(id);
  }
});
createBtn.addEventListener("click", () => {
  createForm.classList.remove("display-none");
  createBtn.classList.add("display-none");
  createUser();
});

(() => {
  getUsers();
})();

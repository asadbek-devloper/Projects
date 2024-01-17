"use strict";
// elements
const tbody = document.querySelector("tbody");
const updateForm = document.querySelector(".update-user");
const createForm = document.querySelector(".create-user");

const createBtn = document.querySelector(".create-btn");

let users = null;
let userId = null;

const getUsers = async () => {
  try {
    const response = await fetch(
      "https://qarz-daftar.onrender.com/api/v1/users"
    );
    const data = await response.json();
    if (
      response.status.toString()[0] === "4" ||
      response.status.toString()[0] === "5"
    ) {
      throw data.message;
    }

    users = data.data.content;
    tbody.innerHTML = "";
  
    
}
};



//
const updateUser = () => {
  updateForm.addEventListener("click", async (e) => {
    e.preventDefault();
    const targetEl = e.target.classList;
    if (!targetEl.contains("btn")) return;
    if (targetEl.contains("save-user")) {
      const user = {
        firstName: updateForm.children[0].value,
        lastName: updateForm.children[0].value,
      };
      try {
        const response = await fetch(
          `https://qarz-daftar.onrender.com/api/v1/users/${userId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: JSON.stringify(user),
          }
        );
        const data = await response.json();
        if (
          response.status.toString()[0] === "4" ||
          response.status.toString()[0] === "5"
        ) {
          throw data.message;
        }
        getUsers();
        updateForm.children[0].value = "";
        updateForm.children[1].value = "";
        updateForm.classList.add("display-none");
      } catch (error) {
        console.log(error);
      }
    } else {
      updateForm.children[0].value = "";
      updateForm.children[1].value = "";
      updateForm.classList.add("display-none");
    }
  });
};

//
const createUser = () => {
  createForm.addEventListener("click", async (e) => {
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
      try {
        const response = await fetch(
          "https://qarz-daftar.onrender.com/api/v1/users",
          {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: JSON.stringify(userObj),
          }
        );
        const data = await response.json();
        if (
          response.status.toString()[0] === "4" ||
          response.status.toString()[0] === "5"
        ) {
          throw data.message;
        }
        getUsers();
        createForm.classList.add("display-none");
        createBtn.classList.remove("display-none");
      } catch (err) {
        console.log(err);
      }
    }
    createForm.classList.add("display-none");
    createBtn.classList.remove("display-none");
    const inputsCount = createForm.children.length - 1;
    for (let i = 0; i < inputsCount; i++) {
      createForm.children[i].value = "";
    }
  });
};
//
const deleteUser = async (userId) => {
  try {
    const response = await fetch(
      `https://qarz-daftar.onrender.com/api/v1/users/${userId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
      }
    );
    const data = await response.json();
    if (
      response.status.toString()[0] === "4" ||
      response.status.toString()[0] === "5"
    ) {
      throw data.message;
    }
    getUsers();
  } catch (error) {
    console.log(error);
  }
};

//

tbody.addEventListener("click", (e) => {
  const classList = e.target.classList;
  if (!classList.contains("btn")) return;
  const id = +e.target.dataset.id;
  if (classList.contains("edit")) {
    updateForm.classList.remove("display-none");
    users.forEach((u) => {
      if (u.id === id) {
        updateForm.children[0].value = u.firstName;
        updateForm.children[1].value = u.lastName;
        userId = id;
        updateUser();
      }
    });
  } else if (classList.contains("delete")) {
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

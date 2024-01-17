import React, { useState } from "react";

import styles from "./AddTodo.module.css";
import Card from "../../helper/Card/Card";

const AddTodo = ({ setUsers }) => {
  const [changeFName, setChangeFName] = useState("");
  const [changeLName, setChangeLName] = useState("");
  const [changeAge, setChangeAge] = useState("");
  const [errFName, setErrFName] = useState(false);
  const [errLName, setErrLName] = useState(false);
  const [errAge, setErrAge] = useState(false);
  const [succFName, setSuccFName] = useState(false);
  const [succLName, setSuccLName] = useState(false);
  const [succAge, setSuccAge] = useState(false);

  const changeFNameHandler = (e) => {
    const value = e.target.value;
    if (value.length < 3) {
      setErrFName(true);
      setSuccFName(false);
    } else {
      setErrFName(false);
      setSuccFName(true);
    }

    setChangeFName(value);
  };
  const changeLNameHandler = (e) => {
    const value = e.target.value;
    if (value.length < 6) {
      setErrLName(true);
      setSuccLName(false);
    } else {
      setErrLName(false);
      setSuccLName(true);
    }
    setChangeLName(value);
  };
  const changeAgeHandler = (e) => {
    const value = e.target.value;

    if (+value < 15) {
      setErrAge(true);
      setSuccAge(false);
    } else {
      setErrAge(false);
      setSuccAge(true);
    }
    setChangeAge(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const fristName = changeFName?.trim();
    const lastName = changeLName?.trim();
    const age = changeAge?.trim();
    if (fristName.length < 3 || lastName.length < 6 || +age < 15) {
      if (fristName.length < 3) {
        setErrFName(true);
        setSuccFName(false);
      }

      if (lastName.length < 6) {
        setErrLName(true);
        setSuccLName(false);
      }
      if (+age < 15) {
        setErrAge(true);
        setSuccAge(false);
      }

      return;
    }

    const newPerson = {
      id: Date.now().toString(),
      fristName,
      lastName,
      age,
    };
    setUsers((prevUsers) => [...prevUsers, newPerson]);
    setChangeAge("");
    setChangeFName("");
    setChangeLName("");
    setErrAge(false);
    setSuccAge(false);
    setErrFName(false);
    setSuccFName(false);
    setErrLName(false);
    setSuccLName(false);
  };

  return (
    <Card variant={"green"}>
      <form className={styles["form"]} onSubmit={submitHandler}>
        <label>
          <input
            type="text"
            placeholder="Frist name"
            className={`${styles["inputs"]} ${errFName ? styles["err"] : ""} ${
              succFName ? styles["succ"] : ""
            }`}
            onChange={changeFNameHandler}
            value={changeFName}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Last name"
            className={`${styles["inputs"]} ${errLName ? styles["err"] : ""} ${
              succLName ? styles["succ"] : ""
            }`}
            onChange={changeLNameHandler}
            value={changeLName}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Age"
            className={`${styles["inputs"]} ${errAge ? styles["err"] : ""} ${
              succAge ? styles["succ"] : ""
            }`}
            onChange={changeAgeHandler}
            value={changeAge}
          />
        </label>
        <button type="submit" className={styles["btn"]}>
          Save
        </button>
      </form>
    </Card>
  );
};

export default AddTodo;

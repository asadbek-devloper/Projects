import { useState } from "react";
import React from "react";
import styles from "./Login.module.css";
const Login = () => {
  const [changeUserValue, setChangeUserValue] = useState("");
  const [changePasswordInput, setChangePasswordInput] = useState("");
  const [successPasword, setSuccessPasword] = useState(false);
  const [successUser, setSuccessUser] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [errUser, setErrUser] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const changePasswordHandler = (e) => {
    const value = e?.target?.value?.trim();
    if (value.length > 8) {
      setSuccessPasword(true);
      setErrPassword(false);
    }
    if (value.length < 8) {
      setSuccessPasword(false);
      setErrPassword(true);
    }
    setChangePasswordInput(value);
  };

  const changeUserHandler = (e) => {
    const value = e?.target?.value?.trim();
    if (value.length > 8) {
      setSuccessUser(true);
      setErrUser(false);
      console.log("s" + value);
    }
    if (value.length < 8) {
      setErrUser(true);
      setSuccessUser(false);
      console.log(value);
    }
    setChangeUserValue(value);
  };

  return (
    <div className={styles["login-box"]}>
      <h2 className={styles["title"]}>Login</h2>
      <h2></h2>
      <form className={styles["form"]} onSubmit={submitHandler}>
        <label htmlFor="">
          <h2>User name</h2>
          <input
            onChange={changeUserHandler}
            type="text"
            placeholder="User name"
            className={`${styles["input"]}`}
          />
          <p
            className={`${errUser ? styles["error"] : ""} ${
              successUser ? styles["success"] : ""
            }`}
          >
            {errUser ? "error" : ""}
            {successUser ? "success" : ""}
          </p>
        </label>

        <label>
          <h2>Password</h2>
          <input
            onChange={changePasswordHandler}
            type="password"
            placeholder="Password"
            className={`${styles["input"]}`}
          />
          <p
            className={`${errPassword ? styles["error"] : ""} ${
              successPasword ? styles["success"] : ""
            }`}
          >
            {errPassword ? "error" : ""}
            {successPasword ? "success" : ""}
          </p>
        </label>

        <button type="submit" className={`${styles["btn"]}`}>
          Login
        </button>

        <div>
          <h2>
            <a href="/">Forgot your password?</a>
          </h2>
        </div>
      </form>
    </div>
  );
};

export default Login;

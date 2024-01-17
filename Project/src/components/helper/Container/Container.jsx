import React from "react";
import styles from "./Container.module.css";
import Login from "../../UI/Login/Login";
const Container = () => {
  return (
    <div className={`${styles["container"]}     ${styles["black"]}`}>
      <Login />
      salom
    </div>
  );
};

export default Container;

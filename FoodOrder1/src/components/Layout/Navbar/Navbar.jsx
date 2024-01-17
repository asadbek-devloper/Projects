import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import logo from "..../assets/icons/F.svg";
const Navbar = () => {
  console.log(logo);
  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["navbar-logo"]}>
          <img src={logo} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

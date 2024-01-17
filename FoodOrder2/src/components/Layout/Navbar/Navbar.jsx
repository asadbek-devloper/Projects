import { useState } from "react";
import styles from "./Navbar.module.css";
import Ficon from "../../../assets/icons/F.svg";
import Logo from "../../../assets/icons/oodi.svg";
import down from "../../../assets/icons/down.svg";
import search from "../../../assets/icons/search.svg";
import korzina from "../../../assets/icons/korzina.svg";

const Navbar = () => {
  const [isDown, setDown] = useState(false);
  const [Down, setDown2] = useState(false);

  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["navbar-logo"]}>
          <span className={styles["f-icon"]}>
            <img src={Ficon} alt="" />
          </span>
          <span>
            <img src={Logo} alt="" />
          </span>
        </div>
        <ul className={styles["navigation"]}>
          <li>
            <span>Home</span>
          </li>
          <li
            onClick={() => {
              setDown(!isDown);
            }}
          >
            <span>Menu</span>
            <span className={isDown ? styles["down"] : ""}>
              <img src={down} alt="" />
            </span>
          </li>
          <li
            onClick={() => {
              setDown2(!Down);
            }}
          >
            <span>Services</span>
            <span className={Down ? styles["down"] : ""}>
              <img src={down} alt="" />
            </span>
          </li>
          <li>
            <span>Offers</span>
          </li>
        </ul>
        <div className={styles["menu-btn"]}>
          <div className={styles["search"]}>
            {" "}
            <img src={search} alt="" />
          </div>
          <div className={styles["korzina"]}>
            <img src={korzina} alt="" />
          </div>
          <button className={styles["unver-btn"]}>Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import appContext from "../../../context/appContext";
import KarzinkaModal from "../../UI/KarzinkaModal/KarzinkaModal";
import ModalProvider from "../../Modals/Modal";
import Ficon from "../../../assets/icons/F.svg";
import Logo from "../../../assets/icons/oodi.svg";
import down from "../../../assets/icons/down.svg";
import search from "../../../assets/icons/search.svg";
import korzina from "../../../assets/icons/korzina.svg";
const Navbar = () => {
  const [isDown, setDown] = useState(false);
  const [Down, setDown2] = useState(false);
  const [openKarzinka, setOpenKarzinka] = useState(false);
  const [order, setOrder] = useState(false);
  const ctx = useContext(appContext);
  const isOpen = () => {
    setOpenKarzinka(!openKarzinka);
  };
  return (
    <div className={styles["navbar"]}>
      {order && (
        <ModalProvider isOpen={() => setOrder(!order)}>
          <h2 style={{ padding: "10px 20px" }}>
            Buyurtmangiz qabul qilindi...
          </h2>
        </ModalProvider>
      )}
      {openKarzinka && <KarzinkaModal isOpen={isOpen} setOrder={setOrder} />}

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
          <img src={search} alt="" />
        </div>
        <button className={styles["korzina"]} onClick={isOpen}>
          <img src={korzina} alt="" />
          <div
            className={` ${styles["korzina-length"]}  ${
              ctx.karzinka?.length ? styles["korzina-bag"] : ""
            }`}
          >
            {ctx.karzinka?.length ? ctx.karzinka?.length : ""}
          </div>
        </button>
        <button className={styles["unver-btn"]}>Sign Up</button>
      </div>
      {/* <button className={`btn ${styles["karzinka-btn"]}`} onClick={isOpen}>
        Karzinka {ctx.karzinka?.length}
      </button> */}
    </div>
  );
};

export default Navbar;

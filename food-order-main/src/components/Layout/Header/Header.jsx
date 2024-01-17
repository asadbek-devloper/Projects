import React from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import headerImg from "../../../assets/header-food.webp";
import watch from "../../../assets/icons/watchIcon.svg";
import backbg from "../.././../assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
import ppFood1 from "../.././../assets/images/ppfood.png";
import ppFood2 from "../.././../assets/images/ppfood2.png";
import whiteStar from "../.././../assets/icons/whiteStar.svg";
import star from "../.././../assets/icons/yellowStar.svg";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className={styles["container"]}>
        <div className={styles["left"]}>
          <h1>
            Dive into Delights Of Delectable <span>Food</span>
          </h1>
          <p>
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <div className={styles["other-box"]}>
            <button className={styles["unver-btn"]}>Order Now</button>
            <div className={styles["watch-box"]}>
              <span> Watch Video</span>
              <button className={styles["watch-btn"]}>
                <img src={watch} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles["right"]}>
          <div className={styles["backbg"]}>
            <img src={backbg} alt="" />
          </div>
          <div className={styles["recommendedFoods"]}>
            <div className={styles["food"]}>
              <img src={ppFood1} alt="" />
              <div className={styles["other-itme"]}>
                <h5>Spicy noodles</h5>
                <div className={styles["stars"]}>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={whiteStar} alt="" />
                  <img src={whiteStar} alt="" />
                </div>
                <p>
                  $ <span>18.00</span>
                </p>
              </div>
            </div>
            <div className={styles["food"]}>
              <img src={ppFood2} alt="" />
              <div className={styles["other-itme"]}>
                <h5>Vegetarian salad</h5>
                <div className={styles["stars"]}>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={whiteStar} alt="" />
                </div>
                <p>
                  $<span>23.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

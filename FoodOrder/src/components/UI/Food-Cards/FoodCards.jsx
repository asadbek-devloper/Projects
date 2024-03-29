import React from "react";
// import styles from "/FoodCards.module.css";
import FoodCardItem from "./../Food-Card-Itme/FoodCardItme";

const FoodCards = (props) => {
  if (props.data.length < 1) {
    return <p>Loading...</p>;
  }
  return (
    <div className={`container`}>
      <h2>{props.title}</h2>
      <div>
        {props.data.map((f) => (
          <FoodCardItem data={f} key={f.id} />
        ))}
      </div>
    </div>
  );
};

export default FoodCards;

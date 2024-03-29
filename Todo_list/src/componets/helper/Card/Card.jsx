import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={` ${styles["card"]} ${styles[props.variant]}`}>
      {props?.children}
    </div>
  );
};

export default Card;

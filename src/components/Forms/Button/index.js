import React from "react";
import styles from "./Button.module.scss";

const Button = ({ type, children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;

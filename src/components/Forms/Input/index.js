import styles from "./Input.module.scss";

const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};

export default Input;

import styles from "./header.module.scss";
import { Logo, SaveLayout, UserAccount } from "components";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <SaveLayout />
      <UserAccount />
    </header>
  );
};

export default Header;

import { BsGrid1X2 } from "react-icons/bs";
import { VscSave } from "react-icons/vsc";
import styles from "./SaveLayout.module.scss";
import { useSelector } from "react-redux";

const SaveLayout = () => {
  const isSavedLayout = useSelector(
    (state) => state.savedLayout.isChangedLayout
  );
  return (
    <div className={styles.saveLayout}>
      {isSavedLayout ? <VscSave size={32} /> : <BsGrid1X2 size={32} />}
      {isSavedLayout ? "Kaydediliyor..." : "Çalışma Alanı 1"}
    </div>
  );
};

export default SaveLayout;

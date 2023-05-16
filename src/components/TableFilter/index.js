import { IoSettingsOutline } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { HiPlus } from "react-icons/hi";
import styles from "./TableFilter.module.scss";

const TableFilter = ({ titles, onChange }) => {
  return (
    <div className={styles.tableFilter}>
      <select>
        <option value={0}>Kontrat Seçiniz</option>
        <option value={2019}>2019</option>
        <option value={2018}>2018</option>
      </select>
      <div className={styles.tableAction}>
        <button type="button">
          <HiPlus size={20} />
        </button>
        <button type="button">
          <FiUpload size={20} />
        </button>
        <button type="button">
          <IoSettingsOutline size={20} />
        </button>
      </div>
    </div>
  );
};

export default TableFilter;

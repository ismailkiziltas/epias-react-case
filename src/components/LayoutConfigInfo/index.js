import { Section } from "components";
import styles from "./LayoutConfigInfo.module.scss";

const LayoutConfigInfo = ({ rowSizes, colSizes }) => {
  const sizeHandle = (sizes) => sizes.split(" ").fill(" x ", 1, 2);

  return (
    <Section>
      <div className={styles.configListWrapper}>
        <h3>Ayarlar</h3>
        <ul className={styles.configList}>
          <li>
            <div className={styles.configListTitle}>Yatay Alan Değerleri</div>
            {sizeHandle(rowSizes)}
          </li>
          <li>
            <div className={styles.configListTitle}>Dikey Alan Değerleri</div>
            {sizeHandle(colSizes)}
          </li>
        </ul>
      </div>
    </Section>
  );
};
export default LayoutConfigInfo;

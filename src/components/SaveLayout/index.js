import { BsGrid1X2 } from 'react-icons/bs'
import styles from './SaveLayout.module.scss'

const SaveLayout = () => {
    return (
        <div className={styles.saveLayout}>
            <BsGrid1X2 size={32} />
            Çalışma Alanı 1
        </div>
    )
}

export default SaveLayout
import styles from './Logo.module.scss'
import LogoImg from 'assets/img/epias-logo.svg';

const Logo = () => {
    return (
        <img src={LogoImg} alt='Epiaş Logo' className={styles.logo} />
    )
}

export default Logo
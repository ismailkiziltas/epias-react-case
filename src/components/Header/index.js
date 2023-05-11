import Logo from '../Logo'
import styles from './header.module.scss'
import SaveLayout from 'components/SaveLayout'
import UserAccount from 'components/UserAccount'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <SaveLayout />
            <UserAccount />
        </header>
    )
}

export default Header
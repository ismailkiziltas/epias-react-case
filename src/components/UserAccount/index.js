import styles from './UserAccount.module.scss'

const UserAccount = () => {
    return (
        <div className={styles.userAccount}>
            <div className={styles.userAccountBadge}> İK</div>
            Merhaba, İsmail
        </div>
    )
}

export default UserAccount
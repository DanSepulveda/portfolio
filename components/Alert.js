import styles from '../styles/Alert.module.css'

const Alert = ({ message, type, result }) => {
    const barClass = type === 'success' ? styles.success : styles.error

    return (
        <div className={styles.container}>
            <h3>{message.title}</h3>
            <h4>{message.subtitle}</h4>
            <div className={barClass}></div>
        </div>
    )
}

export default Alert
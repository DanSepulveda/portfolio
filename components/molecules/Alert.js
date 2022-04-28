import styles from '../../styles/Alert.module.css'
import { MdCheckCircleOutline } from 'react-icons/md'
import { IoMdCloseCircleOutline } from 'react-icons/io'

const Alert = ({ message, type }) => {
    const barClass = type === 'success' ? styles.success : styles.error

    return (
        <div className={styles.alertContainer}>
            <div className={styles.messageContainer}>
                {type === 'error'
                    ? <IoMdCloseCircleOutline className={styles.error} />
                    : <MdCheckCircleOutline className={styles.success} />
                }
                <div>
                    <p>{message.title}</p>
                    <p>{message.subtitle}</p>
                </div>
            </div>
            <div className={barClass}></div>
        </div>
    )
}

export default Alert
import styles from '../../styles/Header.module.css'
import { RiMenuFill } from 'react-icons/ri'

const Hamburger = ({ open, setOpen }) => {
    return (
        <div
            className={styles.menu}
            onClick={() => setOpen(!open)}
        >
            <RiMenuFill />
        </div>
    )
}

export default Hamburger
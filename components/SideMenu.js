import styles from '../styles/SideMenu.module.css'
import NavBar from './Navbar'
import Theme from "./Theme"
import Language from "./Language"

const SideMenu = ({ navbar, languages, theme, setTheme, open }) => {
    const openStyles = open ? `${styles.canvas}` : `${styles.closed}`

    return (
        <div className={openStyles}>
            <NavBar trans={navbar} theme={theme} side={true} />
            <div className={styles.extras}>
                <Theme theme={theme} setTheme={setTheme} side={true} />
                <Language trans={languages} side={true} />
            </div>
        </div>
    )
}

export default SideMenu
import styles from '../../styles/SideMenu.module.css'
import NavBar from '../molecules/Navbar'
import Theme from "../molecules/Theme"
import Language from "../molecules/Language"

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
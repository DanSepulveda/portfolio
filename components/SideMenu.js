import styles from '../styles/SideMenu.module.css'
import NavBar from './Navbar'
import Theme from "./Theme"
import Language from "./Language"

const SideMenu = ({ navbar, languages, theme, setTheme }) => {
    return (
        <div className={styles.canvas}>
            <NavBar trans={navbar} theme={theme} side={true} />
            <Theme theme={theme} setTheme={setTheme} side={true} />
            <Language trans={languages} side={true} />
        </div>
    )
}

export default SideMenu
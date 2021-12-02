import NavBar from './Navbar'
import Theme from "./Theme"
import Language from "./Language"
import styles from '../styles/Header.module.css'

const Header = ({ lang, setLang }) => {
    return (
        <header>
            <NavBar lang={lang} />
            <Theme />
            <Language lang={lang} setLang={setLang} />
        </header>
    )
}

export default Header
import NavBar from './Navbar'
import Theme from "./Theme"
import Language from "./Language"
import styles from '../styles/Header.module.css'

const Header = ({ translations }) => {
    return (
        <header>
            <NavBar translations={translations} />
            <Theme />
            <Language />
        </header>
    )
}

export default Header
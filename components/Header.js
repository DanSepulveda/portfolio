import NavBar from './Navbar'
import Theme from "./Theme"
import Language from "./Language"

const Header = ({ trans, theme, setTheme }) => {
    const { navbar, languages } = trans

    return (
        <header data-theme={theme}>
            <NavBar trans={navbar} theme={theme} />
            <Theme theme={theme} setTheme={setTheme} />
            <Language trans={languages} />
        </header>
    )
}

export default Header
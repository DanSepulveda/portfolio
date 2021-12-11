import NavBar from './Navbar'
// import Theme from "./Theme"
import Language from "./Language"
import useTheme from '../hooks/useTheme'

const Header = ({ trans }) => {
    const { navbar, languages } = trans
    const theme = useTheme()

    return (
        <header data-theme={theme}>
            <NavBar trans={navbar} />
            {/* <Theme /> */}
            <Language trans={languages} />
        </header>
    )
}

export default Header
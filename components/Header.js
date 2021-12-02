import NavBar from './Navbar'
// import Theme from "./Theme"
import Language from "./Language"

const Header = ({ trans }) => {
    const { navbar, languages } = trans

    return (
        <header>
            <NavBar trans={navbar} />
            {/* <Theme /> */}
            <Language trans={languages} />
        </header>
    )
}

export default Header
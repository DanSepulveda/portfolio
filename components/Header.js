import { useState } from 'react'
import NavBar from './Navbar'
import Theme from "./Theme"
import Language from "./Language"
import Hamburger from './Hamburger'
import SideMenu from './SideMenu'

const Header = ({ trans, theme, setTheme }) => {
    const { navbar, languages } = trans
    const [open, setOpen] = useState(false)

    return (
        <header data-theme={theme}>
            <NavBar trans={navbar} theme={theme} side={false} />
            <Theme theme={theme} setTheme={setTheme} side={false} />
            <Language trans={languages} side={false} />
            <Hamburger open={open} setOpen={setOpen} />
            <SideMenu navbar={navbar} languages={languages} theme={theme} setTheme={setTheme} open={open} />
        </header>
    )
}

export default Header
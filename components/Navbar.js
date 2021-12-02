import useLocale from "../hooks/useLocale"

const Navbar = ({ translations }) => {
    // const [translations] = useLocale('navbar')
    return (
        <section>
            <img src='/assets/projects/tgif/tgif.png' />
            <nav>
                <a href='#'>{translations?.home}</a>
                <a href='#about'>{translations?.about}</a>
                <a href='#projects'>{translations?.projects}</a>
                <a href='#contact'>{translations?.contact}</a>
            </nav>
        </section>
    )
}

export default Navbar

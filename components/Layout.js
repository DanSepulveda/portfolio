import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, trans, theme, setTheme }) => {
    const { header, footer } = trans

    return (
        <>
            <Header trans={header} theme={theme} setTheme={setTheme} />
            <main data-theme={theme}>
                {children}
            </main>
            <Footer trans={footer} theme={theme}/>
        </>
    )
}

export default Layout
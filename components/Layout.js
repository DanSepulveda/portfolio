import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, trans, theme, setTheme }) => {

    return (
        <>
            <Header trans={trans} theme={theme} setTheme={setTheme} />
            <main data-theme={theme}>
                {children}
            </main>
            <Footer trans={trans.footer} theme={theme} />
        </>
    )
}

export default Layout
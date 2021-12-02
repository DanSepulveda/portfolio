import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, lang, setLang }) => {
    return (
        <>
            <Header lang={lang} setLang={setLang} />
            <main>
                {children}
            </main>
            <Footer lang={lang} />
        </>
    )
}

export default Layout
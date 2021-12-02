import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, translations }) => {
    return (
        <>
            <Header translations={translations} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
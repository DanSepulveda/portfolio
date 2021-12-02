import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, trans }) => {
    const { header, footer } = trans

    return (
        <>
            <Header trans={header} />
            <main>
                {children}
            </main>
            <Footer trans={footer} />
        </>
    )
}

export default Layout
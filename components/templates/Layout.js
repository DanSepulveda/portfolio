import React from 'react'
import { useEffect, useState } from 'react'
import Seo from './Seo'
import Header from '../organisms/Header'
import Social from '../molecules/Social'
import Footer from '../organisms/Footer'

const Layout = ({ children, trans, seo }) => {
    const [show, setShow] = useState(false)
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (!savedTheme) {
            localStorage.setItem('theme', 'light')
        } else {
            setTheme(savedTheme)
        }

        if (window.innerWidth > 992) {
            setShow(true)
        }
    }, [])

    return (
        <React.Fragment>
            <Seo seo={seo} />
            <Header trans={trans} theme={theme} setTheme={setTheme} />
            <main data-theme={theme}>
                {show && <Social trans={trans.social} />}
                {children}
            </main>
            <Footer trans={trans.footer} theme={theme} />
        </React.Fragment>
    )
}

export default Layout
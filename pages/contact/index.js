import { useState, useEffect } from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Contact from "../../components/Contact"
import Social from "../../components/Social"

const ContactPage = ({ header, contact }) => {
    const { seo, content } = contact
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (!savedTheme) {
            localStorage.setItem('theme', 'light')
        } else {
            setTheme(savedTheme)
        }
    }, [])

    return (
        <Layout trans={header} theme={theme} setTheme={setTheme}>
            <Seo seo={seo} />
            <Contact trans={content} />
            <Social trans={header.social} />
        </Layout>
    )
}

export default ContactPage

export const getStaticProps = async ({ locale }) => {
    const contact = await import(`../../locales/${locale}/contact.json`)
    const header = await import(`../../locales/${locale}/header.json`)
    return {
        props: {
            header: header.default,
            contact: contact.default,
        }
    }
}
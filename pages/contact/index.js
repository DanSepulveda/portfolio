import Layout from "../../components/Layout"
import Contact from "../../components/Contact"

const ContactPage = ({ header, contact }) => {
    const { seo, content } = contact

    return (
        <Layout trans={header} seo={seo}>
            <Contact trans={content} />
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
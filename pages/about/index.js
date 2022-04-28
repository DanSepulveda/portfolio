import Layout from '../../components/templates/Layout'
import About from '../../components/organisms/About'

const Home = ({ translations, transHeader }) => {
    const { seo, about } = translations

    return (
        <Layout trans={transHeader} seo={seo}>
            <About trans={about} />
        </Layout>
    )
}

export default Home

export const getStaticProps = async ({ locale }) => {
    const translations = await import(`../../locales/${locale}/about.json`)
    const transHeader = await import(`../../locales/${locale}/header.json`)

    return {
        props: {
            translations: translations.default,
            transHeader: transHeader.default,
        }
    }
}
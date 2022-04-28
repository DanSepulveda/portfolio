import axios from 'axios'
import Layout from "../../components/templates/Layout"
import Projects from "../../components/organisms/Projects"

const Project = ({ header, translations, projects }) => {
    const { seo, content } = translations

    return (
        <Layout trans={header} seo={seo}>
            <Projects trans={content} projects={projects} home={false} />
        </Layout>
    )
}

export default Project

export const getServerSideProps = async ({ locale }) => {
    const header = await import(`../../locales/${locale}/header.json`)
    const translations = await import(`../../locales/${locale}/projects.json`)
    const projects = await axios.get('https://us-central1-portfolio-api-dansep.cloudfunctions.net/app/api/projects')
    return {
        props: {
            header: header.default,
            translations: translations.default,
            projects: projects.data.response
        }
    }
}
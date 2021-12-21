import axios from 'axios'
import { useState, useEffect } from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Social from "../../components/Social"
import Projects from "../../components/Projects"

const Project = ({ header, translations, projects }) => {
    const { seo, content } = translations
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
            <Social trans={header.social} />
            <Projects trans={content} projects={projects} home={false} />
        </Layout>
    )
}

export default Project

export const getStaticProps = async ({ locale }) => {
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
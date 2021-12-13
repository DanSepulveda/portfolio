import axios from 'axios'
import { useState, useEffect } from 'react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = ({ translations, header }) => {
  const { seo, hero, about, skills, projects, contact } = translations
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
      <Hero trans={hero} />
      <About trans={about} />
      <Skills trans={skills} />
      <Projects trans={projects} />
      <Contact trans={contact} />
    </Layout>
  )
}

export default Home

export const getStaticProps = async ({ locale }) => {
  const translations = await import(`../locales/${locale}/home.json`)
  const header = await import(`../locales/${locale}/header.json`)
  // const technologies = await axios.get('https://us-central1-portfolio-api-dansep.cloudfunctions.net/app/api/technologies')
  // const projects = await axios.get('https://us-central1-portfolio-api-dansep.cloudfunctions.net/app/api/projects')
  return {
    props: {
      translations: translations.default,
      header: header.default,
      // technologies: technologies.data.response,
      // projects: projects.data.response
    }
  }
}
import axios from 'axios'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Social from '../components/Social'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Home = ({ translations, transHeader, technologies, homeProjects }) => {
  const { seo, hero, about, skills, projects } = translations
  const [theme, setTheme] = useState('light')
  const [show, setShow] = useState(null)

  const normalProjects = homeProjects.filter(project => project.main !== true)
  const mainProjects = homeProjects.filter(project => project.main === true)

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
    <Layout trans={transHeader} theme={theme} setTheme={setTheme}>
      <Seo seo={seo} />
      {show && <Social trans={transHeader.social} />}
      <Hero trans={hero} />
      <About trans={about} />
      <Skills trans={skills} techs={technologies} />
      <Projects trans={projects} projects={normalProjects} mainProjects={mainProjects} home={true} />
    </Layout>
  )
}

export default Home

export const getStaticProps = async ({ locale }) => {
  const translations = await import(`../locales/${locale}/home.json`)
  const transHeader = await import(`../locales/${locale}/header.json`)
  const technologies = await axios.get('https://us-central1-portfolio-api-dansep.cloudfunctions.net/app/api/technologies')
  const homeProjects = await axios.get('https://us-central1-portfolio-api-dansep.cloudfunctions.net/app/api/projects/home')

  return {
    props: {
      translations: translations.default,
      transHeader: transHeader.default,
      technologies: technologies.data.response,
      homeProjects: homeProjects.data.response
    }
  }
}
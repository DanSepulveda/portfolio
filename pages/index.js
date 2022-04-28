import axios from 'axios'
import Layout from '../components/templates/Layout'
import Hero from '../components/organisms/Hero'
import Skills from '../components/organisms/Skills'
import Projects from '../components/organisms/Projects'

const Home = ({ translations, transHeader, technologies, homeProjects }) => {
  const { seo, hero, skills, projects } = translations
  const normalProjects = homeProjects.filter(project => project.main !== true)
  const mainProjects = homeProjects.filter(project => project.main === true)

  return (
    <Layout trans={transHeader} seo={seo}>
      <Hero trans={hero} />
      <Skills trans={skills} techs={technologies} />
      <Projects trans={projects} projects={normalProjects} mainProjects={mainProjects} home={true} />
    </Layout>
  )
}

export default Home

export const getServerSideProps = async ({ locale }) => {
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
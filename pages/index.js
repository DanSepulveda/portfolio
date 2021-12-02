import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = ({ translations, header, footer }) => {
  const { seo, hero, about, skills, projects, contact } = translations

  return (
    <Layout trans={{ header, footer }}>
      <Seo trans={seo} />
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
  const footer = await import(`../locales/${locale}/footer.json`)
  return {
    props: {
      translations: translations.default,
      header: header.default,
      footer: footer.default
    }
  }
}
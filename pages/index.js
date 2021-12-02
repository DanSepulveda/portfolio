import useLocale from '../hooks/useLocale'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = ({ translations }) => {
  // const [translations] = useLocale('home')

  return (
    <Layout translations={translations}>
      {/* <Seo
        title={translations?.seo?.title}
        description={translations?.seo?.description}
      /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Home

export const getStaticProps = async ({ locale }) => {
  const translations = await import(`../locales/${locale}/navbar.json`)
  return { props: { translations: translations.default } }
}

// export const getStaticPaths = async ({ locales }) => {
//   const paths = [
//     { params: { index: 'es' }, locale: 'es' },
//     { params: { index: 'en' }, locale: 'es' },
//   ]
//   return {
//     paths,
//     fallback: true
//   }
// }
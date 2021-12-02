import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = ({ lang, setLang }) => {
  const title = lang === 'es'
    ? 'Bienvenido'
    : 'Welcome'

  const description = lang === 'es'
    ? 'Descripción'
    : 'Description'

  return (
    <Layout lang={lang} setLang={setLang}>
      <Seo
        title={title}
        description={description}
      />
      <Hero lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
    </Layout>
  )
}

export default Home
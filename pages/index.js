import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { connect } from 'react-redux'
import otherActions from '../redux/actions/otherActions'
import useLocale from '../hooks/useLocale'

const Home = ({ lang, setLang }) => {
  const { locale, locales, defaultLocale, asPath } = useRouter()
  const data = useLocale(locale)

  const title = lang === 'es'
    ? 'Bienvenido'
    : 'Welcome'

  const description = lang === 'es'
    ? 'Descripción'
    : 'Description'

  return (
    <Layout setLang={setLang}>
      <Seo
        title={title}
        description={description}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    lang: state.others.lang
  }
}

const mapDispatchToProps = {
  setLang: otherActions.setLang
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
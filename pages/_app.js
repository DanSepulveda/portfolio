import { useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    const langLS = localStorage.getItem('lang')
    if (!langLS) {
      localStorage.setItem('lang', 'es')
    } else {
      setLang(langLS)
    }
  }, [])

  return <Component {...pageProps} lang={lang} setLang={setLang} />
}

export default MyApp
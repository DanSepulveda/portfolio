import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from '../redux/reducers/rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

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

  return (
    <Provider store={store}>
      <Component {...pageProps} lang={lang} setLang={setLang} />
    </Provider>
  )
}

export default MyApp
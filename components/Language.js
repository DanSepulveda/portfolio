const Language = ({ lang, setLang }) => {
    console.log(lang)
    return (
        <section>
            <img
                src={`/assets/${lang === 'en' ? 'en-lang' : 'en'}.png`}
                alt="English Icon"
                onClick={() => {
                    setLang('en')
                    localStorage.setItem('lang', 'en')
                }}
            />
            <img
                src={`/assets/${lang === 'es' ? 'es-lang' : 'es'}.png`}
                alt="Spanish Icon"
                onClick={() => {
                    setLang('es')
                    localStorage.setItem('lang', 'es')
                }}
            />
        </section>
    )
}

export default Language

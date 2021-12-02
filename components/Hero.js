import { useState } from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
    const [lang, setLang] = useState(true)
    return (
        <section className={styles.heroSection}>
            <p>{lang ? 'Español' : 'Inglés'}</p>
            <article>
                <h1>Daniel Sepúlveda</h1>
                <h2>Full Stack MERN Developer</h2>
                <p></p>
                <button onClick={() => setLang(!lang)}>Contact Me</button>
            </article>
        </section>
    )
}

export default Hero
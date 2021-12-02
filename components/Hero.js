import { useState } from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <p></p>
            <article>
                <h1>Daniel Sepúlveda</h1>
                <h2>Full Stack MERN Developer</h2>
                <p></p>
                <button>Contact Me</button>
            </article>
        </section>
    )
}

export default Hero
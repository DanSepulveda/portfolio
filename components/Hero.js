import styles from '../styles/Hero.module.css'
import Button from './Button'
import Image from 'next/image'

const Hero = ({ trans }) => {
    const { title, subtitle, button } = trans
    return (
        <section className={styles.hero}>
            <h2>Daniel Sepúlveda Pérez</h2>
            <h1>{title}</h1>
            <Image src="/assets/mickey.jpg" width={200} height={150} />
            <a href="#contact">
                <Button>{button}</Button>
            </a>
        </section>
    )
}

export default Hero
import styles from '../../styles/Hero.module.css'
import Button from '../atoms/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Hero = ({ trans }) => {
    const { title, description, button, alt } = trans
    const { locale } = useRouter()

    return (
        <section className={styles.hero}>
            <div className={styles.info}>
                <h1>Daniel Sepúlveda<span>{title}</span></h1>
                <p>{description}</p>
                <Link href="/contact" locale={locale}>
                    <a>
                        <Button>{button}</Button>
                    </a>
                </Link>
            </div>
            <div className={styles.image}>
                <Image
                    src="/assets/avatar.png"
                    width={1}
                    height={1}
                    alt={alt}
                    layout='responsive'
                />
            </div>
        </section>
    )
}

export default Hero
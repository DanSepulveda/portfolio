import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = ({ trans, theme, side }) => {
    const logo = theme === 'dark' ? 'logo-ligth.png' : 'logo-dark.png'
    const { locale, asPath } = useRouter()
    const classType = side ? `${styles.sidelinks}` : `${styles.links}`

    return (
        <section className={classType}>
            <Link href={asPath} locale={locale} >
                <a>
                    <Image
                        src={`/assets/${logo}`}
                        alt={trans.alt}
                        width={87}
                        height={25}
                    />
                </a>
            </Link>
            <nav>
                <a href='#'>{trans.links.home}</a>
                <a href='#about'>{trans.links.about}</a>
                <a href='#projects'>{trans.links.projects}</a>
                <a href='#contact'>{trans.links.contact}</a>
            </nav>
        </section>
    )
}

export default Navbar
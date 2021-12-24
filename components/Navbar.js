import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import HideLink from './HideLink'

const Navbar = ({ trans, theme, side }) => {
    const { home, about, projects, contact } = trans.links
    const logo = theme === 'dark' ? 'logo-light.png' : 'logo-dark.png'
    const { locale } = useRouter()
    const classType = side ? `${styles.sidelinks}` : `${styles.links}`

    return (
        <section className={classType}>
            <Link href='/' locale={locale} >
                <a>
                    <Image
                        src={`/assets/${logo}`}
                        alt={trans.alt}
                        width={58}
                        height={25}
                    />
                    <HideLink>{trans.text}</HideLink>
                </a>
            </Link>
            <nav>
                <Link href='/' locale={locale}>{home}</Link>
                <Link href='/about' locale={locale}>{about}</Link>
                <Link href='/projects' locale={locale}>{projects}</Link>
                <Link href='/contact' locale={locale}>{contact}</Link>
            </nav>
        </section>
    )
}

export default Navbar
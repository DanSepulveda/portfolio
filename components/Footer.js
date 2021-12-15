import styles from '../styles/Footer.module.css'
import HideLink from './HideLink'
import { BsLinkedin, BsGithub, BsEnvelopeFill } from 'react-icons/bs'

const Footer = ({ trans, theme }) => {
    const { rights, links } = trans

    return (
        <footer data-theme={theme}>
            <section className={styles.icons}>
                <a href="https://www.linkedin.com/in/dansepulvedap/" target='_blank' rel='noreferrer'>
                    <BsLinkedin />
                    <HideLink>{links.linkedin}</HideLink>
                </a>
                <a href="mailto:dansepdev@gmail.com">
                    <BsEnvelopeFill />
                    <HideLink>{links.email}</HideLink>
                </a>
                <a href="https://github.com/DanSepulveda" target='_blank' rel='noreferrer'>
                    <BsGithub />
                    <HideLink>{links.github}</HideLink>
                </a>
            </section>
            <div className={styles.spanContainer}>
                <span>Daniel Sepúlveda</span>
                <span className={styles.line}> - </span>
                <span>&copy; {rights}</span>
            </div>
        </footer>
    )
}

export default Footer
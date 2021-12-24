import styles from '../styles/Footer.module.css'
import LinkIcon from './LinkIcon'

const Footer = ({ trans, theme }) => {
    const { rights, links } = trans

    return (
        <footer data-theme={theme}>
            <section className={styles.icons}>
                <LinkIcon
                    icon='linkedin'
                    link='https://www.linkedin.com/in/dansepulvedap/'
                    text={links.linkedin}
                />
                <LinkIcon
                    icon='email'
                    link='mailto:dansepdev@gmail.com'
                    text={links.email}
                />
                <LinkIcon
                    icon='github'
                    link='https://github.com/DanSepulveda'
                    text={links.github}
                />
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
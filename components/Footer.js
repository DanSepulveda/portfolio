import styles from '../styles/Footer.module.css'
import { BsLinkedin, BsGithub, BsEnvelopeFill } from 'react-icons/bs'

const Footer = ({ trans, theme }) => {
    return (
        <footer data-theme={theme}>
            <section className={styles.icons}>
                <a href="https://www.linkedin.com/in/dansepulvedap/" target='_blank'>
                    <BsLinkedin />
                </a>
                <a href="">
                    <BsEnvelopeFill />
                </a>
                <a href="https://github.com/DanSepulveda" target='_blank'>
                    <BsGithub />
                </a>
            </section>
            <div className={styles.spanContainer}>
                <span>Daniel Sepúlveda</span>
                <span className={styles.line}> - </span>
                <span>&copy; {trans.rights}</span>
            </div>
        </footer>
    )
}

export default Footer
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
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
            <span>Daniel Sepúlveda Pérez - &copy; All Rigths Reserved</span>
        </footer>
    )
}

export default Footer
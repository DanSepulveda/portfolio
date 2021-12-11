import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Navbar = ({ trans, theme }) => {
    console.log(theme)
    const logo = theme === 'dark' ? 'logo-ligth.png' : 'logo-dark.png'
    return (
        <section className={styles.links}>
            <Image src={`/assets/${logo}`} width={60} height={20} />
            <nav>
                <a href='#'>{trans.home}</a>
                <a href='#about'>{trans.about}</a>
                <a href='#projects'>{trans.projects}</a>
                <a href='#contact'>{trans.contact}</a>
            </nav>
        </section>
    )
}

export default Navbar
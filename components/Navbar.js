import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Navbar = ({ trans }) => {
    return (
        <section className={styles.links}>
            <Image src='/assets/en.png' width={40} height={20} />
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
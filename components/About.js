import styles from '../styles/About.module.css'
import H2 from './H2'
import Comment from './Comment'

const About = ({ trans }) => {
    const { title, subtitle } = trans

    return (
        <section className={styles.about}>
            <H2>{title}</H2>
            <Comment>{subtitle}</Comment>
            <div className={styles.container}>
                <article className={styles.image}>
                    fsdafas
                </article>
                <article className={styles.resume}>
                    fdsafds
                </article>
            </div>
        </section>
    )
}

export default About
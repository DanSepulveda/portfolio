import styles from '../styles/About.module.css'
import H1 from './H1'
import Box from './Box'

const About = ({ trans }) => {
    const { title, boxes } = trans

    return (
        <section className={styles.about}>
            <H1>{title}</H1>
            <div className={styles.container}>
                <div className={styles.image}>
                    fsdafas
                </div>
                <div className={styles.resume}>
                    {boxes.map(box => <Box title={box.title} key={box.title}>{box.text}</Box>)}
                </div>
            </div>
        </section>
    )
}

export default About
import styles from '../styles/About.module.css'
import { H1 } from './Headings'
import Image from 'next/image'
import Box from './Box'

const About = ({ trans }) => {
    const { title, boxes } = trans

    return (
        <section className={styles.about}>
            <H1>{title}</H1>
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image src='/assets/avatar.png' width={.6} height={.6} layout='responsive' />
                </div>
                <div className={styles.resume}>
                    {boxes.map(box => <Box data={box} key={box.title} />)}
                </div>
            </div>
        </section>
    )
}

export default About
import styles from '../styles/TechCard.module.css'
import Image from "next/image"
import HideLink from './HideLink'

const TechCard = ({ tech }) => {
    const { name, image, link } = tech

    return (
        <div className={styles.container}>
            <div className={styles.tech}>
                <a href="" rel='nofollow'>
                    <Image
                        src={`/assets/technologies/${tech}`}
                        width={70}
                        height={70}
                        alt='cambiar'
                    />
                </a>
                <HideLink>{tech}</HideLink>
            </div>
            <span className={styles.name}>{tech}</span>
        </div>
    )
}

export default TechCard
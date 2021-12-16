import styles from '../styles/TechCard.module.css'
import Image from "next/image"
import HideLink from './HideLink'

const TechCard = ({ tech }) => {
    const { name, image, languages } = tech
    const route = languages[1].link

    return (
        <div className={styles.container}>
            <div className={styles.tech}>
                <a href={route} target='_blank' rel='nofollow noreferrer'>
                    <Image
                        src={`/assets/technologies/${image}`}
                        width={70}
                        height={70}
                        alt={`${name} Icon`}
                    />
                    <HideLink>{`${name} WebPage`}</HideLink>
                </a>
            </div>
            <span className={styles.name}>{name}</span>
        </div>
    )
}

export default TechCard
import styles from '../styles/TechCard.module.css'
import Image from "next/image"

const TechCard = ({ tech }) => {
    const { name, image, link } = tech

    return (
        <div className={styles.container}>
            <div className={styles.tech}>
                <a href="">
                    <Image
                        src={`/assets/technologies/${tech}`}
                        width={70}
                        height={70}
                        alt='cambiar'
                    />
                </a>
            </div>
            <span className={styles.name}>{tech}</span>
        </div>
    )
}

export default TechCard
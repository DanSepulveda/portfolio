import styles from '../styles/TechCard.module.css'
import Image from "next/image"

const TechCard = ({ image }) => {
    return (
        <div className={styles.container}>
            <div className={styles.tech}>
                <Image src={`/assets/technologies/${image}`} width={70} height={70} />
            </div>
            <span className={styles.name}>{image}</span>
        </div>
    )
}

export default TechCard

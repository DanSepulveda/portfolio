import styles from '../styles/TechCard.module.css'
import Image from "next/image"
import Link from 'next/link'
import HideLink from './HideLink'

const TechCard = ({ tech }) => {
    const { name, image, languages } = tech
    const route = languages[1].link

    return (
        <div className={styles.container}>
            <div className={styles.tech}>
                <Link href={route}>
                    <a target='_blank' rel='nofollow noreferrer'>
                        <Image
                            src={`/assets/technologies/${image}`}
                            width={70}
                            height={70}
                            alt={`${name} Icon`}
                        />
                        <HideLink>{`${name} WebPage`}</HideLink>
                    </a>
                </Link>
            </div>
            <span className={styles.name}>{name}</span>
        </div>
    )
}

export default TechCard
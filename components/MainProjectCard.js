import styles from '../styles/MainProject.module.css'
import styles2 from '../styles/ProjectCard.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import LinkIcon from './LinkIcon'

const MainProjectCard = ({ project }) => {
    const { name, esDescription, enDescription, images, techs, webpage, github, youtube } = project
    const { locale } = useRouter()

    return (
        <article className={styles.container}>
            <div>
                <h3 className='title'>{name}</h3>
            </div>
            <div className={styles.data}>
                <div className={styles.imageContainer}>
                    <Image
                        src={`/assets/projects${images[0]}`}
                        alt={name}
                        width={1.8}
                        height={1}
                        layout='responsive'
                    />
                </div>
                <div className={styles.infoContainer}>
                    <p className='description'>
                        {locale === 'es' ? esDescription : enDescription}
                    </p>
                    <h4>
                        {locale === 'es' ? 'Tecnologías' : 'Technologies'}
                    </h4>
                    <div className={`${styles2.techContainer} techDiv`}>
                        <ul>
                            {techs.map(tech => {
                                const techClass = tech.toLowerCase().replace(' ', '')
                                return <li key={tech}><span className={`${styles2.tech} ${techClass}`}>{tech}</span></li>
                            })}
                        </ul>
                    </div>
                    <h4>
                        {locale === 'es' ? 'Enlaces' : 'Links'}
                    </h4>
                    <div className={styles2.links}>
                        {webpage && <LinkIcon icon='webpage' link={webpage} />}
                        {github && <LinkIcon icon='github' link={github} />}
                        {youtube && <LinkIcon icon='youtube' link={youtube} />}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default MainProjectCard
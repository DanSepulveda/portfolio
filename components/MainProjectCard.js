import styles from '../styles/MainProject.module.css'
import styles2 from '../styles/ProjectCard.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BsGithub, BsYoutube } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'

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
                        src='/assets/projects/tgif/tgif.png'
                        alt=''
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
                        {techs.map(tech => {
                            const techClass = tech.toLowerCase().replace(' ', '')
                            return <span key={tech} className={`${styles2.tech} ${techClass}`}>{tech}</span>
                        })}
                    </div>
                    <h4>
                        {locale === 'es' ? 'Enlaces' : 'Links'}
                    </h4>
                    <div className={styles2.links}>
                        {webpage && <FiExternalLink />}
                        {github && <BsGithub />}
                        {youtube && <BsYoutube />}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default MainProjectCard
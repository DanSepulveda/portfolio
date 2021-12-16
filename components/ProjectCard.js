import styles from '../styles/ProjectCard.module.css'
import { useRouter } from 'next/router'
import { BsGithub, BsYoutube } from 'react-icons/bs'
import Image from 'next/image'

const ProjectCard = ({ project }) => {
    const { name, esDescription, enDescription, images, techs, webpage, github, youtube } = project
    const { locale } = useRouter()

    return (
        <article className={styles.container}>
            <div style={{ width: '100%' }}>
                <Image src='/assets/projects/tgif/tgif.png' alt='' layout='responsive' width={1.8} height={1} />
            </div>
            <h2>{name}</h2>
            <p>{esDescription}</p>
            <h3>{locale === 'es' ? 'Tecnologías' : 'Technologies'}</h3>
            <div className={styles.techContainer}>
                {techs.map(tech => <span key={tech} className={`${styles.tech} ${tech.toLowerCase().replaceAll(' ', '')}`}>{tech}</span>)}
            </div>
            <h3>{locale === 'es' ? 'Enlaces' : 'Links'}</h3>
            <div className={styles.links}>
                {github && <BsGithub />}
                {youtube && <BsYoutube />}
            </div>

        </article>
    )
}

export default ProjectCard

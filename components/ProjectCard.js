import styles from '../styles/ProjectCard.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { BsGithub, BsYoutube } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'
import setHeight from '../utils/setHeight'

const ProjectCard = ({ project, home }) => {
    const { name, esDescription, enDescription, images, techs, webpage, github, youtube } = project
    const { locale } = useRouter()

    useEffect(() => {
        setHeight('title')
        setHeight('description')
        setHeight('techDiv')
    }, [])

    return (
        <article className={styles.container}>
            {!home &&
                <div style={{ width: '100%' }}>
                    <Image
                        src='/assets/projects/tgif/tgif.png'
                        alt=''
                        width={1.8}
                        height={1}
                        layout='responsive'
                    />
                </div>
            }
            <h2 className='title'>{name}</h2>
            <p className='description'>
                {locale === 'es' ? esDescription : enDescription}
            </p>
            <h3>
                {locale === 'es' ? 'Tecnologías' : 'Technologies'}
            </h3>
            <div className={`${styles.techContainer} techDiv`}>
                {techs.map(tech => {
                    const techClass = tech.toLowerCase().replace(' ', '')
                    return <span key={tech} className={`${styles.tech} ${techClass}`}>{tech}</span>
                })}
            </div>
            <h3>
                {locale === 'es' ? 'Enlaces' : 'Links'}
            </h3>
            <div className={styles.links}>
                {webpage && <FiExternalLink />}
                {github && <BsGithub />}
                {youtube && <BsYoutube />}
            </div>
        </article>
    )
}

export default ProjectCard
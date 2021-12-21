import styles from '../styles/ProjectCard.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import setHeight from '../utils/setHeight'
import LinkIcon from './LinkIcon'

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
                        src={`/assets/projects${images[0]}`}
                        alt={name}
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
                <ul>
                    {techs.map(tech => {
                        const techClass = tech.toLowerCase().replace(' ', '')
                        return <li key={tech}><span className={`${styles.tech} ${techClass}`}>{tech}</span></li>
                    })}
                </ul>
            </div>
            <h3>
                {locale === 'es' ? 'Enlaces' : 'Links'}
            </h3>
            <div className={styles.links}>
                {webpage && <LinkIcon icon='webpage' link={webpage} />}
                {github && <LinkIcon icon='github' link={github} />}
                {youtube && <LinkIcon icon='youtube' link={youtube} />}
            </div>
        </article>
    )
}

export default ProjectCard
import styles from '../../styles/ProjectCard.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import setHeight from '../../utils/setHeight'
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
            {home
                ? <h3 className='title'>{name}</h3>
                : <h2>{name}</h2>
            }
            <p className='description'>
                {locale === 'es' ? esDescription : enDescription}
            </p>
            {home
                ? <h4 className='subtitle'>{locale === 'es' ? 'Tecnologías' : 'Technologies'}</h4>
                : <h3>{locale === 'es' ? 'Tecnologías' : 'Technologies'}</h3>
            }
            <div className={`${styles.techContainer} techDiv`}>
                <ul>
                    {techs.map(tech => {
                        const techClass = tech.toLowerCase().replace(' ', '')
                        return <li key={tech}><span className={`${styles.tech} ${techClass}`}>{tech}</span></li>
                    })}
                </ul>
            </div>
            {home
                ? <h4 className='subtitle'>{locale === 'es' ? 'Enlaces' : 'Links'}</h4>
                : <h3>{locale === 'es' ? 'Enlaces' : 'Links'}</h3>
            }
            <div className={styles.links}>
                {webpage &&
                    <LinkIcon
                        icon='webpage'
                        link={webpage}
                        text={locale === 'es' ? 'Demostración' : 'Demo'}
                    />
                }
                {github &&
                    <LinkIcon
                        icon='github'
                        link={github}
                        text={locale === 'es' ? 'Repositorio' : 'Repository'}
                    />
                }
                {youtube &&
                    <LinkIcon
                        icon='youtube'
                        link={youtube}
                        text={locale === 'es' ? 'Video Youtube' : 'Youtube video'}
                    />
                }
            </div>
        </article>
    )
}

export default ProjectCard
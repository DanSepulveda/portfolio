import styles from '../styles/Projects.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import H1 from './H1'
import H2 from './H2'
import Comment from './Comment'
import MainProject from './MainProject'
import ProjectGrid from './ProjectGrid'
import Button from './Button'

const Projects = ({ trans, projects, home }) => {
    const { title, text, button } = trans
    const { locale } = useRouter()

    return (
        <section className={styles.container}>
            {home
                ? <H2>{title}</H2>
                : <H1>{title}</H1>
            }
            <Comment>{text}</Comment>
            {home && <MainProject />}
            <ProjectGrid projects={projects} />
            {home && <Link href="/projects" locale={locale}><a><Button>{button}</Button></a></Link>}
        </section>
    )
}

export default Projects
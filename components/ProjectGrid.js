import styles from '../styles/ProjectGrid.module.css'
import ProjectCard from './ProjectCard'

const ProjectGrid = ({ projects, home }) => {
    return (
        <section className={styles.gridContainer}>
            {projects.map(project => <ProjectCard project={project} home={home} key={project._id} />)}
        </section>
    )
}

export default ProjectGrid
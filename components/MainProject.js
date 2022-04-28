import styles from '../styles/MainProject.module.css'
import MainProjectCard from './MainProjectCard'

const MainProject = ({ projects }) => {
    return (
        <section className={styles.container}>
            {projects.map(project => <MainProjectCard project={project} key={project._id} />)}
        </section>
    )
}

export default MainProject
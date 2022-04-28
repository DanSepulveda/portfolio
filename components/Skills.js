import styles from '../styles/Skills.module.css'
import { H2 } from './Headings'
import Comment from './Comment'
import TechCard from './TechCard'

const Skills = ({ trans, techs }) => {
    const { title, subtitle } = trans

    return (
        <section className={styles.skills}>
            <H2>{title}</H2>
            <Comment>{subtitle}</Comment>
            <div>
                {techs.map(tech => <TechCard tech={tech} key={tech._id} />)}
            </div>
        </section>
    )
}

export default Skills
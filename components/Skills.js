import styles from '../styles/Skills.module.css'
import TechCard from './TechCard'

const Skills = ({ trans }) => {
    const techs = [
        'html.png',
        'css.png',
        'sass.png',
        'bootstrap.png',
        'material-ui.png',
        'javascript.png',
        'react.png',
        'next-js.png',
        'react-native.png',
        'redux.png',
        'node.png',
        'express-js.png',
        'npm.png',
        'mongodb.png',
        'mysql.png',
        'firebase.png',
        'git.png',
        'github.png',
        'heroku.png',
        'netlify.png',
    ]

    return (
        <section className={styles.skills}>
            <h2>{trans.title}</h2>
            <div>
                {techs.map(tech => <TechCard image={tech} key={tech} />)}
            </div>
        </section>
    )
}

export default Skills
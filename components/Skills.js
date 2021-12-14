import styles from '../styles/Skills.module.css'
import H2 from './H2'
import TechCard from './TechCard'
import Comment from './Comment'

const Skills = ({ trans }) => {
    const { title, subtitle } = trans

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
            <H2>{title}</H2>
            <Comment>{subtitle}</Comment>
            <div>
                {techs.map(tech => <TechCard tech={tech} key={tech} />)}
            </div>
        </section>
    )
}

export default Skills
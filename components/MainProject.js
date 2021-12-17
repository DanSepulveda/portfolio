import styles from '../styles/MainProject.module.css'
import MainProjectCard from './MainProjectCard'

const MainProject = ({ projects }) => {
    const fakeProjects = [
        {
            _id: 1,
            name: "MyTinenary",
            esDescription: "Mytinerary is a web application where people can publish itineraries (set of activities) of the cities where they live. It is developed using MERN Stack.",
            techs: ['Bootstrap', 'React Native', 'Material UI', "Nodejs", "Mongo DB", "Express", "MySQL"],
            github: 'lala',
            youtube: 'lala',
            webpage: 'akaka'
        },
        {
            _id: 2,
            name: "MyTinenary",
            esDescription: "lala",
            "techs": ['JavaScript', 'CSS', 'HTML', 'React']
        },
        {
            _id: 3,
            name: "MyTinenary",
            esDescription: "lala",
            "techs": ['JavaScript', 'CSS', 'HTML', 'React']
        },
    ]

    return (
        <section className={styles.container}>
            {fakeProjects.map(project => <MainProjectCard project={project} key={project._id} />)}
        </section>
    )
}

export default MainProject
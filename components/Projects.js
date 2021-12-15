import H2 from './H2'

const Projects = ({ trans }) => {
    const { title, subtitle } = trans

    return (
        <section>
            <H2>{title}</H2>
        </section>
    )
}

export default Projects
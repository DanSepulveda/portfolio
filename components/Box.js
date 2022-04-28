import styles from '../styles/Box.module.css'

const Box = ({ data }) => {
    const { title, points } = data

    return (
        <article className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.list}>
                {points.map((point, index) => <li className={styles.item} key={index}>{point}</li>)}
            </ul>
        </article>
    )
}

export default Box
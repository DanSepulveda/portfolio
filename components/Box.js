import styles from '../styles/Box.module.css'

const Box = ({ children, title }) => {
    return (
        <article className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </article>
    )
}

export default Box
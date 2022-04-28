import styles from '../styles/Header.module.css'

const Theme = ({ theme, setTheme, side }) => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    const image = theme === 'dark' ? 'sun' : 'moon'
    const classType = side ? `${styles.sidetoggle}` : `${styles.toggle}`

    return (
        <section className={classType}>
            <div>
                <input
                    type="checkbox"
                    name="theme"
                    checked={theme === 'dark' && true}
                    onChange={(e) => e.target.checked = false}
                />
                <label htmlFor="theme">
                    <div
                        className={styles.button}
                        style={{ backgroundImage: `url('/assets/${image}.png')` }}
                        onClick={() => {
                            setTheme(newTheme)
                            localStorage.setItem('theme', newTheme)
                        }}
                    >
                    </div>
                </label>
            </div>
        </section>
    )
}

export default Theme
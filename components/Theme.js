const Theme = ({theme, setTheme}) => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    return (
        <section className="toggle">
            <div className={theme ? 'izq' : 'der'}>
                <div
                    onClick={()=>{
                        setTheme(newTheme)
                        localStorage.setItem('theme', newTheme)
                    }}
                >
                </div>
            </div>
        </section>
    )
}

export default Theme

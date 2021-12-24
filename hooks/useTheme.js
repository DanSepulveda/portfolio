import { useEffect } from "react"

const useTheme = ({ theme, setTheme }) => {
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (!savedTheme) {
            localStorage.setItem('theme', 'light')
        } else {
            setTheme(savedTheme)
        }
    }, [])

    return theme
}

export default useTheme
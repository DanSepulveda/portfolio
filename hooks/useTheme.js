import { useEffect, useState } from "react"

const useTheme = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        if(!savedTheme){
            const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            // const defaultDark = window.matchMedia()
            console.log(defaultDark)
            if(defaultDark){
                localStorage.setItem('theme', 'dark')
                setTheme('dark')
            }else{
                localStorage.setItem('theme', 'light')
            }
        }else{
            setTheme(savedTheme)
        }
    }, [theme])

    return [theme, setTheme]
}

export default useTheme
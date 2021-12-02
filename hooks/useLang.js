import { useEffect } from "react"

const useLang = () => {
    useEffect(() => {
        const langLS = localStorage.getItem('lang')
        if (!langLS) {
            localStorage.setItem('lang', 'es')
        }
    }, [])

    return
}

export default useLang
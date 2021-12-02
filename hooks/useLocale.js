import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

const useLocale = (file) => {
    const [data, setData] = useState({})
    const { locale, asPath } = useRouter()
    useEffect(() => {
        import(`../locales/${locale}/${file}`)
            .then(response => setData(response.default))
    }, [locale])

    return [data, asPath]
}

export default useLocale
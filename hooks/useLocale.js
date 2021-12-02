import { useState, useEffect } from "react"

const useLocale = (locale) => {
    const [data, setData] = useState({})
    useEffect(() => {
        import(`../locales/${locale}/home`)
            .then(response => setData(response.default))
    }, [])

    return data
}

export default useLocale
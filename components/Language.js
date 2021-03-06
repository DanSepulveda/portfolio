import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import HideLink from './HideLink'

const Language = ({ trans, side }) => {
    const { en, es } = trans
    const { asPath } = useRouter()
    const classType = side ? `${styles.sideflags}` : `${styles.flags}`

    return (
        <section className={classType}>
            <Link href={asPath} locale='en'>
                <a>
                    <Image
                        src={en.src}
                        alt={en.alt}
                        width={40}
                        height={26}
                    />
                    <HideLink>{en.text}</HideLink>
                </a>
            </Link>
            <Link href={asPath} locale='es'>
                <a>
                    <Image
                        src={es.src}
                        alt={es.alt}
                        width={40}
                        height={26}
                    />
                    <HideLink>{es.text}</HideLink>
                </a>
            </Link>
        </section>
    )
}

export default Language
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const Language = ({ trans }) => {
    const { en, es } = trans
    const { asPath } = useRouter()

    return (
        <section>
            <Link href={asPath} locale='en'>
                <a>
                    <Image
                        src={en.src}
                        alt={en.alt}
                        width={40}
                        height={26}
                    />
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
                </a>
            </Link>
        </section>
    )
}

export default Language
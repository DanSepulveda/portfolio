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
      <Link href={asPath} locale="en" passHref>
        <article>
          <Image src={en.src} alt={en.alt} width={40} height={26} />
          <HideLink>{en.text}</HideLink>
        </article>
      </Link>
      <Link href={asPath} locale="es" passHref>
        <article>
          <Image src={es.src} alt={es.alt} width={40} height={26} />
          <HideLink>{es.text}</HideLink>
        </article>
      </Link>
    </section>
  )
}

export default Language

import styles from '../styles/Social.module.css'
import Link from 'next/link'
import HideLink from './HideLink'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail, SiDocusign } from 'react-icons/si'

const SocialIcon = ({ icon, text, link, title }) => {
  const icons = {
    linkedin: <BsLinkedin />,
    github: <BsGithub />,
    email: <SiGmail />,
    resume: <SiDocusign />,
  }

  return (
    <div>
      <Link
        href={link}
        target="_blank"
        download={text.includes('CV') ? true : false}
        rel="noreferrer"
        passHref
      >
        <div>
          <div className={styles.icon}>
            <div>{icons[icon]}</div>
          </div>
          <HideLink>{title}</HideLink>
        </div>
      </Link>
      <span className={styles.text}>{text}</span>
    </div>
  )
}

export default SocialIcon

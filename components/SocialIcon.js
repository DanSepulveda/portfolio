import styles from '../styles/Social.module.css'
import HideLink from './HideLink'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail, SiDocusign } from 'react-icons/si'

const SocialIcon = ({ icon, text, link, title }) => {
    const icons = {
        linkedin: <BsLinkedin />,
        github: <BsGithub />,
        email: <SiGmail />,
        resume: <SiDocusign />
    }

    return (
        <div>
            <a href={link} target='_blank' download={text.includes('CV') ? true : false} rel='noreferrer'>
                <div className={styles.icon}>
                    <div>
                        {icons[icon]}
                    </div>
                </div>
                <HideLink>{title}</HideLink>
            </a>
            <span className={styles.text}>{text}</span>
        </div>
    )
}

export default SocialIcon
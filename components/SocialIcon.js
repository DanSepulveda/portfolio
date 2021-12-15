import styles from '../styles/Social.module.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail, SiDocusign } from 'react-icons/si'

const SocialIcon = ({ icon, text, link }) => {
    const icons = {
        linkedin: <BsLinkedin />,
        github: <BsGithub />,
        email: <SiGmail />,
        resume: <SiDocusign />
    }

    return (
        <div>
            <a href={link} target='_blank' download={text.includes('CV') ? true : false}>
                <div className={styles.icon}>
                    <div>
                        {icons[icon]}
                    </div>
                </div>
            </a>
            <span className={styles.text}>{text}</span>
        </div>
    )
}

export default SocialIcon
import styles from '../styles/Social.module.css'
import SocialIcon from './SocialIcon'

const Social = ({ trans }) => {
    const { resume, github, linkedin, email, file } = trans
    return (
        <div className={styles.socialContainer}>
            <SocialIcon
                icon='resume'
                text={resume}
                link={file}
            />
            <SocialIcon
                icon='linkedin'
                text={linkedin}
                link='https://www.linkedin.com/in/dansepulvedap/'
            />
            <SocialIcon
                icon='github'
                text={github}
                link='https://github.com/DanSepulveda'
            />
            <SocialIcon
                icon='email'
                text={email}
                link='mailto:dansepdev@gmail.com'
            />
        </div>
    )
}

export default Social
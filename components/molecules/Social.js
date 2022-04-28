import styles from '../../styles/Social.module.css'
import SocialIcon from '../atoms/SocialIcon'

const Social = ({ trans }) => {
    const { resume, github, linkedin, email, file } = trans

    return (
        <div className={styles.socialContainer}>
            <SocialIcon
                icon='resume'
                text={resume.text}
                link={file}
                title={resume.title}
            />
            <SocialIcon
                icon='linkedin'
                text={linkedin.text}
                link='https://www.linkedin.com/in/dansepulvedap/'
                title={linkedin.title}
            />
            <SocialIcon
                icon='github'
                text={github.text}
                link='https://github.com/DanSepulveda'
                title={github.title}
            />
            <SocialIcon
                icon='email'
                text={email.text}
                link='mailto:dansepdev@gmail.com'
                title={email.title}
            />
        </div>
    )
}

export default Social
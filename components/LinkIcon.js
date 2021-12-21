import HideLink from "./HideLink"
import Link from "next/link"
import { BsGithub, BsYoutube, BsFillFolderSymlinkFill } from 'react-icons/bs'
import { useRouter } from "next/router"

const LinkIcon = ({ icon, link }) => {
    const { locale } = useRouter()

    const svg = {
        webpage: <BsFillFolderSymlinkFill />,
        youtube: <BsYoutube />,
        github: <BsGithub />
    }

    const text = {
        webpage: locale === 'es' ? 'Demo' : 'Demostración',
        youtube: locale === 'es' ? 'Video Youtube' : 'Youtube Video',
        github: locale === 'es' ? 'Repositorio' : 'Repository'
    }

    return (
        <Link href={link}>
            <a>
                {svg[icon]}
                <HideLink>{text[icon]}</HideLink>
            </a>
        </Link>
    )
}

export default LinkIcon
import HideLink from "../atoms/HideLink"
import Link from "next/link"
import { BsGithub, BsYoutube, BsFillFolderSymlinkFill, BsLinkedin, BsEnvelopeFill } from 'react-icons/bs'

const LinkIcon = ({ icon, link, text }) => {
    const svg = {
        webpage: <BsFillFolderSymlinkFill />,
        youtube: <BsYoutube />,
        github: <BsGithub />,
        linkedin: <BsLinkedin />,
        email: <BsEnvelopeFill />
    }

    return (
        <Link href={link}>
            <a target='_blank' rel='noreferrer'>
                {svg[icon]}
                <HideLink>{text}</HideLink>
            </a>
        </Link>
    )
}

export default LinkIcon
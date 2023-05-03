import HideLink from './HideLink'
import Link from 'next/link'
import {
  BsGithub,
  BsYoutube,
  BsFillFolderSymlinkFill,
  BsLinkedin,
  BsEnvelopeFill,
} from 'react-icons/bs'

const LinkIcon = ({ icon, link, text }) => {
  const svg = {
    webpage: <BsFillFolderSymlinkFill />,
    youtube: <BsYoutube />,
    github: <BsGithub />,
    linkedin: <BsLinkedin />,
    email: <BsEnvelopeFill />,
  }

  return (
    <Link href={link} target="_blank" rel="noreferrer" passHref>
      <div>
        {svg[icon]}
        <HideLink>{text}</HideLink>
      </div>
    </Link>
  )
}

export default LinkIcon

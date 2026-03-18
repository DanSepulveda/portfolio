import type { SvgComponent } from "astro/types";

import { SITE } from "./config";
import Github from "@/assets/images/social/github.svg";
import LinkedIn from "@/assets/images/social/linkedin.svg";

export interface Social {
  id: "github" | "linkedin";
  name: "Github" | "LinkedIn";
  url: string;
  label: string;
  image: SvgComponent;
}

export const SOCIALS: Social[] = [
  {
    id: "github",
    name: "Github",
    image: Github,
    url: "https://github.com/DanSepulveda",
    label: `Perfil de Github ${SITE.author.name}`,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    image: LinkedIn,
    url: "https://www.linkedin.com/in/dansepulvedap",
    label: `Perfil de Linkedin ${SITE.author.name}`,
  },
];

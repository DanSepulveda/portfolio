interface NavLink {
  name: string;
  url: string;
}

export const INTERNAL_URLS = {
  home: "/",
  projects: "/proyectos",
  about: "/sobre-mi",
  contact: "/contacto",
};

export const EXTERNAL_URLS = {
  github: "https://github.com/DanSepulveda",
  linkedin: "https://www.linkedin.com/in/dansepulvedap",
};

export const NAV_LINKS: NavLink[] = [
  { name: "Inicio", url: INTERNAL_URLS.home },
  { name: "Proyectos", url: INTERNAL_URLS.projects },
  { name: "Sobre mí", url: INTERNAL_URLS.about },
  { name: "Contacto", url: INTERNAL_URLS.contact },
];

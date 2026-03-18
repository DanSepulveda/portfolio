import AstroDark from "@/assets/images/techs/astro-dark.svg";
import AstroLight from "@/assets/images/techs/astro.svg";
import CloudflareWorkersLight from "@/assets/images/techs/cloudflare-workers.svg";
import CloudflareLight from "@/assets/images/techs/cloudflare.svg";
import CloudinaryLight from "@/assets/images/techs/cloudinary.svg";
import DjangoLight from "@/assets/images/techs/django.svg";
import FastapiLight from "@/assets/images/techs/fastapi.svg";
import FirebaseLight from "@/assets/images/techs/firebase.svg";
import JavascriptLight from "@/assets/images/techs/javascript.svg";
import MongoDark from "@/assets/images/techs/mongo-dark.svg";
import MongoLight from "@/assets/images/techs/mongo.svg";
import NetlifyLight from "@/assets/images/techs/netlify.svg";
import NextLight from "@/assets/images/techs/nextjs.svg";
import NodeLight from "@/assets/images/techs/nodejs.svg";
import PostgresLight from "@/assets/images/techs/postgres.svg";
import PythonLight from "@/assets/images/techs/python.svg";
import ReactDark from "@/assets/images/techs/react-dark.svg";
import ReactLight from "@/assets/images/techs/react.svg";
import RedisLight from "@/assets/images/techs/redis.svg";
import SupabaseLight from "@/assets/images/techs/supabase.svg";
import TailwindLight from "@/assets/images/techs/tailwind.svg";
import TypescriptLight from "@/assets/images/techs/typescript.svg";
import VercelDark from "@/assets/images/techs/vercel-dark.svg";
import VercelLight from "@/assets/images/techs/vercel.svg";

export const TECHS = [
  {
    id: "astro",
    name: "Astro",
    logo: AstroLight,
    darkLogo: AstroDark,
  },
  {
    id: "cloudflare-workers",
    name: "Cloudflare Workers",
    logo: CloudflareWorkersLight,
    darkLogo: null,
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    logo: CloudflareLight,
    darkLogo: null,
  },
  {
    id: "cloudinary",
    name: "Cloudinary",
    logo: CloudinaryLight,
    darkLogo: null,
  },
  {
    id: "django",
    name: "Django",
    logo: DjangoLight,
    darkLogo: null,
  },
  {
    id: "fastapi",
    name: "FastAPI",
    logo: FastapiLight,
    darkLogo: null,
  },
  {
    id: "firebase",
    name: "Firebase",
    logo: FirebaseLight,
    darkLogo: null,
  },
  {
    id: "javascript",
    name: "JavaScript",
    logo: JavascriptLight,
    darkLogo: null,
  },
  {
    id: "mongo",
    name: "MongoDB",
    logo: MongoLight,
    darkLogo: MongoDark,
  },
  {
    id: "netlify",
    name: "Netlify",
    logo: NetlifyLight,
    darkLogo: null,
  },
  {
    id: "next",
    name: "NextJS",
    logo: NextLight,
    darkLogo: null,
  },
  {
    id: "node",
    name: "NodeJS",
    logo: NodeLight,
    darkLogo: null,
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    logo: PostgresLight,
    darkLogo: null,
  },
  {
    id: "python",
    name: "Python",
    logo: PythonLight,
    darkLogo: null,
  },
  {
    id: "react",
    name: "React",
    logo: ReactLight,
    darkLogo: ReactDark,
  },
  {
    id: "redis",
    name: "Redis",
    logo: RedisLight,
    darkLogo: null,
  },
  {
    id: "supabase",
    name: "Supabase",
    logo: SupabaseLight,
    darkLogo: null,
  },
  {
    id: "tailwind",
    name: "Tailwind",
    logo: TailwindLight,
    darkLogo: null,
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: TypescriptLight,
    darkLogo: null,
  },
  {
    id: "vercel",
    name: "Vercel",
    logo: VercelLight,
    darkLogo: VercelDark,
  },
] as const;

type TechElement = (typeof TECHS)[number];

export type TechId = TechElement["id"];

export const TECHS_MAP = Object.fromEntries(TECHS.map((t) => [t.id, t]));

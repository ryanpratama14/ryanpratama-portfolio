import dayjs from "dayjs";

import belinsky from "@/assets/belinsky.jpg";
import hebronstar from "@/assets/hebronstar.jpg";
import kima from "@/assets/kima.jpg";
import faotech from "@/assets/logo-faotech.png";
import nutech from "@/assets/logo-nutech.jpeg";
import mandiri from "@/assets/mandiri.jpg";
import turta from "@/assets/turta.jpg";

import type { DictionaryStatic, ExperienceItem, LinkSocialItem, NavbarItem, ProjectItem, SkillsItem } from "@/types";

const PHOTOS = {
  LOGO: { nutech, faotech },
  PROJECT: { belinsky, hebronstar, kima, mandiri, turta },
};

export const getIdendityData = (s: DictionaryStatic, isJapanese: boolean) => {
  const age = isJapanese ? s.PERSONAL_DATA.age : ` ${s.PERSONAL_DATA.age}`;
  return [s.PERSONAL_DATA.fullName, `${dayjs().diff(dayjs("2000-07-14"), "year")}${age}`, s.LOCATIONS.jakarta];
};

export const projectsData: ProjectItem[] = [
  {
    title: "Hebronstar Strategy Consultants",
    src: PHOTOS.PROJECT.hebronstar,
    desc: "Hebronstar is a Korean consulting firm catering to diverse global services and industries.",
    href: "https://hebronstar.com/en",
    lists: [
      "Developed a fullstack fully responsive web app using React",
      "Implemented internationalization using i18next for multi-language support",
      "Utilized TanStack Query with Axios to perform HTTP requests and consume RESTful APIs",
      "Integrated Tailwind CSS for responsive component-based styling",
      "Leveraged Redux Toolkit to implement a global state management solution",
    ],
  },
  {
    title: "KIMA",
    src: PHOTOS.PROJECT.kima,
    desc: "KIMA is a digital platform that helps universities assess the relevance of their programs in specific fields and their alignment with the competency requirements of the job market.",
    href: "https://kima-fe.vercel.app",
    lists: [
      "Developed a fullstack fully responsive web app using React",
      "Utilized Axios library to perform HTTP requests and consume RESTful APIs",
      "Integrated Tailwind CSS for responsive component-based styling",
      "Leveraged Redux Toolkit to implement a global state management solution",
    ],
  },
  {
    title: "TurunTangan",

    src: PHOTOS.PROJECT.turta,
    desc: "TurunTangan is a non-profit youth volunteer movement with more than 70 chapters across Indonesia.",
    href: "https://gerakanturuntangan.com",
    lists: [
      "Developed a fullstack fully responsive web app using React",
      "Optimized key content pages for SEO objectives",
      "Utilized Axios library to perform HTTP requests and consume RESTful APIs",
      "Integrated Tailwind CSS for responsive component-based styling",
      "Leveraged Redux Toolkit to implement a global state management solution",
    ],
  },
  {
    title: "Belinsky Production",
    src: PHOTOS.PROJECT.belinsky,
    desc: "Belinsky is a production house and creative studio that specializes in both professional photography and filmmaking.",
    href: "https://belinskyproduction.com",
    lists: [
      "Developed a static fully responsive web app using React",
      "Optimized key content pages for SEO objectives",
      "Integrated Tailwind CSS for responsive component-based styling",
    ],
  },
  {
    title: "Synergy Perdana Mandiri",
    src: PHOTOS.PROJECT.mandiri,
    desc: "A trading company specializing in general and chemicals trading.",
    href: "https://www.sinergyperdanamandiri.com",
    lists: [
      "Developed a static fully responsive web app using React",
      "Optimized key content pages for SEO objectives",
      "Integrated Tailwind CSS for responsive component-based styling",
    ],
  },
];

export const skillsData: SkillsItem[] = [
  { label: "T3 Stack", icon: "bi:stack" },
  { label: "React / Native", icon: "teenyicons:react-solid" },
  { label: "Next.js", icon: "teenyicons:nextjs-solid" },
  { label: "i18next", icon: "simple-icons:i18next" },
  { label: "Redux Toolkit", icon: "akar-icons:redux-fill" },
  { label: "Zod", icon: "simple-icons:zod" },
  { label: "React Hook Form", icon: "simple-icons:reacthookform" },
  { label: "tRPC", icon: "devicon-plain:trpc" },
  { label: "Drizzle", icon: "simple-icons:drizzle" },
  { label: "Prisma", icon: "simple-icons:prisma" },
  { label: "PostgreSQL", icon: "akar-icons:postgresql-fill" },
  { label: "MongoDB", icon: "teenyicons:mongodb-solid" },
  { label: "TanStack Query", icon: "simple-icons:reactquery" },
  { label: "Axios", icon: "simple-icons:axios" },
  { label: "Git", icon: "teenyicons:git-solid" },
  { label: "TypeScript", icon: "teenyicons:typescript-solid" },
  { label: "JavaScript", icon: "teenyicons:javascript-solid" },
  { label: "Tailwind CSS", icon: "teenyicons:tailwind-solid" },
  { label: "Ant Design", icon: "simple-icons:antdesign" },
  { label: "MUI", icon: "simple-icons:mui" },
  { label: "Styled Components", icon: "file-icons:styledcomponents" },
  { label: "Framer Motion", icon: "teenyicons:framer-solid" },
  { label: "Resend", icon: "simple-icons:resend" },
];

export const experienceData: ExperienceItem[] = [
  {
    src: PHOTOS.LOGO.nutech,
    label: "Nutech Integrasi",
    link: "https://www.nutech-integrasi.com",
    since: dayjs("2023-08").toDate(),
    till: null,
    location: "jakarta",
  },
  {
    src: PHOTOS.LOGO.faotech,
    label: "faoTech",
    link: "https://faotech.dev",
    since: dayjs("2022-09").toDate(),
    till: dayjs("2023-08").toDate(),
    location: "remote",
  },
];

export const navbarData: NavbarItem[] = [
  { href: "#about", icon: "mdi:about-circle-outline", label: "about" },
  { href: "#projects", icon: "mdi:local-cafe-outline", label: "projects" },
  { href: "#contact", icon: "mdi:contact-outline", label: "contacts" },
];

export const linkSocial: LinkSocialItem[] = [
  { href: "mailto:ryanpratama.dev@gmail.com", label: "Email", icon: "mdi:email-outline" },
  { href: "https://github.com/ryanpratama14", label: "GitHub", icon: "mdi:github" },
  { href: "https://www.linkedin.com/in/ryanpratama14", label: "LinkedIn", icon: "mdi:linkedin" },
  { href: "https://t.me/ryanpratama14", label: "Telegram", icon: "ph:telegram-logo" },
  { href: "https://wa.me/+6281210425333", label: "WhatsApp", icon: "mdi:whatsapp" },
  { href: "https://www.instagram.com/ryanpratama14", label: "Instagram", icon: "mdi:instagram" },
];

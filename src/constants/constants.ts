import belinsky from "@/assets/belinsky.jpg";
import belinsky2 from "@/assets/belinsky2.png";
import faotech from "@/assets/faoTech.png";
import hebronstar from "@/assets/hebronstar.jpg";
import hebronstar2 from "@/assets/hebronstar2.png";
import kima from "@/assets/kima.jpg";
import kima2 from "@/assets/kima2.png";
import mandiri1 from "@/assets/mandiri1.jpg";
import nutech from "@/assets/nutechIntegrasi.jpeg";
import turta from "@/assets/turta.jpg";
import turta2 from "@/assets/turta2.png";

export const identityData: string[] = ["Ryan Pratama", "23 yo", "Jakarta, Indonesia"];

export const projectsData: ProjectItems[] = [
  {
    title: "Hebronstar Strategy Consultants",
    icon: hebronstar2,
    src: hebronstar,
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
    icon: kima2,
    src: kima,
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
    icon: turta2,
    src: turta,
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
    icon: belinsky2,
    src: belinsky,
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
    icon: belinsky2,
    src: mandiri1,
    desc: "A trading company specializing in general and chemicals trading.",
    href: "https://www.sinergyperdanamandiri.com",
    lists: [
      "Developed a static fully responsive web app using React",
      "Optimized key content pages for SEO objectives",
      "Integrated Tailwind CSS for responsive component-based styling",
    ],
  },
];

export const skillsData: SkillsItems[] = [
  {
    label: "T3 Stack",
    icon: "bi:stack",
  },
  {
    label: "React / Native",
    icon: "teenyicons:react-solid",
  },
  {
    label: "Next.js",
    icon: "teenyicons:nextjs-solid",
  },
  {
    label: "i18next",
    icon: "simple-icons:i18next",
  },
  {
    label: "Redux Toolkit",
    icon: "akar-icons:redux-fill",
  },
  {
    label: "Zod",
    icon: "simple-icons:zod",
  },
  {
    label: "tRPC",
    icon: "devicon-plain:trpc",
  },
  {
    label: "Prisma ORM",
    icon: "simple-icons:prisma",
  },
  {
    label: "PostgreSQL",
    icon: "akar-icons:postgresql-fill",
  },
  {
    label: "MongoDB",
    icon: "teenyicons:mongodb-solid",
  },
  {
    label: "TanStack Query",
    icon: "simple-icons:reactquery",
  },
  {
    label: "Axios",
    icon: "simple-icons:axios",
  },
  {
    label: "Git",
    icon: "teenyicons:git-solid",
  },
  {
    label: "TypeScript",
    icon: "teenyicons:typescript-solid",
  },
  {
    label: "JavaScript",
    icon: "teenyicons:javascript-solid",
  },
  {
    label: "Tailwind CSS",
    icon: "teenyicons:tailwind-solid",
  },
  {
    label: "Ant Design",
    icon: "simple-icons:antdesign",
  },
  {
    label: "MUI",
    icon: "simple-icons:mui",
  },
  {
    label: "Styled Components",
    icon: "file-icons:styledcomponents",
  },
  {
    label: "Framer Motion",
    icon: "teenyicons:framer-solid",
  },
];

export const experienceData: ExperienceItems[] = [
  {
    src: nutech,
    label: "Nutech Integrasi",
    link: "https://www.nutech-integrasi.com",
    since: "aug 2023",
    till: "",
    location: "Jakarta, Indonesia",
  },
  {
    src: faotech,
    label: "faoTech",
    link: "https://faotech.dev",
    since: "sep 2022",
    till: "",
    location: "Remote",
  },
];

export const navbarData: NavbarItems[] = [
  {
    href: "#about",
    icon: "mdi:about-circle-outline",
    label: "About",
  },
  {
    href: "#projects",
    icon: "mdi:local-cafe-outline",
    label: "Projects",
  },
  {
    href: "#contact",
    icon: "mdi:contact-outline",
    label: "Contact",
  },
];

export const resumeData: resumeItems[] = [
  {
    label: "English",
    href: "/resume.pdf",
    icon: "EN",
  },
  {
    label: "Russian",
    href: "/resume_rus.pdf",
    icon: "RU",
  },
];

export const linkSocial: LinkSocialItems[] = [
  {
    href: "mailto:ru.ryanpratama@gmail.com",
    label: "Email",
    icon: "mdi:email-outline",
  },
  {
    href: "https://github.com/ryanpratama14",
    label: "GitHub",
    icon: "mdi:github",
  },
  {
    href: "https://www.linkedin.com/in/ryanpratama14",
    label: "LinkedIn",
    icon: "mdi:linkedin",
  },
  {
    href: "https://t.me/ryanpratama14",
    label: "Telegram",
    icon: "ph:telegram-logo",
  },
  {
    href: "https://wa.me/+6281210425333",
    label: "WhatsApp",
    icon: "mdi:whatsapp",
  },
  {
    href: "https://www.instagram.com/ryanpratama14",
    label: "Instagram",
    icon: "mdi:instagram",
  },
];

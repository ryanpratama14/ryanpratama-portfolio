import { genreateRussianAge } from "@/lib/functions";
import type { Certification, Contact, DictionaryStatic, Experience, Other, Project, TechStack } from "@/types";
import dayjs from "dayjs";

// projects
import belinsky from "@/assets/belinsky.jpg";
import hebronstar from "@/assets/hebronstar.jpg";
import kima from "@/assets/kima.jpg";
import mandiri from "@/assets/mandiri.jpg";
import turta from "@/assets/turta.jpg";

// certifications
import n4 from "@/assets/jlpt-n4.jpeg";
import podfak from "@/assets/podfak.jpeg";

// logos
import faotech from "@/assets/logo-faotech.png";
import kfu from "@/assets/logo-kfu.png";
import nutech from "@/assets/logo-nutech.jpeg";

export const PHOTOS = {
  logo: { nutech, faotech, kfu },
  project: { belinsky, hebronstar, kima, mandiri, turta },
  certifications: { n4, podfak },
};

export const ICONS = {
  notFound: "ooui:article-not-found-ltr",
  close: "mdi:close",
  arrow: "material-symbols:arrow-back-ios",
  accordionArrow: "bxs:up-arrow",
};

export const getProfileData = ({ s, isJapanese, isRussian }: { s: DictionaryStatic; isJapanese: boolean; isRussian: boolean }) => {
  const addCounter = (text: string) => (isJapanese ? text : ` ${text}`);

  const calculatedAge = dayjs().diff(dayjs("2000-07-14"), "year");
  const calculatedYoe = (dayjs().diff(dayjs("2022-09-01"), "month") / 12).toFixed(1);

  const age = `${calculatedAge}${isRussian ? ` ${genreateRussianAge(calculatedAge)}` : addCounter(s.PERSONAL_DATA.age)}`;
  const yoe = `${calculatedYoe}${addCounter(s.SECTIONS.yearsExperience)}`;

  return [
    { href: "/resume.pdf", icon: "mdi:resume", title: s.SECTIONS.resume },
    { icon: "mdi:work", title: yoe },
    { icon: "mdi:location", title: s.LOCATIONS.jakarta },
    { icon: "mdi:person", title: age },
  ];
};

export const OTHERS: Other = {
  education: [
    {
      key: "kfu",
      href: "https://kpfu.ru",
      src: PHOTOS.logo.kfu,
      since: dayjs("2019-09").toDate(),
      till: dayjs("2023-06").toDate(),
    },
  ],
  languages: ["id", "en", "ja", "ru"],
};

export const CERTIFICATIONS: Certification[] = [
  { name: "jlpt-n4", src: PHOTOS.certifications.n4, alt: "JLPT N4 Certification, Ryan Pratama", title: "Japanese-Language Proficiency Test N4" },
  {
    name: "preparatory-faculty-of-russian-language",
    src: PHOTOS.certifications.podfak,
    alt: "Preparatory Faculty of Russian Language Certification, Ryan Pratama",
    title: "Preparatory Faculty of Russian Language",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Hebronstar Strategy Consultants",
    src: PHOTOS.project.hebronstar,
    desc: "A Korean consulting firm that provides global services and industries, featuring a career microsite, admin dashboard, and landing pages for advertising job openings and managing candidate applications.",
    href: "https://hebronstar.com/en",
    lists: [
      "Developed a full-stack fully responsive web app using React",
      "Implemented internationalization using i18next for multi-language support",
      "Utilized TanStack Query with Axios to perform HTTP requests and consume RESTful APIs",
      "Integrated Tailwind CSS for responsive component-based styling",
      "Leveraged Redux Toolkit to implement a global state management solution",
    ],
  },
  {
    title: "TurunTangan",
    src: PHOTOS.project.turta,
    desc: "Indonesia's largest non-profit youth volunteer network with 100+ chapters, including an admin dashboard to manage volunteers, view and manage site content, and automate their volunteer network and operations.",
    href: "https://gerakanturuntangan.com",
    lists: [
      "Developed a full-stack fully responsive web app using React",
      "Optimized key content pages for SEO objectives",
      "Utilized Axios library to perform HTTP requests and consume RESTful APIs",
      "Integrated Tailwind CSS for responsive component-based styling",
      "Leveraged Redux Toolkit to implement a global state management solution",
    ],
  },
  {
    title: "KIMA",
    src: PHOTOS.project.kima,
    desc: "A digital platform that helps universities assess the relevance of their programs in specific fields and their alignment with the competency requirements of the job market.",
    href: "https://kima-fe.vercel.app",
    lists: [
      "Developed a full-stack fully responsive web app using React",
      "Utilized Axios library to perform HTTP requests and consume RESTful APIs",
      "Integrated Tailwind CSS for responsive component-based styling",
      "Leveraged Redux Toolkit to implement a global state management solution",
    ],
  },

  {
    title: "Belinsky",
    src: PHOTOS.project.belinsky,
    desc: "A production house and creative studio specializing in professional photography and filmmaking, showcasing their services, creative works, and client projects to attract new clients.",
    href: "https://belinskyproduction.com",
    lists: [
      "Developed a static fully responsive web app using React",
      "Optimized key content pages for SEO objectives",
      "Integrated Tailwind CSS for responsive component-based styling",
    ],
  },
  {
    title: "Synergy Perdana Mandiri",
    src: PHOTOS.project.mandiri,
    desc: "A trading company specializing in general and chemicals trading, providing company and product information to customers in the fertilizer and chemical industries.",
    href: "https://www.sinergyperdanamandiri.com",
    lists: [
      "Developed a static fully responsive web app using React",
      "Optimized key content pages for SEO objectives",
      "Integrated Tailwind CSS for responsive component-based styling",
    ],
  },
];

export const TECH_STACKS: TechStack = {
  programmingLanguages: [
    { label: "TypeScript", icon: "teenyicons:typescript-solid" },
    { label: "JavaScript", icon: "teenyicons:javascript-solid" },
    { label: "HTML", icon: "akar-icons:html-fill" },
    { label: "CSS", icon: "akar-icons:css-fill" },
  ],

  librariesFrameworks: [
    { label: "T3 Stack", icon: "bi:stack" },
    { label: "React / Next.js", icon: "teenyicons:react-solid", icon2: "teenyicons:nextjs-solid" },
    { label: "React Native", icon: "tabler:brand-react-native" },
    { label: "tRPC", icon: "devicon-plain:trpc" },
    { label: "Node.js", icon: "akar-icons:node-fill" },
    { label: "Express.js", icon: "simple-icons:express" },
    { label: "Hono", icon: "simple-icons:hono" },
    { label: "i18next", icon: "simple-icons:i18next" },
    { label: "Redux Toolkit", icon: "akar-icons:redux-fill" },
    { label: "Zod", icon: "simple-icons:zod" },
    { label: "React Hook Form", icon: "simple-icons:reacthookform" },
    { label: "Drizzle", icon: "simple-icons:drizzle" },
    { label: "Prisma", icon: "simple-icons:prisma" },
    { label: "TanStack Query", icon: "simple-icons:reactquery" },
    { label: "Axios", icon: "simple-icons:axios" },
    { label: "Tailwind CSS", icon: "teenyicons:tailwind-solid" },
    { label: "shadcn/ui", icon: "simple-icons:shadcnui" },
    { label: "styled-components", icon: "file-icons:styledcomponents" },
    { label: "Ant Design", icon: "simple-icons:antdesign" },
    { label: "NextUI", icon: "simple-icons:nextui" },
    { label: "MUI", icon: "simple-icons:mui" },
    { label: "Framer Motion", icon: "teenyicons:framer-solid" },
    { label: "Resend", icon: "simple-icons:resend" },
    { label: "React-pdf / js-PDF", icon: "teenyicons:pdf-solid" },
    { label: "ExcelJS", icon: "teenyicons:ms-excel-solid" },
  ],

  db: [
    { label: "MongoDB", icon: "teenyicons:mongodb-solid" },
    { label: "PostgreSQL", icon: "akar-icons:postgresql-fill" },
    { label: "MySQL", icon: "simple-icons:mysql" },
  ],

  learning: [
    { label: "Swift", icon: "simple-icons:swift" },
    { label: "Flutter", icon: "material-symbols:flutter" },
    { label: "Go", icon: "simple-icons:go" },
    { label: "Vue / Nuxt.js", icon: "mdi:vuejs", icon2: "file-icons:nuxt" },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    src: PHOTOS.logo.nutech,
    label: "Nutech Integrasi",
    link: "https://www.nutech-integrasi.com",
    since: dayjs("2023-08").toDate(),
    till: null,
    location: "jakarta",
    position: "softwareEngineerFrontend",
    duty: [
      "Developed CEISA 4.0, a web app for the Indonesian Directorate General of Customs and Excise, impacting 5000+ users.",
      "Created 25+ document formats and implemented PDF/XLSX rendering using React-pdf, jsPDF and ExcelJS.",
      "Ensured app quality with comprehensive testing: unit, integration, and end-to-end.",
      "Implemented seamless integration of RESTful APIs using Axios.",

      "Built fully responsive user interfaces primarily with Ant Design.",
      "Collaborated with UI/UX designers to implement visually compelling and intuitive interfaces.",

      "Worked with cross-functional teams, including back-end and QA engineers.",
      "Maintained regular and effective communication with system analysts.",
      "Utilized Git and Jira for prioritizing enhancements and bug fixes.",
      "Created documentation, aiding stakeholder understanding and future maintenance.",
    ],
  },
  {
    src: PHOTOS.logo.faotech,
    label: "faoTech",
    link: "https://faotech.dev",
    since: dayjs("2022-09").toDate(),
    till: dayjs("2023-08").toDate(),
    location: "remote",
    position: "softwareEngineerFullstack",
    duty: [
      "Managed a front-end team of 2 to 3 engineers across 3 projects.",
      "Built responsive web apps compatible across devices, integrating loading animations.",
      "Implemented essential authorization features like login, registration, and account recovery.",
      "Collaborated with UI/UX designers to create visually compelling user interfaces.",
      "Integrated internationalization support with i18next framework.",

      "Spearheaded back-end development, including API development, server-side logic, and database management.",
      "Proficient in CRUD operations and optimized RESTful API endpoints.",

      "Maintained comprehensive documentation to facilitate understanding with stakeholders.",
      "Provided ongoing maintenance and support for applications.",
    ],
  },
];

export const CONTACTS: Contact[] = [
  { href: "mailto:ryanpratama.dev@gmail.com", label: "Email", icon: "mdi:email-outline" },
  { href: "https://github.com/ryanpratama14", label: "GitHub", icon: "mdi:github" },
  { href: "https://www.linkedin.com/in/ryanpratama14", label: "LinkedIn", icon: "mdi:linkedin" },
  { href: "https://t.me/ryanpratama14", label: "Telegram", icon: "ph:telegram-logo" },
  { href: "https://wa.me/+6281210425333", label: "WhatsApp", icon: "mdi:whatsapp" },
  { href: "https://www.instagram.com/ryanpratama14", label: "Instagram", icon: "mdi:instagram" },
];

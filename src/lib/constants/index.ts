import { getBaseUrl } from "@/lib/utils";
import type { Certification, Contact, History, Lang, Other, Project, TechStack } from "@/types";
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
import { env } from "@/env";

export const COOKIES = {
  lang: "lang",
};

export const ENDPOINTS = {
  trpc: "/api/trpc",
};

export const URL = {
  development: getBaseUrl(),
  production: env.NEXT_PUBLIC_URL,
};

export const URLS = {
  DEVELOPMENT: {
    BASE: URL.development,
    BASE_TRPC: `${URL.development}${ENDPOINTS.trpc}`,
    BASE_LANG: (lang: Lang) => `${URL.development}/${lang}`,
    FULL: (path: string) => `${URL.development}${path}`,
  },

  PRODUCTION: {
    BASE: URL.production,
    BASE_LANG: (lang: Lang) => `${URL.production}/${lang}`,
    FULL: (path: string) => `${URL.production}${path}`,
    OG_IMAGE: `${URL.production}/og.png`,
  },
};

export const PERSONALS = {
  age: dayjs().diff(dayjs("2000-07-14"), "year"),
  yoe: (dayjs().diff(dayjs("2022-09-01"), "month") / 12).toFixed(1),
  x: "@totorogoriorio",
};

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
  link: "fa-solid:external-link-alt",

  resume: "mdi:resume",
  yoe: "mdi:work",
  location: "mdi:location",
  age: "mdi:person",

  ts: "teenyicons:typescript-solid",
  js: "teenyicons:javascript-solid",
  html: "akar-icons:html-fill",
  css: "akar-icons:css-fill",

  t3: "bi:stack",
  react: "teenyicons:react-solid",
  reactNative: "tabler:brand-react-native",
  nextjs: "teenyicons:nextjs-solid",
  trpc: "devicon-plain:trpc",
  nodejs: "akar-icons:node-fill",
  expressjs: "simple-icons:express",
  hono: "simple-icons:hono",
  i18next: "simple-icons:i18next",
  redux: "akar-icons:redux-fill",
  zod: "simple-icons:zod",
  reactHookForm: "simple-icons:reacthookform",
  drizzle: "simple-icons:drizzle",
  prisma: "simple-icons:prisma",
  reactQuery: "simple-icons:reactquery",
  axios: "simple-icons:axios",
  tailwind: "teenyicons:tailwind-solid",
  shadcnui: "simple-icons:shadcnui",
  styledComponents: "file-icons:styledcomponents",
  antDesign: "simple-icons:antdesign",
  nextui: "simple-icons:nextui",
  mui: "simple-icons:mui",
  framerMotion: "teenyicons:framer-solid",
  resend: "simple-icons:resend",
  reactPdf: "teenyicons:pdf-solid",
  exceljs: "teenyicons:ms-excel-solid",

  mongodb: "teenyicons:mongodb-solid",
  postgresql: "akar-icons:postgresql-fill",
  mysql: "simple-icons:mysql",

  swift: "simple-icons:swift",
  flutter: "material-symbols:flutter",
  go: "simple-icons:go",
  vue: "mdi:vuejs",
  nuxtjs: "file-icons:nuxt",

  email: "mdi:email-outline",
  github: "mdi:github",
  linkedin: "mdi:linkedin",
  telegram: "ph:telegram-logo",
  whatsapp: "mdi:whatsapp",
  instagram: "mdi:instagram",
};

export const CERTIFICATIONS: Certification[] = [
  { name: "jlpt-n4", src: PHOTOS.certifications.n4, alt: "JLPT N4 Certification, Ryan Pratama", label: "Japanese-Language Proficiency Test N4" },
  {
    name: "preparatory-faculty-of-russian-language",
    src: PHOTOS.certifications.podfak,
    alt: "Preparatory Faculty of Russian Language Certification, Ryan Pratama",
    label: "Preparatory Faculty of Russian Language",
  },
];

export const PROJECTS: Project[] = [
  {
    label: "Hebronstar Strategy Consultants",
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
    label: "TurunTangan",
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
    label: "Belinsky",
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
    label: "Synergy Perdana Mandiri",
    src: PHOTOS.project.mandiri,
    desc: "A trading company specializing in general and chemicals trading, providing company and product information to customers in the fertilizer and chemical industries.",
    href: "https://www.sinergyperdanamandiri.com",
    lists: [
      "Developed a static fully responsive web app using React",
      "Optimized key content pages for SEO objectives",
      "Integrated Tailwind CSS for responsive component-based styling",
    ],
  },
  {
    label: "KIMA",
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
];

export const TECH_STACKS: TechStack = {
  programmingLanguages: [
    { label: "TypeScript", icon: ICONS.ts },
    { label: "JavaScript", icon: ICONS.js },
    { label: "HTML", icon: ICONS.html },
    { label: "CSS", icon: ICONS.css },
  ],

  librariesFrameworks: [
    { label: "T3 Stack", icon: ICONS.t3 },
    { label: "React / Next.js", icon: ICONS.react, icon2: ICONS.nextjs },
    { label: "React Native", icon: ICONS.reactNative },
    { label: "tRPC", icon: "devicon-plain:trpc" },
    { label: "Node.js", icon: ICONS.nodejs },
    { label: "Express.js", icon: ICONS.expressjs },
    { label: "Hono", icon: ICONS.hono },
    { label: "i18next", icon: ICONS.i18next },
    { label: "Redux Toolkit", icon: ICONS.redux },
    { label: "Zod", icon: ICONS.zod },
    { label: "React Hook Form", icon: ICONS.reactHookForm },
    { label: "Drizzle", icon: ICONS.drizzle },
    { label: "Prisma", icon: ICONS.prisma },
    { label: "TanStack Query", icon: ICONS.reactQuery },
    { label: "Axios", icon: ICONS.axios },
    { label: "Tailwind CSS", icon: ICONS.tailwind },
    { label: "shadcn/ui", icon: ICONS.shadcnui },
    { label: "styled-components", icon: ICONS.styledComponents },
    { label: "Ant Design", icon: ICONS.antDesign },
    { label: "NextUI", icon: ICONS.nextui },
    { label: "MUI", icon: ICONS.mui },
    { label: "Framer Motion", icon: ICONS.framerMotion },
    { label: "Resend", icon: ICONS.resend },
    { label: "React-pdf / js-PDF", icon: ICONS.reactPdf },
    { label: "ExcelJS", icon: ICONS.exceljs },
  ],

  db: [
    { label: "MongoDB", icon: ICONS.mongodb },
    { label: "PostgreSQL", icon: ICONS.postgresql },
    { label: "MySQL", icon: ICONS.mysql },
  ],

  learning: [
    { label: "Swift", icon: ICONS.swift },
    { label: "Flutter", icon: ICONS.flutter },
    { label: "Go", icon: ICONS.go },
    { label: "Vue / Nuxt.js", icon: ICONS.vue, icon2: ICONS.nuxtjs },
  ],
};

export const OTHERS: Other = {
  languages: ["id", "en", "ja", "ru"],
  education: [
    {
      key: "kfu",
      href: "https://kpfu.ru",
      src: PHOTOS.logo.kfu,
      since: dayjs("2019-09").toDate(),
      till: dayjs("2023-06").toDate(),
      hasSquarePhoto: true,
    },
  ],
};

export const EXPERIENCES: History[] = [
  {
    key: "nutech",
    src: PHOTOS.logo.nutech,
    href: "https://www.nutech-integrasi.com",
    since: dayjs("2023-08").toDate(),
    till: null,
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
    key: "faotech",
    src: PHOTOS.logo.faotech,
    href: "https://faotech.dev",
    since: dayjs("2022-09").toDate(),
    till: dayjs("2023-08").toDate(),
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
  { href: "mailto:ryanpratama.dev@gmail.com", label: "Email", icon: ICONS.email },
  { href: "https://github.com/ryanpratama14", label: "GitHub", icon: ICONS.github },
  { href: "https://www.linkedin.com/in/ryanpratama14", label: "LinkedIn", icon: ICONS.linkedin },
  { href: "https://t.me/ryanpratama14", label: "Telegram", icon: ICONS.telegram },
  { href: "https://wa.me/+6281210425333", label: "WhatsApp", icon: ICONS.whatsapp },
  { href: "https://www.instagram.com/ryanpratama14", label: "Instagram", icon: ICONS.instagram },
];

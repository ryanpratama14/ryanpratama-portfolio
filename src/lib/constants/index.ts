import type { Certification, Contact, History, Other, Project, TechStack } from "@/types";
import dayjs from "dayjs";

import avatar from "#/images/avatar.webp";
import n3 from "#/images/certification/jlpt-n3.webp";
import podfak from "#/images/certification/podfak.webp";
import faotech from "#/images/logo/faotech.webp";
import kfu from "#/images/logo/kfu.webp";
import nutech from "#/images/logo/nutech.webp";
import rave from "#/images/logo/rave.webp";
import belinsky from "#/images/project/belinsky.webp";
import hebronstar from "#/images/project/hebronstar.webp";
import kima from "#/images/project/kima.webp";
import mandiri from "#/images/project/mandiri.webp";
import turta from "#/images/project/turta.webp";

const EXPERIENCE_START_DATE = dayjs("2022-09-01").toDate();
export const UPDATED_ON = dayjs().toDate();

export const PERSONALS = {
  age: dayjs().diff(dayjs("2000-07-14"), "year"),
  yoe: +(dayjs().diff(EXPERIENCE_START_DATE, "month") / 12).toFixed(1),
  x: "@totorogoriorio",
};

export const PHOTOS = {
  logo: { nutech, faotech, kfu, rave },
  project: { belinsky, hebronstar, kima, mandiri, turta },
  certifications: { n3, podfak },
  avatar,
};

export const EXPERIENCES: History[] = [
  // {
  //   key: "rave",
  //   src: PHOTOS.logo.rave,
  //   href: "https://www.rave.tech",
  //   since: dayjs("2024-11").toDate(),
  //   till: null,
  //   location: "singapore",
  //   type: "remote",
  // },
  {
    key: "nutech",
    src: PHOTOS.logo.nutech,
    href: "https://www.nutech-integrasi.com",
    since: dayjs("2023-08").toDate(),
    till: dayjs("2024-11").toDate(),
    location: "jakarta",
    type: "onsite",
  },
  {
    key: "faotech",
    src: PHOTOS.logo.faotech,
    href: "https://faotech.dev",
    since: EXPERIENCE_START_DATE,
    till: dayjs("2023-08").toDate(),
    location: "kazan",
    type: "remote",
  },
];

export const OTHERS: Other = {
  languages: ["id", "en", "ja", "ru"],
  education: [
    {
      key: "kfu",
      href: "https://kpfu.ru",
      src: PHOTOS.logo.kfu,
      since: dayjs("2019-09").toDate(),
      till: dayjs("2023-06").toDate(),
      location: "kazan",
    },
  ],
};

export const ICONS = {
  send: "mdi:send",
  notFound: "ooui:article-not-found-ltr",
  close: "mdi:close",
  arrow: "material-symbols:arrow-back-ios",
  accordionArrow: "bxs:up-arrow",
  link: "fa-solid:external-link-alt",

  resume: "mdi:resume",
  yoe: "mdi:work",
  location: "mdi:location",
  age: "bi:person-fill",

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
  sanity: "devicon-plain:sanity",

  mongodb: "teenyicons:mongodb-solid",
  postgresql: "akar-icons:postgresql-fill",
  mysql: "simple-icons:mysql",

  swift: "simple-icons:swift",
  flutter: "material-symbols:flutter",
  go: "simple-icons:go",
  vue: "mdi:vuejs",
  nuxtjs: "file-icons:nuxt",
  rust: "teenyicons:rust-solid",

  email: "mdi:email-outline",
  github: "mdi:github",
  linkedin: "mdi:linkedin",
  telegram: "ph:telegram-logo",
  whatsapp: "mdi:whatsapp",
  instagram: "mdi:instagram",
};

export const CERTIFICATIONS: Certification[] = [
  { name: "jlpt-n3", src: PHOTOS.certifications.n3, alt: "JLPT N3 Certification, Ryan Pratama", label: "N3, Japanese-Language Proficiency Test" },
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
    key: "hebronstar",
    href: "https://hebronstar.com/en",
  },
  {
    label: "TurunTangan",
    src: PHOTOS.project.turta,
    key: "turuntangan",
    href: "https://gerakanturuntangan.com",
  },
  {
    label: "Belinsky",
    src: PHOTOS.project.belinsky,
    key: "belinsky",
    href: "https://belinskyproduction.com",
  },
  {
    label: "Synergy Perdana Mandiri",
    src: PHOTOS.project.mandiri,
    key: "mandiri",
    href: "https://www.sinergyperdanamandiri.com",
  },
  {
    label: "KIMA",
    src: PHOTOS.project.kima,
    key: "kima",
    href: "https://kima.kpfu.ru",
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
    { label: "Sanity", icon: ICONS.sanity },

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
    // { label: "Go", icon: ICONS.go },
    { label: "Rust", icon: ICONS.rust },
    // { label: "Vue / Nuxt.js", icon: ICONS.vue, icon2: ICONS.nuxtjs },
  ],
};

export const CONTACTS: Contact[] = [
  { href: "mailto:ryanpratama.dev@gmail.com", label: "Email", icon: ICONS.email },
  { href: "https://github.com/ryanpratama14", label: "GitHub", icon: ICONS.github },
  { href: "https://www.linkedin.com/in/ryanpratama14", label: "LinkedIn", icon: ICONS.linkedin },
  { href: "https://t.me/ryanpratama14", label: "Telegram", icon: ICONS.telegram },
  { href: "https://wa.me/6281210425333", label: "WhatsApp", icon: ICONS.whatsapp },
  { href: "https://www.instagram.com/ryanpratama14", label: "Instagram", icon: ICONS.instagram },
];

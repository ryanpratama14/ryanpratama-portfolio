import faotech from "@/assets/faoTech.png";
import faotech2 from "@/assets/faoTech2.jpeg";

import kima from "@/assets/kima.png";
import kima2 from "@/assets/kima2.png";

import turta from "@/assets/turta.png";
import turta2 from "@/assets/turta2.png";

import belinsky from "@/assets/belinsky.png";
import belinsky2 from "@/assets/belinsky2.png";

export const projectsData: ProjectItems[] = [
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
    href: "https://turuntangan.id",
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
];

export const skillsData: SkillsItems[] = [
  {
    label: "React",
    icon: "teenyicons:react-solid",
  },
  {
    label: "React Native",
    icon: "teenyicons:react-solid",
  },
  {
    label: "Next.js",
    icon: "teenyicons:nextjs-solid",
  },
  {
    label: "Redux Toolkit",
    icon: "akar-icons:redux-fill",
  },
  {
    label: "Vite",
    icon: "file-icons:vite",
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
];

export const experienceData: ExperienceItems[] = [
  {
    location: "Kazan, Russia (remote)",
    src: faotech,
    src2: faotech2,
    label: "faoTech",
    links: [
      {
        icon: "ph:globe",
        href: "https://faotech.dev",
      },
      {
        icon: "mdi:linkedin",
        href: "https://www.linkedin.com/company/faotech",
      },
    ],
    since: "sep 2022 - present",
    as: "Frontend Engineer",
    companyDetails:
      "Indonesian-based software house company. Our unique combination of Indonesian and Russian educational backgrounds allows us to serve clients from diverse industries and locations, and we are open to new projects worldwide.",
    moreDetails: [
      "Developed 3 fully responsive web apps as using React.",
      "Optimized key content pages for SEO objectives.",
      "Created reusable JavaScript functions and JSX components that sped up the development process.",
      "Conducted routine updates to ensure optimal website performance.",
      "Utilized Axios to implement RESTful APIs, enabling seamless communication between the frontend and backend.",
      "Utilized industry best practices and stayed up-to-date with the latest frontend technologies.",
      "Received great feedback from the Project Manager and Team Lead.",
    ],
  },
];

export const navbarData: NavbarItems[] = [
  {
    href: "#about",
    icon: "mdi:about-circle-outline",
    label: "About",
  },
  // {
  //   href: "#experience",
  //   icon: "icon-park-outline:journey",
  //   label: "Experience",
  // },
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
    color: "#57E6D9",
  },
  {
    href: "https://github.com/ryanpratama14",
    label: "GitHub",
    icon: "mdi:github",
    color: "#2046CE",
  },
  {
    href: "https://www.linkedin.com/in/ryanpratama14/",
    label: "LinkedIn",
    icon: "mdi:linkedin",
    color: "#338DCE",
  },
  {
    href: "https://t.me/ryanpratama14",
    label: "Telegram",
    icon: "ph:telegram-logo",
    color: "#57E6D9",
  },
  {
    href: "https://wa.me/+79961005202",
    label: "WhatsApp",
    icon: "mdi:whatsapp",
    color: "#2046CE",
  },
  {
    href: "https://www.instagram.com/ryanpratama14/",
    label: "Instagram",
    icon: "mdi:instagram",
    color: "#338DCE",
  },
];

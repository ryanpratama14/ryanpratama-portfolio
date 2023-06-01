import faotech from "../../../public/assets/faoTech.png";
import faotech2 from "../../../public/assets/faoTech2.jpeg";

export const experienceData: ExperienceItems[] = [
  {
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
    since: "september 2022 - present",
    as: "Front-End Developer",
    companyDetails:
      "Indonesian-based software house company. Our unique combination of Indonesian and Russian educational backgrounds allows us to serve clients from diverse industries and locations, and we are open to new projects worldwide.",
    moreDetails: [
      "Developed 3 fully responsive web apps as using React.js.",
      "Optimized key content pages for SEO objectives.",
      "Created reusable JavaScript functions and JSX components that sped up the development process.",
      "Conducted routine updates to ensure optimal website performance.",
      "Utilized Axios to implement RESTful APIs, enabling seamless communication between the front-end and back-end.",
      "Utilized industry best practices and stayed up-to-date with the latest front-end technologies.",
      "Received great feedback from the Project Manager and Team Lead.",
    ],
    skills: [
      {
        label: "React.js",
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
    icon: "ant-design:project-outlined",
    label: "Projects",
  },
  {
    href: "#contact",
    icon: "material-symbols:contact-emergency-outline",
    label: "Contact",
  },
];

export const portfolioData: PortfolioItems[] = [
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
    href: "https://www.linkedin.com/in/ryanpratama14/",
    label: "LinkedIn",
    icon: "mdi:linkedin",
  },
  {
    href: "https://t.me/ryanpratama14",
    label: "Telegram",
    icon: "ph:telegram-logo",
  },
  {
    href: "https://wa.me/+79961005242",
    label: "WhatsApp",
    icon: "mdi:whatsapp",
  },
  {
    href: "https://www.instagram.com/ryanpratama14/",
    label: "Instagram",
    icon: "mdi:instagram",
  },
];

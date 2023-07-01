type NavbarItems = {
  label: string;
  icon: string | IconifyIcon;
  href: string;
};

type LinkSocialItems = {
  href: string;
  label: string;
  icon: string | IconifyIcon;
};

type resumeItems = {
  href: string;
  label: string;
  icon: string | IconifyIcon;
};

type ExperienceItems = {
  src: StaticImageData;
  label: string;
  link: string;
  since: string;
};

type SkillsItems = {
  label: string;
  icon: string | IconifyIcon;
};

type ProjectItems = {
  title: string;
  icon: StaticImageData;
  desc: string;
  href: string;
  lists: string[];
  src: StaticImageData;
};

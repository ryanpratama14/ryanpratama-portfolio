type NavbarItems = {
  label: string;
  icon: string;
  href: string;
};

type LinkSocialItems = {
  href: string;
  label: string;
  icon: string;
};

type resumeItems = {
  href: string;
  label: string;
  icon: string;
};

type ExperienceItems = {
  src: StaticImageData;
  label: string;
  link: string;
  since: string;
};

type SkillsItems = {
  label: string;
  icon: string;
};

type ProjectItems = {
  title: string;
  icon: StaticImageData;
  desc: string;
  href: string;
  lists: string[];
  src: StaticImageData;
};

type ReactNodeProps = {
  children: React.ReactNode;
};

type NavbarItems = {
  label: string;
  icon: string | IconifyIcon;
  href: string;
};

type LinkSocialItems = {
  href: string;
  label: string;
  icon: string | IconifyIcon;
  color: string;
};

type resumeItems = {
  href: string;
  label: string;
  icon: string | IconifyIcon;
};

type ExperienceItems = {
  label: string;
  since: string;
  links: LinksItems[];
  src: StaticImageData;
  as: string;
  companyDetails: string;
  moreDetails: string[];
  location: string;
};

type SkillsItems = {
  label: string;
  icon: string | IconifyIcon;
};

type LinksItems = {
  icon: string | IconifyIcon;
  href: string;
};

type ProjectItems = {
  title: string;
  icon: StaticImageData;
  desc: string;
  href: string;
  lists: string[];
  src: StaticImageData;
};

type NavbarItems = {
  label?: string;
  icon?: string | IconifyIcon;
  href?: string;
};

type LinkSocialItems = {
  href?: string;
  label?: string;
  icon?: string | IconifyIcon;
};

type PortfolioItems = {
  href?: string;
  label?: string;
  icon?: string | IconifyIcon;
};

type ExperienceItems = {
  label: string;
  since: string;
  links?: LinksItems[];
  src?: StaticImageData;
  src2?: StaticImageData;
  as: string;
  companyDetails?: string;
  moreDetails?: string[];
  location?: string;
};

type SkillsItems = {
  label?: string;
  icon?: string | IconifyIcon;
};

type LinksItems = {
  icon?: string | IconifyIcon;
  href?: string;
};

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

export declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    before?: string;
  }
}

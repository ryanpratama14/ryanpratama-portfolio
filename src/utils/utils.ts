import { Metadata } from "next";

export const LoadToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

export const generateSEO = (title: string, description: string, url: string): Metadata => {
  return {
    manifest: "/manifest.json",
    title,
    description,
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
};

export const LoadToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const handleClick = (e: any) => {
  e.preventDefault();
  const target = e.target.getAttribute("href");
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
};

import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="px-normal pb-longer7 md:pb-longer2 xl:pb-normal pt-6 flex justify-center items-center">
      <div className="flex flex-col text-center">
        <p className="font-medium">
          Built by{" "}
          <span className="themedText2nd">
            <a href="mailto:ru.ryanpratama@gmail.com" target="_blank">
              Ryan
            </a>
          </span>
        </p>
        <p className="font-medium">
          Special thanks to{" "}
          <span className="themedText2nd">
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>
          </span>{" "}
          &{" "}
          <span className="themedText2nd">
            <a href="https://tailwindcss.com/" target="_blank">
              Tailwind CSS
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

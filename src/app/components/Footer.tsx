import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="px-normal pb-longer7 md:pb-longer2 xl:pb-normal pt-6 flex justify-center items-center">
      <div className="flex flex-col text-center">
        <p>
          Built by{" "}
          <span>
            <a
              href="mailto:ru.ryanpratama@gmail.com"
              target="_blank"
              className="themedText2nd font-semibold"
            >
              Ryan
            </a>
          </span>
        </p>
        <p>
          Special thanks to{" "}
          <span>
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="themedText2nd font-semibold"
            >
              Next.js
            </a>
          </span>{" "}
          &{" "}
          <span>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="themedText2nd font-semibold"
            >
              Tailwind CSS
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

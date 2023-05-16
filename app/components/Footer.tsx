import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="px-normal pb-longer7 md:pb-longer2 xl:pb-normal pt-6 flex f-centered">
      <div className="f-col text-center">
        <p className="font-medium">
          Built by <span className="themedText2nd">Ryan</span>
        </p>
        <p className="font-medium">
          Special thanks to <span className="themedText2nd">Next.js</span> &{" "}
          <span className="themedText2nd">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}

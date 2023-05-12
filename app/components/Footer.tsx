export default function Footer(): JSX.Element {
  return (
    <footer className="px-normal pb-longer7 md:pb-longer2 xl:pb-normal pt-6 flex items-center justify-center">
      <div className="flex flex-col text-center">
        <p className="themedText2nd font-medium">Built by Ryan</p>
        <p className="font-medium">
          Special thanks to <span className="themedText2nd">Next.js</span> &{" "}
          <span className="themedText2nd">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}

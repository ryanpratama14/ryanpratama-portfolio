export default function Footer(): React.JSX.Element {
  return (
    <footer className="px-normal pb-20 pt-6 flex flex-col gap-2 justify-center items-center">
      <section className="flex flex-col items-center justify-center text-center">
        <p>
          Built by{" "}
          <span>
            <a href="mailto:ru.ryanpratama@gmail.com" target="_blank" rel="noreferrer" className="hover:shadow-glowed font-semibold">
              Ryan
            </a>
          </span>
        </p>
        <p>
          Special thanks to{" "}
          <span>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="hover:shadow-glowed font-semibold">
              Next.js
            </a>
          </span>{" "}
          &{" "}
          <span>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="hover:shadow-glowed font-semibold">
              Tailwind CSS
            </a>
          </span>
        </p>
      </section>
    </footer>
  );
}

import { notFound } from "next/navigation";

/** Unmatched paths under `/[lang]/*` → render `(main)/not-found.tsx` (keeps locale layout). */
export default function CatchAllPage(_props: PageProps<"/[lang]/[...slug]">) {
  notFound();
}

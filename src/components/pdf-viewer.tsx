import type { ComponentProps } from "react";

type Props = ComponentProps<"iframe"> & { src: string; title: string };

export default function PDFViewer({ src, title, ...rest }: Props) {
  return <iframe {...rest} src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${src}`} title={title} />;
}

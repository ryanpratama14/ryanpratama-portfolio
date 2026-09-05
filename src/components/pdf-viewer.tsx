import type { ComponentProps } from "react";

type Props = ComponentProps<"iframe"> & { fileUrl: string };

export default async function PdfViewer({ fileUrl, ...rest }: Props) {
  let errorMessage: string | null = null;

  try {
    const response = await fetch(fileUrl, { method: "GET" });
    if (!response.ok) {
      errorMessage = "Failed to load file.";
    } else {
      const arrayBuffer = await response.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const isPdf = uint8Array[0] === 0x25 && uint8Array[1] === 0x50 && uint8Array[2] === 0x44 && uint8Array[3] === 0x46 && uint8Array[4] === 0x2d;

      if (!isPdf) errorMessage = "File is not a valid PDF.";
    }
  } catch (error) {
    console.error("Error loading PDF:", error);
    errorMessage = "Unable to load the file.";
  }

  if (errorMessage) return <p>{errorMessage}</p>;

  return <iframe title={fileUrl} {...rest} src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(fileUrl)}`} />;
}

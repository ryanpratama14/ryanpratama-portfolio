import { PATHS, getBaseUrl } from "@/app/urls";
import type { SanityDocument } from "sanity";
import { Iframe } from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/structure";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  const path = PATHS[schemaType as keyof typeof PATHS];
  if (!path) return;

  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc: SanityDocument & { slug?: { current: string } }) => {
          return doc?.slug?.current ? `${getBaseUrl()}${path}/${doc.slug.current}` : getBaseUrl();
        },
      })
      .title("Preview"),
  ]);
};

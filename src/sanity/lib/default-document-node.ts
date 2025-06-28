import type { SanityDocument } from "sanity";
import type { DefaultDocumentNodeResolver } from "sanity/structure";
import { Iframe } from "sanity-plugin-iframe-pane";
import { getBaseUrl, PATHS } from "@/app/urls";

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

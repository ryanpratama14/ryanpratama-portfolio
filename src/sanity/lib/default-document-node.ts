import { PATHS, getBaseUrl } from "@/app/urls";
import type { SanityDocument } from "sanity";
import { Iframe } from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/structure";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc: SanityDocument & { slug?: { current: string } }) =>
          doc?.slug?.current ? `${getBaseUrl()}${PATHS[schemaType as keyof typeof PATHS]}/${doc.slug.current}` : getBaseUrl(),
      })
      .title("Preview"),
  ]);
};

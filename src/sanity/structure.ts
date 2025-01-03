import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.divider(),
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      ...S.documentTypeListItems().filter((item) => item.getId() && !["post", "category"].includes(item.getId()!)),
    ]);

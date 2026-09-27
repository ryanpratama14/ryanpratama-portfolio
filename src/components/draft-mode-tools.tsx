import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { Fragment } from "react/jsx-runtime";

import { DisableDraftMode } from "@/components/disable-draft-mode";

export default async function DraftModeTools() {
  const { isEnabled } = await draftMode();
  if (!isEnabled) return null;

  return (
    <Fragment>
      <DisableDraftMode />
      <VisualEditing />
    </Fragment>
  );
}

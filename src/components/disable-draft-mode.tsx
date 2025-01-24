"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  if (environment !== "live" && environment !== "unknown") return null;

  return (
    <a href="/api/draft-mode/disable" className="fixed right-0 top-0 bg-white text-black font-bold px-2 py-0.5 text-sm shadow-sm z-50">
      Disable Draft Mode
    </a>
  );
}

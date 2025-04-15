"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  if (environment !== "live" && environment !== "unknown") return null;

  return (
    <a href="/api/draft-mode/disable" className="fixed bottom-0 left-0 bg-white text-black font-bold px-2 py-0.5 shadow z-50">
      Disable Draft Mode
    </a>
  );
}

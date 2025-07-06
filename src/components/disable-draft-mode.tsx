"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { disableDraftMode } from "@/lib/actions";
import Button from "./html/button";

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  if (window !== window.parent || !!window.opener) {
    return null;
  }

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  return (
    <Button
      unstyled
      type="button"
      disabled={pending}
      onClick={disable}
      className="fixed bottom-0 left-0 bg-white text-black font-bold px-2 py-0.5 shadow z-50"
    >
      {pending ? "Disabling..." : "Disable Draft Mode"}
    </Button>
  );
}

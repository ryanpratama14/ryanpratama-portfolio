import { env } from "@/env";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Fragment } from "react";

export default function VercelApps() {
  if (env.NODE_ENV !== "production") return <Fragment />;

  return (
    <Fragment>
      <Analytics />
      <SpeedInsights />
    </Fragment>
  );
}

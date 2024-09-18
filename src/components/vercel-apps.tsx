import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Fragment } from "react";

export default function VercelApps() {
  return (
    <Fragment>
      <Analytics />
      <SpeedInsights />
    </Fragment>
  );
}

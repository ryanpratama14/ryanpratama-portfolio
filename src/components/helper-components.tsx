import ScreenSizeIndicator from "@/components/screen-size-indicator";
import { env } from "@/env";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";
import { Fragment } from "react";

const Components: Record<typeof env.NODE_ENV, React.JSX.Element> = {
  development: <ScreenSizeIndicator />,
  production: (
    <Fragment>
      <Analytics />
      <SpeedInsights />
    </Fragment>
  ),
  test: <Fragment />,
};

export default function HelperComponents() {
  return (
    <Fragment>
      {Components[env.NODE_ENV]}
      <NextTopLoader color="#2563eb" showSpinner={false} />
    </Fragment>
  );
}

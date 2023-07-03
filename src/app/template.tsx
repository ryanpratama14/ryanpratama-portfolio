import { Fragment } from "react";

export default function Template({
  children,
}: ReactNodeProps): React.JSX.Element {
  return <Fragment>{children}</Fragment>;
}

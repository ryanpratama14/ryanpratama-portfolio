import { Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props): React.JSX.Element {
  return <Fragment>{children}</Fragment>;
}

import { Fragment } from "react";

export default function TransitionEffect() {
  return (
    <Fragment>
      <div className="transition-element transition-element-1 bg-black" />
      <div className="transition-element transition-element-2 bg-blue" />
      <div className="transition-element transition-element-3 bg-turquoise" />
    </Fragment>
  );
}

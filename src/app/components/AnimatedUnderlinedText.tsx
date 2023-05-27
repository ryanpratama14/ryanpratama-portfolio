import React from "react";

type Props = {
  text?: string;
};

export default function AnimatedUnderlinedText({
  text,
}: Props): React.JSX.Element {
  return (
    <div className="relative w-fit">
      <h1>{text}</h1>
      <div className="animate absolute -bottom-1 h-1 themedBg2nd w-0 group-hover:w-full rounded-md themedShadowGlowed" />
    </div>
  );
}

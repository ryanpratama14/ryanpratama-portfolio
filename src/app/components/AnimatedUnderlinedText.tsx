import React from "react";

type Props = {
  text?: string;
  className?: string;
};

export default function AnimatedUnderlinedText({
  text,
  className,
}: Props): React.JSX.Element {
  return (
    <div className="relative w-fit">
      <h5 className={`${className}`}>{text}</h5>
      <div className="animate absolute -bottom-1 h-1 themedBg2nd w-0 group-hover:w-full rounded-md themedShadowGlowed" />
    </div>
  );
}

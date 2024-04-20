"use client";
import { Icon } from "@iconify/react";

type Props = {
  icon: string;
  width?: number;
  className?: string;
  rotate?: number;
};

export default function Iconify({ icon, width, className, rotate }: Props): React.JSX.Element {
  return <Icon icon={icon} width={width} rotate={rotate} className={className} />;
}

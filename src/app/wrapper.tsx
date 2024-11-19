"use client";

import { usePathname } from "next/navigation";

type Props = { children: React.ReactNode; components: React.ReactNode };

export default function Wrapper({ children, components }: Props) {
  const path = usePathname();
  if (path.includes("studio")) return <body>{children}</body>;

  return (
    <body className="px-4 pt-4 pb-16 md:p-6 lg:p-12 xl:p-16 text-white bg-black font-sans">
      {children}
      {components}
    </body>
  );
}

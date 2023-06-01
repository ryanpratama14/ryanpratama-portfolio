import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { experienceData } from "@/app/constants/constants";

export default function Experience(): React.JSX.Element {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center gap-6 lg:gap-12 min-h-screen main-padding"
    >
      <h1>Experience</h1>
      <div className="flex flex-col-reverse gap-x-16 gap-y-12">
        {experienceData?.map((e, i: number) => {
          return (
            <div
              key={i}
              className="h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <section className="flex flex-col gap-2 col-span-1 md:col-span-2 lg:col-span-1">
                <div className="flex gap-2 items-center">
                  <Image src={e?.src} alt={e?.label} className="w-24" />
                  <div className="flex flex-col gap-1">
                    <h4>{e?.label}</h4>
                    <label className="hover:themedShadowGlowed lg:text-sm">
                      {e?.as}
                    </label>
                    <small className="px-2 py-0.5 rounded-md themedBg2nd themedTextInverse">
                      {e?.since}
                    </small>
                  </div>
                </div>
              </section>
              <article className="flex flex-col gap-2 col-span-1 lg:col-span-2 sm:order-2 order-last">
                <p>{e?.companyDetails}</p>
                <ul className="flex flex-col list-disc pl-5 themedText">
                  {e?.moreDetails?.map((detail, indexDetail: number) => {
                    return <li key={indexDetail}>{detail}</li>;
                  })}
                </ul>
              </article>
              <div className="aspect-video md:aspect-auto md:h-full col-span-1 sm:order-last order-2 relative">
                <Image
                  src={e?.src2}
                  alt={e?.label}
                  className="w-full h-full absolute object-cover rounded-md shadow-[0px_0px_5px_1px_#b53d95] dark:shadow-[0px_0px_5px_1px_#57e6d9] animate"
                />
                <div className="absolute flex items-center justify-center top-0 w-full h-full opacity-0 hover:opacity-100 themedBg2ndOpacity rounded-md">
                  <div className="flex gap-2">
                    {e?.links?.map((link, linkIndex) => {
                      return (
                        <a
                          key={linkIndex}
                          href={link?.href}
                          target="_blank"
                          className="btnSmaller px-1"
                        >
                          <span>
                            <Icon icon={link?.icon} width={20} />
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

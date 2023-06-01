import React from "react";
import faotech from "../../../../public/assets/faoTech.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { experienceData } from "@/app/constants/constants";

export default function Experience(): React.JSX.Element {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center gap-12 min-h-screen main-padding"
    >
      <h1>Experience</h1>
      {experienceData?.map((e, i: number) => {
        return (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <section className="flex flex-col gap-4 col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex gap-4 items-center">
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
              <ul className="flex flex-wrap gap-3 themedText text-sm">
                {e?.skills?.map((skill, skillsIndex: number) => {
                  return (
                    <li key={skillsIndex} className="flex gap-1.5 items-center">
                      <span>
                        <Icon width={20} icon={skill?.icon} />
                      </span>
                      {skill?.label}
                    </li>
                  );
                })}
              </ul>
              <div className="flex gap-2 md:self-start self-end">
                {e?.links?.map((link, linkIndex) => {
                  return (
                    <a
                      key={linkIndex}
                      href={link?.href}
                      target="_blank"
                      className="btnSmaller px-2"
                    >
                      <span>
                        <Icon icon={link?.icon} width={20} />
                      </span>
                    </a>
                  );
                })}
              </div>
            </section>
            <article className="flex flex-col gap-4 col-span-1 lg:col-span-2 sm:order-2 order-last">
              <p>{e?.companyDetails}</p>
              <ul className="flex flex-col list-disc pl-6 themedText">
                {e?.moreDetails?.map((detail, indexDetail: number) => {
                  return <li key={indexDetail}>{detail}</li>;
                })}
              </ul>
            </article>

            <div className="h-full col-span-1 sm:order-last order-2">
              <Image
                src={e?.src2}
                alt={e?.label}
                className="w-full object-cover rounded-md aspect-square md:h-full themedShadowGlowed2 animate"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}

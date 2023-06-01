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
            className="flex justify-between flex-wrap lg:flex-nowrap gap-6"
          >
            <section className="w-full lg:w-[30%] flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <Image src={e?.src} alt={e?.label} className="w-24 md:w-32" />
                <div className="flex flex-col gap-1">
                  <h4>{e?.label}</h4>
                  <label className="hover:themedShadowGlowed">{e?.as}</label>
                  <small className="px-2 py-0.5 rounded-md themedBg2nd themedTextInverse">
                    {e?.since}
                  </small>
                </div>
              </div>
              <a
                href={e?.href}
                target="_blank"
                className="btn w-full justify-center"
              >
                <span>
                  <Icon icon="ph:globe" width={20} />
                </span>
                Visit {e?.label}
              </a>
              <ul className="flex flex-wrap gap-3">
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
            </section>
            <section className="w-full lg:w-[70%] md:flex-row flex-col-reverse flex gap-6">
              <article className="flex flex-col gap-4 w-full lg:w-[60%]">
                <p>{e?.companyDetails}</p>
                <ul className="flex flex-col list-disc pl-6">
                  {e?.moreDetails?.map((detail, indexDetail: number) => {
                    return <li key={indexDetail}>{detail}</li>;
                  })}
                </ul>
              </article>
              <div className="w-full lg:w-[40%] h-full">
                <Image
                  src={e?.src2}
                  alt={e?.label}
                  className="w-full object-cover rounded-md aspect-square md:h-full themedShadowGlowed2 animate"
                />
              </div>
            </section>
          </div>
        );
      })}
    </section>
  );
}

"use client";

import { cn } from "@/lib/functions";
import { type ProjectInput, projectInputSchema } from "@/server/api/schema";
import { api } from "@/trpc/providers";
import type { Dictionary, Lang } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import GradientText from "../GradientText";
import SuccessModal from "../SuccessModal";

type Props = { t: Dictionary; lang: Lang };

export default function ProjectDiscuss({ t, lang }: Props) {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectInput>({ resolver: zodResolver(projectInputSchema(t)), defaultValues: { lang } });

  const onSubmit: SubmitHandler<ProjectInput> = (data) => sendEmail(data);

  const { mutate: sendEmail, isPending } = api.email.sendEmail.useMutation({ onSuccess: () => setShowModal(true) });

  return (
    <Fragment>
      <SuccessModal
        t={t}
        show={showModal}
        onClose={() => {
          setShowModal(false);
          reset();
        }}
      />
      <article id="contact" className="mt-8 main-padding gap-6 flex flex-col justify-center min-h-[60vh] relative">
        <div className="max-xl:hidden absolute centered-left translate-x-80 w-80 aspect-square rounded-full bg-bluedarker/30 blur-3xl -z-10" />
        <GradientText
          text1={t.SECTIONS.dicussYourProject.split(" ")[0] ?? ""}
          text2={`${t.SECTIONS.dicussYourProject.split(" ")[1]} ${t.SECTIONS.dicussYourProject.split(" ")[2]}`}
          bigger
        />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-md:items-center gap-4 w-full">
          <section className="flex flex-col gap-0.5 w-full md:w-[50%]">
            <label htmlFor="name">{t.DISCUSS_YOUR_PROJECT.name.label}</label>
            <input
              autoComplete="name"
              id="name"
              className={cn("border-2 border-transparent", { "border-red-400": errors.name })}
              {...register("name")}
              placeholder={t.DISCUSS_YOUR_PROJECT.name.placeholder}
            />
            {errors.name ? <small className="drop-shadow text-red-400">{errors.name.message}</small> : null}
          </section>
          <section className="flex flex-col gap-0.5 w-full md:w-[50%]">
            <label htmlFor="email">{t.DISCUSS_YOUR_PROJECT.email.label}</label>
            <input
              autoComplete="off"
              id="email"
              {...register("email")}
              placeholder={t.DISCUSS_YOUR_PROJECT.email.placeholder}
              className={cn("border-2 border-transparent", { "border-red-400": errors.email })}
            />
            {errors.email ? <small className="drop-shadow text-red-400">{errors.email.message}</small> : null}
          </section>
          <section className="flex flex-col gap-0.5 w-full md:w-[50%]">
            <label htmlFor="description">{t.DISCUSS_YOUR_PROJECT.projectDescription.label}</label>
            <textarea
              id="description"
              className={cn("border-2 border-transparent", { "border-red-400": errors.description })}
              {...register("description")}
              rows={5}
              placeholder={t.DISCUSS_YOUR_PROJECT.projectDescription.placeholder}
            />
            {errors.description ? <small className="drop-shadow text-red-400">{errors.description.message}</small> : null}
          </section>
          <section className="relative w-32 h-9 group mt-4">
            <button
              disabled={isPending}
              type="submit"
              className={cn(
                "animate group-hover:translate-x-1 group-hover:-translate-y-1 border-[2px] border-white w-full h-full absolute flex justify-center items-center",
                { "opacity-0": isPending },
              )}
            >
              {t.DISCUSS_YOUR_PROJECT.submit}
            </button>
            <div
              className={cn("group-hover:opacity-100 absolute top-0 -z-10 w-full h-full gradient-web bg-animate", {
                "opacity-0": !isPending,
              })}
            />
          </section>
        </form>
      </article>
    </Fragment>
  );
}

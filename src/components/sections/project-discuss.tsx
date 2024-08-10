"use client";

import GradientText from "@/components/gradient-text";
import Input from "@/components/input";
import SuccessModal from "@/components/success-modal";
import TextArea from "@/components/text-area";
import { cn } from "@/lib/functions";
import { type ProjectInput, schema } from "@/server/api/schema";
import { api } from "@/trpc/providers";
import type { DictionaryStatic, Lang } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

type Props = { t: DictionaryStatic; lang: Lang };

export default function ProjectDiscuss({ t, lang }: Props) {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectInput>({ resolver: zodResolver(schema.email.projectDiscuss(t)), defaultValues: { lang } });

  const onSubmit: SubmitHandler<ProjectInput> = (data) => sendEmail(data);

  const { mutate: sendEmail, isPending } = api.email.projectDiscuss.useMutation({ onSuccess: () => setShowModal(true) });

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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-md:items-end gap-4 md:w-[50%] w-full">
          <Input
            {...register("name")}
            error={errors.name?.message}
            autoComplete="name"
            label={t.DISCUSS_YOUR_PROJECT.name.label}
            placeholder={t.DISCUSS_YOUR_PROJECT.name.placeholder}
          />
          <Input
            {...register("email")}
            error={errors.email?.message}
            autoComplete="email"
            label={t.DISCUSS_YOUR_PROJECT.email.label}
            placeholder={t.DISCUSS_YOUR_PROJECT.email.placeholder}
          />
          <TextArea
            {...register("description")}
            placeholder={t.DISCUSS_YOUR_PROJECT.projectDescription.placeholder}
            label={t.DISCUSS_YOUR_PROJECT.projectDescription.label}
            error={errors.description?.message}
          />
          <button type="submit" disabled={isPending} className="relative group flex w-fit">
            <span
              className={cn("animate group-hover:translate-x-1 group-hover:-translate-y-1 border-[2px] border-white px-8 py-1 size-full", {
                "opacity-0": isPending,
              })}
            >
              {t.DISCUSS_YOUR_PROJECT.submit}
            </span>
            <div
              className={cn("group-hover:opacity-100 absolute top-0 -z-10 w-full h-full gradient-web bg-animate", {
                "opacity-0": !isPending,
              })}
            />
          </button>
        </form>
      </article>
    </Fragment>
  );
}

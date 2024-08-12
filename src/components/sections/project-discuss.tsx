"use client";

import SuccessModal from "@/components/success-modal";
import { type ProjectInput, schema } from "@/server/api/schema";
import { api } from "@/trpc/providers";
import type { DictionaryStatic, Lang } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { PulseLoader } from "react-spinners";
import Input from "../input";
import MenuTitle from "../menu-title";
import TextArea from "../text-area";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProjectDiscuss({ s, lang }: Props) {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectInput>({ resolver: zodResolver(schema.email.projectDiscuss(s)), defaultValues: { lang } });

  const onSubmit: SubmitHandler<ProjectInput> = (data) => sendEmail(data);

  const { mutate: sendEmail, isPending } = api.email.projectDiscuss.useMutation({ onSuccess: () => setShowModal(true) });

  return (
    <Fragment>
      <SuccessModal
        s={s}
        show={showModal}
        onClose={() => {
          setShowModal(false);
          reset();
        }}
      />
      <article className="main-padding">
        <MenuTitle title={s.MENUS.discussProject} />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 items-start">
          <Input {...register("name")} error={errors.name?.message} autoComplete="name" placeholder={s.DISCUSS_YOUR_PROJECT.name.placeholder} />
          <Input {...register("email")} error={errors.email?.message} autoComplete="email" placeholder={s.DISCUSS_YOUR_PROJECT.email.placeholder} />
          <TextArea
            {...register("description")}
            placeholder={s.DISCUSS_YOUR_PROJECT.projectDescription.placeholder}
            error={errors.description?.message}
          />
          <button disabled={isPending} type="submit" className="box-button">
            {isPending ? <PulseLoader size={5} color="white" /> : s.DISCUSS_YOUR_PROJECT.submit}
          </button>
        </form>
      </article>
    </Fragment>
  );
}

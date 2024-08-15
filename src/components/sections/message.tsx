"use client";

import Container from "@/components/container";
import Input from "@/components/html/input";
import TextArea from "@/components/html/text-area";
import SuccessModal from "@/components/success-modal";
import { cn } from "@/lib/functions";
import { type MessageInput, schema } from "@/server/api/schema";
import { VARIANTS } from "@/styles";
import { api } from "@/trpc/providers";
import type { DictionaryStatic, Lang } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { PulseLoader } from "react-spinners";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProjectDiscuss({ s, lang }: Props) {
  const [showModal, setShowModal] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MessageInput>({ resolver: zodResolver(schema.email.message(s)), defaultValues: { lang } });

  const onSubmit: SubmitHandler<MessageInput> = (data) => sendEmail(data);

  const { mutate: sendEmail, isPending } = api.email.message.useMutation({ onSuccess: () => setShowModal(true) });

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

      <Container title={s.MENUS.message}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 items-start">
          <Input {...register("name")} error={errors.name?.message} autoComplete="name" placeholder={s.DISCUSS_YOUR_PROJECT.name.placeholder} />
          <Input {...register("email")} error={errors.email?.message} autoComplete="email" placeholder={s.DISCUSS_YOUR_PROJECT.email.placeholder} />
          <TextArea {...register("message")} placeholder={s.DISCUSS_YOUR_PROJECT.message.placeholder} error={errors.message?.message} />
          <button disabled={isPending} type="submit" className={cn(VARIANTS.Button({ className: "max-md:w-full" }))}>
            {isPending ? <PulseLoader size={5} color="white" /> : s.DISCUSS_YOUR_PROJECT.submit}
          </button>
        </form>
      </Container>
    </Fragment>
  );
}

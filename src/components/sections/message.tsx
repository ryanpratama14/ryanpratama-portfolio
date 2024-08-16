"use client";

import Container from "@/components/container";
import Input from "@/components/html/input";
import Text from "@/components/html/text";
import TextArea from "@/components/html/text-area";
import { Modal } from "@/components/modal";
import { cn } from "@/lib/functions";
import { type MessageInput, schema } from "@/server/api/schema";
import { VARIANTS } from "@/styles";
import { api } from "@/trpc/providers";
import type { DictionaryStatic, Lang } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { PulseLoader } from "react-spinners";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProjectDiscuss({ s, lang }: Props) {
  const [show, setShow] = useState(false);
  const { MESSAGE: t } = s;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MessageInput>({ resolver: zodResolver(schema.email.message(s)), defaultValues: { lang } });

  const { mutate: sendMessage, isPending } = api.email.message.useMutation({ onSuccess: () => setShow(true) });

  const onClose = () => {
    setShow(false);
    reset();
  };

  return (
    <Fragment>
      <Container title={s.MENUS.message}>
        <form onSubmit={handleSubmit((data) => sendMessage(data))} className="flex flex-col gap-2">
          <Input {...register("name")} error={errors.name?.message} autoComplete="name" placeholder={t.name.placeholder} />
          <Input {...register("email")} error={errors.email?.message} autoComplete="email" placeholder={t.email.placeholder} />
          <TextArea {...register("message")} placeholder={t.message.placeholder} error={errors.message?.message} />
          <button disabled={isPending} type="submit" className={cn(VARIANTS.Button({ className: "max-md:w-full mt-1" }))}>
            {isPending ? <PulseLoader size={5} color="white" /> : t.submit}
            <span className="sr-only">{t.submit}</span>
          </button>
        </form>
      </Container>

      <Modal show={show} onClose={onClose}>
        <Modal.Body className="text-left flex flex-col gap-1">
          <Text as="menuTitle" className="font-medium">
            <p>{s.MESSAGE.formSent}</p>
          </Text>

          <Text color="gray" className="text-pretty">
            <p>{s.MESSAGE.thankYou}</p>
          </Text>
          <button type="button" className={cn(VARIANTS.Button({ className: "w-full mt-2" }))} onClick={onClose}>
            {s.MESSAGE.gotIt}
          </button>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

"use client";

import Container from "@/components/container";
import Dialog from "@/components/dialog";
import Button from "@/components/html/button";
import Input from "@/components/html/input";
import Text from "@/components/html/text";
import TextArea from "@/components/html/text-area";
import { type MessageInput, schema } from "@/server/api/schema";
import { api } from "@/trpc/providers";
import type { DictionaryStatic, Lang } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProjectDiscuss({ s, lang }: Props) {
  const [show, setShow] = useState(true);
  const { MESSAGE: t } = s;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MessageInput>({ resolver: zodResolver(schema.email.message(s)), defaultValues: { lang } });

  const { mutate: sendMessage, isPending: disabled } = api.email.message.useMutation({ onSuccess: () => setShow(true) });

  return (
    <Fragment>
      <Container title={s.MENUS.message}>
        <form onSubmit={handleSubmit((data) => sendMessage(data))} className="flex flex-col gap-2">
          <Input {...register("name")} error={errors.name?.message} autoComplete="name" placeholder={t.name.placeholder} />
          <Input {...register("email")} error={errors.email?.message} autoComplete="email" placeholder={t.email.placeholder} />
          <TextArea {...register("message")} placeholder={t.message.placeholder} error={errors.message?.message} />
          <Button disabled={disabled} type="submit" className="max-md:w-full mt-1">
            {t.send}
          </Button>
        </form>
      </Container>

      <Dialog
        show={show}
        onClose={() => {
          setShow(false);
          reset();
        }}
        className="space-y-1 text-left"
      >
        <Text as="menuTitle" className="font-medium">
          <p>{s.MESSAGE.sent}</p>
        </Text>
        <Text color="gray" className="text-pretty">
          <p>{s.MESSAGE.thankYou}</p>
        </Text>
      </Dialog>
    </Fragment>
  );
}

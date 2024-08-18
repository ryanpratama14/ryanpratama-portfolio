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
  const [open, setOpen] = useState(false);
  const { MESSAGE: t } = s;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MessageInput>({ resolver: zodResolver(schema.email.message(s)), defaultValues: { lang } });

  const { mutate: sendMessage, isPending } = api.email.message.useMutation({ onSuccess: () => setOpen(true) });

  return (
    <Fragment>
      <Container title={s.MENUS.message}>
        <form onSubmit={handleSubmit((data) => sendMessage(data))} className="flex flex-col gap-2">
          <Input disabled={isPending} {...register("name")} error={errors.name?.message} autoComplete="name" placeholder={t.name.placeholder} />
          <Input disabled={isPending} {...register("email")} error={errors.email?.message} autoComplete="email" placeholder={t.email.placeholder} />
          <TextArea disabled={isPending} {...register("message")} placeholder={t.message.placeholder} error={errors.message?.message} />
          <Button disabled={isPending} type="submit" className="max-md:w-full mt-1">
            {t.send}
          </Button>
        </form>
      </Container>

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
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

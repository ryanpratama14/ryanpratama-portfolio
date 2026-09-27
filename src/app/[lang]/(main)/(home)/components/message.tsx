"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useMutation } from "@tanstack/react-query";
import { parseAsBoolean, useQueryState } from "nuqs";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

import Container from "@/components/container";
import Dialog from "@/components/dialog";
import Button from "@/components/html/button";
import Input from "@/components/html/input";
import TextArea from "@/components/html/text-area";
import { api } from "@/server/orpc";
import type { EmailMessageInput } from "@/server/router/email";
import { schema } from "@/server/schema";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProjectDiscuss({ s, lang }: Props) {
  const [open, setOpen] = useQueryState("success", parseAsBoolean.withDefault(false));
  const { MESSAGE: t } = s;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailMessageInput>({
    resolver: valibotResolver(schema.email.message(s)),
    defaultValues: { lang, name: "", email: "", message: "" },
    mode: "all",
  });

  const { mutate: sendMessage, isPending } = useMutation(
    api.email.message.mutationOptions({
      onSuccess: () => {
        reset();
        setOpen(true);
      },
    }),
  );

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        className="space-y-1"
      >
        <h2 className="font-semibold">{s.MESSAGE.sent}</h2>
        <p className="text-muted-foreground">{s.MESSAGE.thankYou}</p>
      </Dialog>

      <Container title={s.MENUS.message}>
        <form onSubmit={handleSubmit((data) => sendMessage(data))} className="space-y-2">
          <Input disabled={isPending} {...register("name")} error={errors.name?.message} autoComplete="name" placeholder={t.name.placeholder} />
          <Input disabled={isPending} {...register("email")} error={errors.email?.message} autoComplete="email" placeholder={t.email.placeholder} />
          <TextArea disabled={isPending} {...register("message")} placeholder={t.message.placeholder} error={errors.message?.message} />
          <Button isPending={isPending} type="submit" className="max-md:w-full mt-0.5 relative group">
            {t.send}
          </Button>
        </form>
      </Container>
    </Fragment>
  );
}

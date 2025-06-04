"use client";

import Container from "@/components/container";
import Dialog from "@/components/dialog";
import Button from "@/components/html/button";
import Input from "@/components/html/input";
import TextArea from "@/components/html/text-area";
import type { EmailMessageInput } from "@/server/routers/email";
import { schema } from "@/server/schema";
import { api } from "@/trpc/react";
import type { DictionaryStatic, Lang } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { DynamicIcon } from "lucide-react/dynamic";
import { parseAsBoolean, useQueryState } from "nuqs";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProjectDiscuss({ s, lang }: Props) {
  const [open, setOpen] = useQueryState("success", parseAsBoolean.withDefault(false));
  const { MESSAGE: t } = s;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailMessageInput>({ resolver: zodResolver(schema.email.message(s)), defaultValues: { lang }, mode: "all" });

  const { mutate: sendMessage, isPending } = api.email.message.useMutation({
    onSuccess: () => {
      setOpen(true);
    },
  });

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          reset();
        }}
        className="space-y-1"
      >
        <h2 className="font-semibold">{s.MESSAGE.sent}</h2>
        <p className="text-gray">{s.MESSAGE.thankYou}</p>
      </Dialog>

      <Container title={s.MENUS.message}>
        <form onSubmit={handleSubmit((data) => sendMessage(data))} className="space-y-2">
          <Input disabled={isPending} {...register("name")} error={errors.name?.message} autoComplete="name" placeholder={t.name.placeholder} />
          <Input disabled={isPending} {...register("email")} error={errors.email?.message} autoComplete="email" placeholder={t.email.placeholder} />
          <TextArea disabled={isPending} {...register("message")} placeholder={t.message.placeholder} error={errors.message?.message} />
          <Button disabled={isPending} type="submit" className="max-md:w-full mt-0.5 relative group">
            <div className="absolute size-full flex items-center justify-center opacity-0 animate group-hover:opacity-100 group-hover:-translate-x-0 -translate-x-4">
              <DynamicIcon name="send-horizontal" size={20} />
            </div>

            <div className="absolute size-full flex items-center justify-center group-hover:opacity-0 group-hover:translate-x-4 animate">
              {t.send}
            </div>

            <span className="opacity-0">{t.send}</span>
          </Button>
        </form>
      </Container>
    </Fragment>
  );
}

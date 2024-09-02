"use client";

import Container from "@/components/container";
import Dialog from "@/components/dialog";
import Button from "@/components/html/button";
import Input from "@/components/html/input";
import Text from "@/components/html/text";
import TextArea from "@/components/html/text-area";
import { ICONS } from "@/lib/constants";
import type { EmailMessageInput } from "@/server/api/routers/email";
import { schema } from "@/server/api/schema";
import { api } from "@/trpc/react";
import type { DictionaryStatic, Lang } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify-icon/react";
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
  } = useForm<EmailMessageInput>({ resolver: zodResolver(schema.email.message(s)), defaultValues: { lang }, mode: "all" });

  const { mutate: sendMessage, isPending } = api.email.message.useMutation({ onSuccess: () => setOpen(true) });

  return (
    <Fragment>
      <Container title={s.MENUS.message}>
        <form onSubmit={handleSubmit((data) => sendMessage(data))} className="flex flex-col gap-2">
          <Input disabled={isPending} {...register("name")} error={errors.name?.message} autoComplete="name" placeholder={t.name.placeholder} />
          <Input disabled={isPending} {...register("email")} error={errors.email?.message} autoComplete="email" placeholder={t.email.placeholder} />
          <TextArea disabled={isPending} {...register("message")} placeholder={t.message.placeholder} error={errors.message?.message} />
          <Button disabled={isPending} type="submit" className="max-md:w-full mt-0.5 relative group">
            <div className="absolute size-full flex items-center justify-center opacity-0 animate group-hover:opacity-100 group-hover:-translate-x-0 -translate-x-4">
              <Icon icon={ICONS.send} width={20} />
            </div>

            <div className="absolute size-full flex items-center justify-center group-hover:opacity-0 group-hover:translate-x-4 animate">
              {t.send}
            </div>

            <span className="opacity-0">{t.send}</span>
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

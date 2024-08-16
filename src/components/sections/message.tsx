"use client";

import Container from "@/components/container";
import Input from "@/components/html/input";
import Text from "@/components/html/text";
import TextArea from "@/components/html/text-area";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
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
  const [open, onOpenChange] = useState(false);
  const { MESSAGE: t } = s;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MessageInput>({ resolver: zodResolver(schema.email.message(s)), defaultValues: { lang } });

  const { mutate: sendMessage, isPending } = api.email.message.useMutation({ onSuccess: () => onOpenChange(true) });

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

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="flex flex-col gap-2">
          <Text as="menuTitle" className="font-medium">
            <p>{s.MESSAGE.formSent}</p>
          </Text>
          <Text color="gray">
            <p>{s.MESSAGE.thankYou}</p>
          </Text>
          <DialogClose className="outline-none focus:outline-none mt-3 w-fit mx-auto">
            <button onClick={() => reset()} type="button" className={cn(VARIANTS.Button())}>
              {s.MESSAGE.gotIt}
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

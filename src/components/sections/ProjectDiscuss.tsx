"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import GradientText from "../GradientText";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectInput, projectInputSchema } from "@/schema";
import { useMutation } from "@tanstack/react-query";
import { Fragment, useState } from "react";
import SuccessModal from "../SuccessModal";

export default function ProjectDiscuss(): React.JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectInput>({ resolver: zodResolver(projectInputSchema) });

  const onSubmit: SubmitHandler<ProjectInput> = (data) => sendEmail(data);

  const { mutate: sendEmail, isPending } = useMutation({
    mutationFn: async (data: ProjectInput) => {
      await fetch("/api/send", { method: "POST", body: JSON.stringify(data) });
    },
    onSuccess: () => setShowModal(true),
  });

  return (
    <Fragment>
      <SuccessModal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          reset();
        }}
      />
      <article id="contact" className="mt-8 main-padding gap-6 md:gap-12 flex flex-col justify-center min-h-[60vh] relative">
        <div
          className={`max-xl:hidden absolute centered-left translate-x-80 w-80 aspect-square rounded-full bg-bluedarker/30 blur-3xl -z-10`}
        />
        <GradientText text1="Discuss" text2="Your Project" bigger />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-md:items-center gap-4 w-full">
          <section className="flex flex-col gap-2 w-full md:w-[50%]">
            <label htmlFor="name">Name</label>
            <input
              className={`border-2 ${errors.name ? "border-red-400" : "border-transparent"}`}
              {...register("name")}
              placeholder="John Doe"
            />
            {errors.name ? <small className="drop-shadow text-red-400">{errors.name.message}</small> : null}
          </section>
          <section className="flex flex-col gap-2 w-full md:w-[50%]">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              placeholder="johndoe@gmail.com"
              className={`border-2 ${errors.email ? "border-red-400" : "border-transparent"}`}
            />
            {errors.email ? <small className="drop-shadow text-red-400">{errors.email.message}</small> : null}
          </section>
          <section className="flex flex-col gap-2 w-full md:w-[50%]">
            <label htmlFor="description">Project Description</label>
            <textarea
              className={`border-2 ${errors.description ? "border-red-400" : "border-transparent"}`}
              {...register("description")}
              rows={5}
              placeholder="Hi, I want to talk about my proje..."
            />
            {errors.description ? <small className="drop-shadow text-red-400">{errors.description.message}</small> : null}
          </section>
          <section className="relative w-32 h-9 group mt-4">
            <button
              disabled={isPending}
              type="submit"
              className={`${
                isPending ? "opacity-0" : ""
              } animate group-hover:translate-x-1 group-hover:-translate-y-1 border-[2px] border-white w-full h-full absolute flex justify-center items-center`}
            >
              Submit
            </button>
            <div
              className={`animate ${
                isPending ? "" : "opacity-0"
              } group-hover:opacity-100 absolute top-0 -z-10 w-full h-full gradient-web bg-animate`}
            />
          </section>
        </form>
      </article>
    </Fragment>
  );
}

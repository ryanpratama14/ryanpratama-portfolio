import { getMetadata } from "@/app/metadata";
import Container from "@/components/container";
import Img from "@/components/html/img";
import { CERTIFICATIONS } from "@/lib/constants";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";

type Props = { params: Promise<{ lang: Lang; name: string }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata | undefined> => {
  const { name } = await params;
  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (!data) return;
  return await getMetadata({ title: data.label });
};

export default async function CertificationPage({ params }: Props) {
  const { name } = await params;

  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (!data) notFound();

  return (
    <Fragment>
      <Container title={data.label}>
        <Img alt={data.alt} src={data.src} />
      </Container>
    </Fragment>
  );
}

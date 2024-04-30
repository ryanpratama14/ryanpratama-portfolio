import type { ProjectInput } from "@/server/api/schema";
import { Body, Container, Head, Html, Tailwind, Text } from "@react-email/components";

export default function EmailTemplate({ name, email, description, lang }: ProjectInput) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white flex items-center justify-center py-12 font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded w-[36rem] px-6">
            <Text className="text-xl">Name: {name}</Text>
            <Text className="text-xl">Email: {email}</Text>
            <Text className="text-xl whitespace-pre-line">Description: {description}</Text>
            <Text className="text-xl">Lang: {lang}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

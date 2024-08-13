import type { MessageInput } from "@/server/api/schema";
import { Body, Container, Head, Html, Tailwind, Text } from "@react-email/components";

export default function Message({ name, email, message, lang }: MessageInput) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white flex items-center justify-center py-12 font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded w-[36rem] px-6 *:text-xl">
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text className="whitespace-pre-line">Message: {message}</Text>
            <Text>Lang: {lang}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

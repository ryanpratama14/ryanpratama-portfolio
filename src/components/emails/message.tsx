import type { MessageInput } from "@/server/api/schema";
import { Body, Container, Head, Html, Tailwind, Text } from "@react-email/components";

export default function Message({ name, email, message, lang }: MessageInput) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="font-sans">
          <Container>
            <Text>
              Name: {name}
              <br />
              Email: {email}
              <br />
              <span className="whitespace-pre-line">Message: {message}</span>
              <br />
              Lang: {lang}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

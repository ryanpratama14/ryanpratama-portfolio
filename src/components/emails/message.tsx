import type { EmailMessageInput } from "@/server/api/routers";
import { Body, Container, Head, Html, Tailwind, Text } from "@react-email/components";

export default function Message({ name, email, message, lang }: EmailMessageInput) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="font-sans">
          <Container>
            <Text>
              Name: {name}
              <br />
              Email: {email.toLowerCase()}
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

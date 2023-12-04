import { type ProjectInput } from "@/schema";
import { Body, Container, Head, Html, Tailwind, Text } from "@react-email/components";

export default function EmailTemplate({ email, description, name }: ProjectInput) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Text className="text-xl">
              {email}, {name}, {description}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

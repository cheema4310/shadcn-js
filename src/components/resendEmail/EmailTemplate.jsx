import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';

export default function EmailTemplate({ message }) {
  console.log(message);

  return (
    <Html>
      <Head />
      <Preview>Subscription Confirmation</Preview>
      <Body className="bg-white">
        <Container className="mx-auto p-4">
          <Heading className="text-2xl font-bold">
            Cheema Newsletter Weekly Update
          </Heading>
          <Text className="text-lg">Thank you for subscribing!</Text>
          <Text className="text-lg">{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}

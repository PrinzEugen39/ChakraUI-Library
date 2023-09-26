import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyle = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    my: "1",
    textAlign: "center",
    filter: "blur(2px)",
    ":hover": {
      bg: "blue.400",
      color: "red",
    },
  };

  return (
    <Container as="section" maxWidth="2xl" py="2">
      <Heading my="1.8rem" p="10px">
        Chakra UI Components
      </Heading>
      <Text ml="1.8rem">Dashboard</Text>
      <Text ml="1.8rem" color="blue.400" fontWeight="bold">
        Dashboard
      </Text>
      <Box mt="1rem" bgColor="facebook.200">
        <Text color="whatsapp.500">This is a box</Text>
      </Box>
      <Box sx={boxStyle}>
        Hello
      </Box>
    </Container>
  );
}

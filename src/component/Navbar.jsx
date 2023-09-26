import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Flex as="nav" p="10px">
      <Heading as="h1">PrinzEugen</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>habibsan01@gmail.com</Text>
        <Button colorScheme="messenger">Logout</Button>
      </HStack>
    </Flex>
    // <Flex bg="gray.200" justify="space-evenly" wrap="wrap" gap="2">
    //     <Box w="150px" h="50px" bg="red">1</Box>
    //     <Box w="150px" h="50px" bg="blue">2</Box>
    //     <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
    //     <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
    // </Flex>
  );
}

export default Navbar;

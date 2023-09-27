import { UnlockIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import React from "react";

function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 3000,
      isClosable: true,
      position: "top",
      status: "success",
      icon: <UnlockIcon />
    })
  }

  return (
    <Flex as="nav" p="10px" mb="2rem">
      <Heading as="h1">PrinzEugen</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar name="Prinz" bg="gray.500" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>habibsan01@gmail.com</Text>
        <Button colorScheme="messenger" onClick={showToast}>Logout</Button>
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

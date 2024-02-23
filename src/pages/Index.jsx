import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaUserPlus, FaSignInAlt, FaSkullCrossbones } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = useToast();

  const handleLogin = (email, password) => {
    // Here you would make an API call to the login endpoint
    // For now, we'll just simulate login
    setIsLoggedIn(true);
    toast({
      title: "Logged in",
      description: "You have successfully logged in.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
      description: "You have successfully logged out.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md">
      <Stack spacing={4}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Welcome to the Mafia World</Heading>
          <Text mt={4}>Become the most respected mafioso in the underworld.</Text>
        </Box>

        <Flex justify="space-between">
          {!isLoggedIn ? (
            <VStack>
              <Button leftIcon={<FaUserPlus />} colorScheme="teal" variant="solid">
                Sign Up
              </Button>
              <Button leftIcon={<FaSignInAlt />} colorScheme="teal" variant="outline" onClick={() => handleLogin("test@example.com", "password")}>
                Log In
              </Button>
            </VStack>
          ) : (
            <VStack>
              <Button leftIcon={<FaSkullCrossbones />} colorScheme="red" variant="solid">
                Commit a Crime
              </Button>
              <Button colorScheme="teal" variant="outline" onClick={handleLogout}>
                Log Out
              </Button>
            </VStack>
          )}
        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;

import { Box, Button, ChakraProvider, CloseButton, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import React from 'react';

export default function SettingsPage() {
  return (
    <ChakraProvider>
        <CloseButton />
      <VStack spacing={4} align="start">
      <FormControl id="profileImage">
        <FormLabel>Profile Image</FormLabel>
        <Input type="file" name="profileImage" />
      </FormControl>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input type="text" name="name" />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" />
      </FormControl>
      <FormControl id="location">
        <FormLabel>Location</FormLabel>
        <Input type="text" name="location" />
      </FormControl>
      <Button colorScheme="teal" variant="outline">
        Save Changes
      </Button>
    </VStack>
    </ChakraProvider>
  );
}
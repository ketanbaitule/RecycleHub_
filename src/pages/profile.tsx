import * as React from 'react'

// 1. import `ChakraProvider` component
import { Button, ChakraProvider, Heading, Link, Stat, StatHelpText, StatLabel, StatNumber, VStack, Wrap, WrapItem, chakra } from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";


// function App() {
//   // 2. Wrap ChakraProvider at the root of your app
//   return (
//     <ChakraProvider>
//       <CloseButton />
      
//       <Center bg='white' h='100px' color='black'>
//    <strong><b>Profile</b></strong>
//        </Center>
//        <Center><Wrap>
//   <WrapItem>
//     <Avatar size='2xl' name='Segun Adebayo' src='https://avatars.githubusercontent.com/u/111949604?s=400&u=ef8ee0878e3826a987685b862523e814b95280e3&v=4' />{' '}
//   </WrapItem>
// </Wrap>
// </Center>
// <Box mb="10"></Box>

// <Center><b><h1>Name_Here</h1></b></Center>
//     </ChakraProvider>
//   )
// }
// export default App;



// import { Box, Button, Center, Avatar, Text, VStack, Heading } from '@chakra-ui/react';
// import React, { useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = React.useState({
    name: 'Name_Here',
    email: 'john.doe@example.com',
    profileImage: '/path/to/profile/image.jpg',
    location: 'Location',
    Points: 'Points',
  });

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  return (

    <ChakraProvider>
      <CloseButton />
      
      <Box bg='white' w='100%'h = '100'p={4} color='white'>
</Box>
    <VStack spacing={4} align="center">
        <Wrap>
          <WrapItem>
            <Avatar size='2xl' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' borderRadius='1000' />
          </WrapItem>
        </Wrap>
        <b><Heading>{user.name}</Heading></b>
        <Link href="/setting">
                <button>Settings</button>
            </Link>
        <Text>{user.location}</Text>
        <Stat>
  <StatLabel>Points Earned</StatLabel>
  <Center><StatNumber>69</StatNumber></Center>
  <StatHelpText>Feb 12 - Feb 28</StatHelpText>
</Stat>
        <Button colorScheme="teal" variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </VStack>
    
  </ChakraProvider>
  );
}
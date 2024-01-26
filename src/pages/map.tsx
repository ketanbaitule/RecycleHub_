import * as React from 'react'

// 1. import `ChakraProvider` component
import { Box, Button, Text,Card, CardBody, CardFooter, Center, ChakraProvider, Divider, Heading, Stack, chakra, Avatar, Wrap, WrapItem, Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
       
        <Center height='15px'>
            
  <Divider orientation='vertical' />
</Center>
<Center><Heading>Nearby Collection Centers</Heading></Center> 
<Flex justifyContent={'end'}> <Wrap>
  <WrapItem>
    <Avatar size='2xl' name='Segun Adebayo' src='' />{' '}
  </WrapItem>
</Wrap></Flex>
        <Center height='25px'>
  <Divider orientation='vertical' />
</Center>
        <Center><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d119070.68957932446!2d79.07311403153112!3d21.154027913532683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soil%20recycling%20waste%20collection!5e0!3m2!1sen!2sin!4v1706220275742!5m2!1sen!2sin" width="60000" height="500" loading="lazy" ></iframe>
    </Center>

    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqR8ancFyw6eYNH7O4905trwrIweoBE9WGA&usqp=CAU'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Bidya Waste Management</Heading>

      <Text py='2'>
      Oil Refinaery
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Directions
      </Button>
    </CardFooter>
  </Stack>
</Card>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5SOlVWwee-MsC_uKGepaVA0dLpi0wV-ZXg&usqp=CAU'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Waste Recycle powerplant Pardi</Heading>

      <Text py='2'>
      Oil Refinaery
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Directions
      </Button>
    </CardFooter>
  </Stack>
</Card>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivmPTBm-oCtrCGNd--s2nAbnGRcxErIsVWg&usqp=CAU.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Waste Oil recycling Plant</Heading>

      <Text py='2'>
      Oil Refinaery
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Directions
      </Button>
    </CardFooter>
  </Stack>
</Card>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivmPTBm-oCtrCGNd--s2nAbnGRcxErIsVWg&usqp=CAU.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Oil Recycling</Heading>

      <Text py='2'>
      Oil Refinaery
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Directions
      </Button>
    </CardFooter>
  </Stack>
</Card>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4761wxn5KQqOU34gwYmEqXKLsBRSJIJbEGQ&usqp=CAU.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Nova Lubes Pvt.Ltd</Heading>

      <Text py='2'>
        Oil Refinaery
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Direction
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </ChakraProvider>
  )

}
export default App
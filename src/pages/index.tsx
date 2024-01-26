import { Heading, Highlight, Image, Box } from '@chakra-ui/react';
import Cycle from '@/images/cycle.png';

export default function Home() {
  return (
    <>
    <Heading size="4xl">
      <Highlight
                query={['RecycleHub']}
                styles={{ px: '3', py: '0',  bg: 'teal.200' }}
            >
                Welcome to RecycleHub.
      </Highlight>
    </Heading>
    <br />
    <Heading size="lg">
    We aim to provide a clear and established pathway for the collection and re-processing of unconventional wastes.
    </Heading>
    <br />
    <hr />
    <br />
    <Heading size="lg" color="teal.500">
      Our waste management cycle
    </Heading>
    <Box>
      <Image 
        boxSize="200px md: 500px"
        objectFit='cover'
        src={Cycle.src} 
      />
    </Box>
    


    </>
  );
}

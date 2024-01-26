import { Box, Button, ButtonGroup, Flex, Heading, Link, Spacer, useDisclosure, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import Modal from "@/components/Modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Logo from '@/images/logo.png';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    RadioGroup,
    Stack,
    Radio,
    
  } from '@chakra-ui/react'
  import { useState } from 'react'

function Navbar(){
    const login = useDisclosure();
    const register = useDisclosure();
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('left')

    return(
        
        <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
        </Stack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={onOpen}>
        <b>Menue</b>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'><b>MENUE</b></DrawerHeader>
          <DrawerBody>
            <Link href="/discover">
            <Flex>Discover</Flex>
            </Link>
            <Link href="/map">
           <Flex>Map</Flex> 
            </Link>
            <Link href="/profile">
           <Flex>Profile</Flex> 
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        <Flex flexDirection={{base: "column", md: "row"}} minWidth="max-content" alignItems="center" gap="2" padding={[2, 3]} className="border-b border-slate-200">
            <Box p="2">
                <NextLink href="/">
                    {/* <Heading size="md">RecycleHub</Heading> */}
                    
                        <Image 
                            maxHeight={"50px"}
                            objectFit='cover'
                            src={Logo.src} 
                        />
                    
                </NextLink>
            </Box>
            <Spacer display={{base: "none", md: "block"}} />
        
            <ButtonGroup gap="2">
                <Button colorScheme="teal" onClick={register.onOpen}>Sign Up</Button>
                <Button colorScheme="teal" onClick={login.onOpen}>Log in</Button>
            </ButtonGroup>
            </Flex>
            <Modal heading={"Login"} isOpen={login.isOpen} onClose={login.onClose} >
                <LoginForm />
            </Modal>
            <Modal heading={"Sign Up"} isOpen={register.isOpen} onClose={register.onClose}>
                <SignUpForm />
            </Modal>
        </>
        
        
    )
}

export default Navbar;
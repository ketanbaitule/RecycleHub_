import { Box, Button, ButtonGroup, Flex, Heading, Link, Spacer, useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";
import Modal from "@/components/Modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Navbar(){
    const login = useDisclosure();
    const register = useDisclosure();

    return(
        <>
        <Flex flexDirection={{base: "column", md: "row"}} minWidth="max-content" alignItems="center" gap="2" padding={[2, 3]} className="border-b border-slate-200">
            <Box p="2">
                <NextLink href="/">
                    <Heading size="md">RecycleHub</Heading>
                </NextLink>
            </Box>
            <Spacer display={{base: "none", md: "block"}} />
            <ButtonGroup gap="2">
                <Button colorScheme="teal" onClick={register.onOpen}>Sign Up</Button>
                <Button colorScheme="teal" onClick={login.onOpen}>Log in</Button>
            </ButtonGroup>
            </Flex>
            <Modal heading={"Login"} isOpen={login.isOpen} onClose={login.onClose} button={
                <Button colorScheme="teal">Login</Button>
            }>
                <LoginForm />
            </Modal>
            <Modal heading={"Sign Up"} isOpen={register.isOpen} onClose={register.onClose} button={
                <Button colorScheme="teal">Sign Up</Button>
            }>
                <SignUpForm />
            </Modal>
        </>
        
        
    )
}

export default Navbar;
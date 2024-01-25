import { Box, Button, ButtonGroup, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

function Navbar(){
    return(
        <Flex flexDirection={{base: "column", md: "row"}} minWidth='max-content' alignItems='center' gap='2' padding={[2, 3]} className="border-b border-slate-200">
            <Box p='2'>
                <Heading size='md'>RecycleHub</Heading>
            </Box>
            <Spacer display={{base: "none", md: "block"}} />
            <ButtonGroup gap='2'>
                <NextLink href={"/signup"}>
                    <Button colorScheme='teal'>Sign Up</Button>
                </NextLink>
                <NextLink href={"/login"}>
                    <Button colorScheme='teal'>Log in</Button>
                </NextLink>
            </ButtonGroup>
            </Flex>
    )
}

export default Navbar;
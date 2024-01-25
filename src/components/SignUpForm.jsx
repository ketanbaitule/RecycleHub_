import { FormControl, FormLabel, Stack, Input, InputGroup, InputLeftElement, Icon, FormHelperText } from "@chakra-ui/react";
import { BsKeyFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function SignUpForm() {
    return (
        <FormControl>
            <FormLabel>Email</FormLabel>
            <Stack spacing={4}>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" >
                        <Icon as={MdEmail} />
                    </InputLeftElement>
                    <Input type="email" placeholder={"whoami@xyz.com"} />
                </InputGroup>
            </Stack>
            <FormHelperText>We will never share your email.</FormHelperText>

            <br />
                
            <FormLabel>Password</FormLabel>
            <Stack spacing={4}>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" >
                        <Icon as={BsKeyFill} />
                    </InputLeftElement>
                    <Input type="text" placeholder="Password" />
                </InputGroup>
            </Stack>
        </FormControl>
    )
}
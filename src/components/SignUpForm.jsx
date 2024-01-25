import { FormControl, FormLabel, Stack, Input, InputGroup, InputLeftElement, Icon, FormHelperText } from "@chakra-ui/react";
import { BsKeyFill, BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function SignUpForm() {
    return (
        <FormControl>
            <FormLabel>Name</FormLabel>
            <Stack spacing={4}>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" >
                        <Icon as={BsPersonFill} />
                    </InputLeftElement>
                    <Input type="name" placeholder={"Ketan Baitule"} />
                </InputGroup>
            </Stack>
            <br />
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
            <br />
            <FormLabel>Confirm Password</FormLabel>
            <Stack spacing={4}>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" >
                        <Icon as={BsKeyFill} />
                    </InputLeftElement>
                    <Input type="text" placeholder="Confirm password" />
                    <br />
                </InputGroup>
            </Stack>
        </FormControl>
    )
}

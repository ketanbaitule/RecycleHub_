import { Button, FormControl, FormHelperText, FormLabel, Icon, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { BsKeyFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { supabase } from "@/model/supabase";

export default function LoginForm() {
    return (
        <form>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" >
                            <Icon as={MdEmail} />
                        </InputLeftElement>
                        <Input type="email" placeholder="whoami@xyz.com" />
                    </InputGroup>
                </Stack>

                <br />
                    
                <FormLabel>Password</FormLabel>
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" >
                            <Icon as={BsKeyFill} />
                        </InputLeftElement>
                        <Input type="password" placeholder="Password" />
                    </InputGroup>
                </Stack>

                <br />

                <Button colorScheme='teal'>Login</Button>

                <br />
            </FormControl>
        </form>
    )
}

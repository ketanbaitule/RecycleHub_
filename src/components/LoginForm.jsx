import { Button, FormControl, FormHelperText, FormLabel, Icon, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { BsKeyFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { account } from "@/config/appwrite";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';


export default function LoginForm({onClose}) {
    const router = useRouter();
    const { register, handleSubmit} = useForm();

    function loginUser(e){
        account.createEmailSession(e.email, e.password).then((data)=>{
            console.log("Success");
            router.push("/discover");
            onClose();
        }, (error)=>{
            console.log("error");
            console.log(error)
        });
    }

    return (
        <form onSubmit={handleSubmit(loginUser)}>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" >
                            <Icon as={MdEmail} />
                        </InputLeftElement>
                        <Input type="email" placeholder="whoami@xyz.com" {...register("email")} />
                    </InputGroup>
                </Stack>

                <br />
                    
                <FormLabel>Password</FormLabel>
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" >
                            <Icon as={BsKeyFill} />
                        </InputLeftElement>
                        <Input type="password" placeholder="Password" {...register("password")} />
                    </InputGroup>
                </Stack>

                <br />

                <Button colorScheme='teal' type="submit">Login</Button>

                <br />
            </FormControl>
        </form>
    )
}

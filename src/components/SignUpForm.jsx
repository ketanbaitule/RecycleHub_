import { FormControl, FormLabel, Stack, Input, InputGroup, InputLeftElement, Icon, FormHelperText, Alert, AlertIcon, Button } from "@chakra-ui/react";
import { useState } from "react";
import { BsKeyFill, BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { account } from "@/config/appwrite";
import { useRouter } from 'next/router';

export default function SignUpForm({onClose}) {
    const router = useRouter();
    const { register, handleSubmit} = useForm();

    function createUser(e){
        account.create(e.email, e.email, e.password).then((user)=>{
            console.log("User Created");
            onClose();
            router.push("/discover");
        }, (error)=>{
            console.log("Error Occured");
        })
    }


    return (
        <form onSubmit={handleSubmit(createUser)}>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" >
                            <Icon as={BsPersonFill} />
                        </InputLeftElement>
                        <Input type="name" placeholder={"Ketan Baitule"} {...register("name")} />
                    </InputGroup>
                </Stack>
                <br />
                <FormLabel>Email</FormLabel>
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" >
                            <Icon as={MdEmail} />
                        </InputLeftElement>
                        <Input type="email" placeholder={"whoami@xyz.com"} {...register("email")} />
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
                        <Input type="password" placeholder="Password" {...register("password")} />
                    </InputGroup>
                </Stack>
                <br />
                <FormLabel>Confirm Password</FormLabel>
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" >
                            <Icon as={BsKeyFill} />
                        </InputLeftElement>
                        <Input type="password" placeholder="Confirm password" {...register("confirm_password")} />
                        <br />
                    </InputGroup>
                </Stack>

                <br />

                <Button colorScheme='teal' type="submit">Sign Up</Button>

                <br />
            </FormControl>
        </form>
    )
}

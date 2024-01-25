import { FormControl, FormLabel, Stack, Input, InputGroup, InputLeftElement, Icon, FormHelperText, Alert, AlertIcon, Button } from "@chakra-ui/react";
import { useState } from "react";
import { BsKeyFill, BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://ogunnrbrzfnivuooexda.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ndW5ucmJyemZuaXZ1b29leGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyMTU1ODksImV4cCI6MjAyMTc5MTU4OX0.1GwegW7EtZ4QY_A-1uycvFbAeUuvSyT4-y7No60z3T0');

export default function SignUpForm() {
    const [ signUpStatus, setSignUpStatus ] = useState(false)

    const { register, handleSubmit} = useForm();

    function createUser(e){
        supabase.auth.signUp({
            name: e.name,
            email: e.email,
            password: e.password
        }).then((data)=>{
            setSignUpStatus(true);
            console.log(data);
        })
    }


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
=======
        <>
            { signUpStatus ? 
                <Alert status='success' className="mb-3">
                    <AlertIcon />
                    Your Account Has Been Created!!
                </Alert>: ''
            }
            <form onSubmit={handleSubmit(createUser)}>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none" >
                                <Icon as={BsPersonFill} />
                            </InputLeftElement>
                            <Input type="name" placeholder={"Ketan Baitule"}  {...register("name")} />
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
                            <Input type="text" placeholder="Password" {...register("password")} />
                        </InputGroup>
                    </Stack>
                    <br />
                    <FormLabel>Confirm Password</FormLabel>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none" >
                                <Icon as={BsKeyFill} />
                            </InputLeftElement>
                            <Input type="text" placeholder="Confirm password"  {...register("confirm_password")} />
                            <br />
                        </InputGroup>
                    </Stack>
                    <br />
                    <Button colorScheme="teal" type={"submit"} className="mb-3">Sign Up</Button>
                    <br />
                </FormControl>
            </form>
        </>
    )
}

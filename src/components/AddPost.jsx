import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

export default function AddPost() {
    return (
        <>
        <FormControl>
            <FormLabel>Title</FormLabel>
            <Stack spacing={4}>
                <Input type="name" placeholder={"Enter your title: "} />
            </Stack>
            <br />
            <FormLabel>Content</FormLabel>
            <Stack spacing={4}>
                <Input type="text" placeholder={"Describe your contribution..."} />
            </Stack>
            <br />
        </FormControl>
        </>
    )
}
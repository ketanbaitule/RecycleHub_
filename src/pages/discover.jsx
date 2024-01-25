import PostCard from "@/components/PostCard";
import { Flex, Heading, Highlight } from '@chakra-ui/react';
import { BiHeading } from "react-icons/bi";
// username, designation, content

export default function Discover() {

    let userData = [
        {
            "username": "Dr. J. B. Randhawa", 
            "designation": "Proffesor, GCOEN",
            "content": "RecycleHub is a game-changer! Its efficient processes and user-friendly interface make recycling hazardous waste seamless. The connection between users, collectors, and re-processors is remarkable. A much-needed solution for a cleaner environment!" 
        }, 
        {
            "username": "Dr. Latesh Malik", 
            "designation": "HOD, CSE Department", 
            "content": "RecycleHub revolutionizes waste management. The centralized map and reward system motivate users, while the point system for collectors adds a commendable touch. The market for recycled materials is a brilliant addition. A holistic approach towards a sustainable future."
        }, 
        {
            "username": "Dr. S. R. Wagh", 
            "designation": "Asst. Proffessor, GCOEN", 
            "content": "Incredible initiative! RecycleHub tackles global challenges with local solutions. The comprehensive market survey demonstrates a deep understanding of the issues. The proposed solution aligns with environmental goals. A commendable effort for a greener planet."
        }
    ]

    return (
        <>
        <Heading lineHeight='tall' size="2xl">
            <Highlight
                query={['Discover']}
                styles={{ px: '2', py: '1',  bg: 'teal.200' }}
            >
                Welcome to the Discover Page!
            </Highlight>
        </Heading>        
        <Heading size="sm" padding={3} >Here you can see all the wonderful contributions people around the world are making towards a sustainable future.</Heading>
        <br />
        <Flex flexDirection={"column"} alignItems={"center"} gap={5}>
            {
                userData.map((user) => {
                    console.log(user.username);
                    return(
                    <PostCard username={user.username} designation={user.designation} content={user.content} key={user.username} />
                    )
                })
            }
        </Flex>
        </>        
    )
}

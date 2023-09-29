import { ChatIcon } from "@chakra-ui/icons"
import { Box, Button, Icon, Link, Text } from "@chakra-ui/react"
import { Link as RLink } from "react-router-dom"
import { FC } from "react"

type Props = {
    title: string
    text: string
    user: string
    date: string
    path: string
}

const BlogCard: FC<Props> = ({ title, text, user, date, path }) => {
    return (
        <Box
            mt="2rem"
            h={["70vh", "50vh", "60vh"]}
            paddingX={"3%"}
            color="white"
        >
            <RLink to={"/blog"}>
                <Box
                    bgImg={`url('${path}')`}
                    bgPos={"center"}
                    bgSize={"cover"}
                    height={["60%", "60%", "45%", "45%"]}
                    width={["100%"]}
                    margin="0 auto"
                />
            </RLink>
            <Text mt={"1.5rem"}>
                <Link
                    color="whiteAlpha.800"
                    _hover={{
                        color: "darkgray"
                    }}
                    mr="0.8rem"
                >{date}</Link>
                <Link
                    color="whiteAlpha.800"
                    _hover={{
                        color: "darkgray"
                    }}
                    mr="0.8rem"
                >{user}</Link>
                <Link
                    color="whiteAlpha.800"
                    _hover={{
                        color: "darkgray"
                    }}
                >
                    <ChatIcon
                    /> 3
                </Link>
            </Text>
            <Text
                fontSize={"large"}
                fontWeight={"600"}
                mb="1.5rem"
                mt="0.5rem"
            >{title}</Text>
            <Text
                color="whiteAlpha.800"
            >{text}</Text>
        </Box >
    )
}

export default BlogCard

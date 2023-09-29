import { ChatIcon } from "@chakra-ui/icons"
import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { faCalendar, faComment, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"
import { Link as RLink } from "react-router-dom"

type Props = {
    title: string
    user: string
    date: string
    path: string
}

const FooterBlogCard: FC<Props> = (props) => {
    return (
        <Flex
            color="white"
            alignItems={"flex-start"}
        >
            <RLink
                to={"/blog"}>
                <Box
                    bgImg={`url('${props.path}')`}
                    bgPos={"center"}
                    bgSize={"cover"}
                    height={"80px"}
                    width={"80px"}
                    margin={"1rem"}
                    ml="0rem"
                />
            </RLink>
            <Box>
                <Text
                    fontSize={["1rem", "1rem", "large"]}
                    fontWeight={"500"}
                    color="whiteAlpha.900"
                    mt="1rem"
                    mb="0.5rem"
                >{props.title}</Text>
                <Flex
                    fontSize={"0.8rem"}
                    wrap={"wrap"}
                    mt={"0.5rem"}
                    color="whiteAlpha.600"
                >
                    <Flex
                        alignItems={"center"}>
                        <FontAwesomeIcon icon={faCalendar} />
                        <Link
                            w="max-content"
                            _hover={{
                                color: "darkgray"
                            }}
                            mr="0.8rem"
                            ml="0.3rem"
                        >{props.date}</Link>
                    </Flex>
                    <Flex
                        alignItems={"center"}>

                        <FontAwesomeIcon icon={faUser} />
                        <Link
                            _hover={{
                                color: "darkgray"
                            }}
                            mr="0.8rem"
                            ml="0.3rem"
                        >{props.user}</Link>
                    </Flex>
                    <Flex
                        alignItems={"center"}>
                        <FontAwesomeIcon icon={faComment} />
                        <Link
                            _hover={{
                                color: "darkgray"
                            }}
                            ml="0.3rem"
                        >
                            19
                        </Link>
                    </Flex>
                </Flex>
            </Box>
        </Flex >
    )
}

export default FooterBlogCard

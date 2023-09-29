import { Box, Center, Flex, Input, Link, Text, Textarea } from "@chakra-ui/react"
import CustomButton from "components/CustomButton"
import LandingPage from "components/LandingPage"

const Contact = () => {
    return (
        <Box color="white">
            <LandingPage imgPath="assets/images/backgrounds/bg_3.jpg.webp" />
            <Center
                w="100vw"
                bgImage={`url('assets/images/backgrounds/bg_4.jpg.webp')`}
                paddingY={"6rem"}
                bgPos={"center"}
                bgSize={"cover"}
                bgAttachment={"fixed"}
                gap={"3rem"}
                flexDirection={["column", "column", "row"]}
            >
                <Flex
                    direction="column"
                    gap="2rem"
                    w={["90%", "90%", "30%"]}
                    maxW="300px"
                >
                    <Text
                        fontSize={"2xl"}
                    >Contact Information</Text>
                    <Flex
                        gap="1rem"
                    >
                        Address:
                        <Text textAlign={"end"} color={"whiteAlpha.700"}>198 West 21th Street, Suite 721 New York NY 10016</Text>
                    </Flex>
                    <Flex
                        gap="1rem"
                    >
                        <Text>Phone:</Text>
                        <Link flexGrow="1" textAlign={"end"} href="tel:+ 1235 2355 98" color={"yellow.dark"}>+ 1235 2355 98</Link>
                    </Flex>
                    <Flex
                        gap="1rem"
                    >
                        <Text>Email:</Text>
                        <Link flexGrow="1" textAlign={"end"} href="email:info@yoursite.com" color={"yellow.dark"}>info@yoursite.com</Link>
                    </Flex>
                    <Flex
                        gap="1rem"
                    >
                        <Text>Website:</Text>
                        <Link flexGrow="1" textAlign={"end"} href="https://www.yoursite.com" color={"yellow.dark"}>yoursite.com</Link>
                    </Flex>
                </Flex>
                <Box
                    mt="3rem"
                    color="white"
                    w={["80%", "80%", "50%"]}
                    maxW="500px"
                >
                    <Flex
                        direction={["column", "column", "row"]}
                        gap={"1rem"}
                        mb={"1rem"}
                    >
                        <Input placeholder="Your Name" variant={"flushed"} />
                        <Input placeholder="Your Email" variant={"flushed"} />
                    </Flex>
                    <Input mb="1rem" placeholder="Subject" variant={"flushed"} />
                    <Textarea mb="1rem" placeholder="Message" variant={"flushed"} />
                    <CustomButton full text="Send Message" />
                </Box>
            </Center>
        </Box>
    )
}

export default Contact

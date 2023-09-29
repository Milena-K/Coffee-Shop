import { Box, Center, Circle, Flex, Grid, GridItem, Link, List, ListItem, SimpleGrid, Text } from "@chakra-ui/react"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BlogCard from "components/BlogCard"
import FooterBlogCard from "components/FooterBlogCard"
import { StyledFooterTitle } from "components/StyledFooterTitle"

const services = ["Cooked", "Deliver", "Quality Foods", "Mixed"]
const contact = [
    "203 Fake St. Mountain View, San Francisco, California, USA",
    "+2 392 3929 210",
    "info@yourdomain.com"
]
const contactHref = [
    "tel:",
    "email:"
]

const contactIcons = [faLocationDot, faPhone, faEnvelope]

const Footer = () => {
    return (
        <Center
            bgColor={"gray.bg"}
            padding={{ base: "1rem", sm: "2rem", md: "2rem" }}
        >
            <Grid
                color={"white"}
                p="1rem"
                gap={"3rem"}
                maxW={"1200px"}
                templateColumns={["1fr", "1fr", "1fr 1fr", "repeat(5, 1fr)"]}
            >
                <Box>
                    <StyledFooterTitle>About us</StyledFooterTitle>
                    <Text
                        color="whiteAlpha.600"
                    >
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Text>
                    <Flex
                        gap={"1rem"}
                        mt={"3rem"}
                    >
                        <Circle
                            size={"3.5rem"}
                            bgColor={"whiteAlpha.100"}
                            cursor={"pointer"}
                        >
                            <FontAwesomeIcon fontSize="1.5rem" icon={faTwitter} />
                        </Circle>
                        <Circle
                            size={"3.5rem"}
                            bgColor={"whiteAlpha.100"}
                            cursor={"pointer"}
                        >
                            <FontAwesomeIcon fontSize="1.5rem" icon={faFacebook} />
                        </Circle>
                        <Circle
                            size={"3.5rem"}
                            bgColor={"whiteAlpha.100"}
                            cursor={"pointer"}
                        >
                            <FontAwesomeIcon fontSize="1.5rem" icon={faInstagram} />
                        </Circle>
                    </Flex>
                </Box>
                <GridItem
                    colSpan={[1, 1, 1, 2]}
                >
                    <StyledFooterTitle>recent blog</StyledFooterTitle>
                    <FooterBlogCard
                        title="Even the all-powerful Pointing has no control about"
                        user="Admin"
                        date="Sept 15, 2018"
                        path="assets/images/food/dish-3.jpg.webp"
                    />
                    <FooterBlogCard
                        title="Even the all-powerful Pointing has no control about"
                        user="Admin"
                        date="Sept 15, 2018"
                        path="assets/images/food/dish-4.jpg.webp"
                    />
                </GridItem>
                <Box>
                    <StyledFooterTitle>services</StyledFooterTitle>
                    <Flex
                        direction="column"
                        color={"whiteAlpha.600"}
                        gap={3}
                    >
                        {
                            services.map((service, index) => (
                                <Link
                                    href="/services"
                                    key={index.toString() + service}
                                    textDecoration={"none"}
                                    _hover={{
                                        color: "whiteAlpha.900"
                                    }}
                                    w={["100%", "100%", "fit-content"]}>
                                    {service}
                                </Link>

                            ))
                        }
                    </Flex>
                </Box>
                <Box>
                    <StyledFooterTitle>have a question?</StyledFooterTitle>
                    {
                        contact.map((info, index) => (
                            <Flex
                                gap={"2rem"}
                                mb={"1rem"}
                                key={index.toString() + info}>
                                <FontAwesomeIcon icon={contactIcons[index]} />
                                <Link
                                    textDecoration={"none"}
                                    _hover={{
                                        color: "whiteAlpha.900"
                                    }}
                                    href={index !== 0 ? contactHref[index - 1] + info : ""}
                                    color={"whiteAlpha.700"}
                                >{info}</Link>
                            </Flex>
                        ))
                    }
                </Box>
            </Grid >
        </Center>
    )
}

export default Footer

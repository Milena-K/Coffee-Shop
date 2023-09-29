import { Box, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import CustomButton from "components/CustomButton"
import SlideInMotion from "components/SlideInMotion"
import { Link } from "react-router-dom"
import Coffe1 from "../../assets/images/coffee/menu-1.jpg.webp"
import Coffe2 from "../../assets/images/coffee/menu-2.jpg.webp"
import Coffe3 from "../../assets/images/coffee/menu-3.jpg.webp"
import Coffe4 from "../../assets/images/coffee/menu-4.jpg.webp"

const products = [Coffe1, Coffe2, Coffe3, Coffe4]

const DiscoverMenu = () => {
    return (
        <Center
            bgImage="url('assets/images/backgrounds/bg_4.jpg.webp')"
            bgAttachment="fixed"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="top"
            width={"100vw"}
            h={{ base: "fit-content", sm: "fit-content", md: "85vh" }}
        >
            <Flex
                direction={["column", "column", "row"]}
                color="white"
                maxW={"1500px"}
                h={"100%"}
            >
                <Flex
                    w={["80%", "80%", "50%"]}
                    justifyContent={{ base: 'left', md: 'right' }}
                    margin={{ base: "0 auto", sm: "0 auto", md: '0' }}
                    mt={{ base: "4rem", sm: "4rem" }}
                    pr={{ md: "4rem" }}
                >
                    <Center
                        flexDir="column"
                        lineHeight={0.65}
                        textAlign={{ base: 'left', md: 'right' }}
                        w={["100%", "100%", "70%"]}
                    >
                        <SlideInMotion y={100} duration={1}>
                            <Text
                                fontSize="5xl"
                                mt="25px"
                                color="yellow.dark"
                                fontFamily="Great Vibes; cursive"
                            >Discover</Text>
                            <Text
                                fontSize="4xl"
                                fontWeight="bold"
                            >OUR MENU</Text>
                            <Text
                                lineHeight="1.5"
                                mt="53"
                                mb="33"
                                color="whiteAlpha.500"
                            >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </Text>
                            <CustomButton full={false} text="View Full Menu" color="yellow.dark" />
                        </SlideInMotion>
                    </Center>
                </Flex>
                <SimpleGrid
                    w={["100%", "100%", "40%"]}
                    h={["100%", "100%", "60%"]}
                    alignSelf={"center"}
                    gap={"2rem"}
                    mt={"2rem"}
                    mb={"2rem"}
                    columns={[1, 1, 2]}>
                    {products.map((p, index) => (
                        <Box
                            key={index.toString() + 'coffee'}
                            justifySelf={{ base: "center", lg: index % 2 === 0 ? "end" : "start" }}
                            alignSelf={{ base: "center", lg: index % 2 === 0 ? "end" : "start" }}
                            bgImage={p}
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            bgPos="center"
                            cursor={"pointer"}
                            h={{ base: "250px", sm: "250px", md: "100%", lg: "90%" }}
                            w={{ base: "90%", sm: "80%", md: "100%", lg: "90%" }}
                        >
                            <Link
                                to="/" />
                        </Box>

                    ))}
                </SimpleGrid>
            </Flex>
        </Center>
    )
}

export default DiscoverMenu

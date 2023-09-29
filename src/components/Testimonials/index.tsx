import { Box, Center, Flex, Text } from "@chakra-ui/react"
import SlideInMotion from "components/SlideInMotion"
import { testimonials } from "./customerData"

type Testimonial = {
    text: string,
    customer_name: string,
    job: string
}

const Testimonials = () => {
    return (
        <Box
            bgImage="linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('assets/images/backgrounds/bg_1.jpg.webp')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="top"
            h="100%"
        >
            <Center
                textAlign={"center"}
                lineHeight={0.6}
                color="white"
                padding={"1rem"}
            >
                <SlideInMotion y={100} duration={1}>
                    <Text
                        fontSize="5xl"
                        mt="6rem"
                        color="yellow.dark"
                        fontFamily="Great Vibes; cursive"
                    >Testimony</Text>
                    <Text
                        fontSize={["3xl", "3xl", "4xl"]}
                        fontWeight="bold"
                    >CUSTOMERS SAY</Text>
                    <Text
                        lineHeight="1.5"
                        marginY={33}
                        maxW="400px"
                        color="whiteAlpha.500"
                    >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
                </SlideInMotion>
            </Center>
            <Flex
                direction={["column", "column", "column", "row"]}
                alignItems={"flex-end"}
            >
                {
                    testimonials.map((t, index) => (
                        <SlideInMotion
                            y={100}
                            key={index.toString() + 'testimonial'}
                            duration={Number(`1.${index}`)}>
                            <Box
                                color="white"
                                padding={["2rem", "2rem", "2rem"]}
                                bgColor={index % 2 !== 0 ? "yellow.darker" : "yellow.dark"}
                                h={`calc(${(index % 2) * 30}% + 200px)`}
                            >
                                <Text
                                    fontSize={"md"}
                                    fontWeight={"light"}
                                >&ldquo;{t.text}&rdquo;</Text>
                                <Flex mt={"2rem"}>
                                    <Box
                                        bgImage={index % 2 !== 0 ? "url('assets/images/people/person_2.jpg.webp')" : "url('assets/images/people/person_3.jpg.webp')"}
                                        bgRepeat="no-repeat"
                                        bgSize="cover"
                                        borderRadius="25px"
                                        w="40px"
                                        h="40px"
                                        mr={"1rem"}
                                    />
                                    <Box>
                                        <Text>{t.customer_name}</Text>
                                        <Text
                                            fontSize={"small"}
                                            color={"whiteAlpha.600"}>{t.job}</Text>
                                    </Box>
                                </Flex>

                            </Box>
                        </SlideInMotion>
                    ))
                }
            </Flex>
        </Box>
    )
}

export default Testimonials

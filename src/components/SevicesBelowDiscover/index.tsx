import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { faSeedling, faTruck, faHandPointer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SlideInMotion from "components/SlideInMotion"

const icons = [faHandPointer, faTruck, faSeedling]
const titles = [
    'EASY TO ORDER',
    'FASTEST DELIVERY',
    'QUALITY COFFEE'
]
const content = 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'

const ServicesBelowDiscover = () => {

    return (
        <Center
            display="flex"
            bgColor="yellow.dark"
            color="black"
            width={"100vw"}
        >
            <Center
                maxW={"1000px"}
                marginY={{ base: "4rem", sm: "4rem" }}
                flexDir={['column', 'column', 'row']}
            >
                {icons.map((icon, index) => (
                    <Flex
                        key={index.toString() + 'icon'}
                        paddingY={["1rem", "1rem", "8rem"]}
                        width={["100vw", "100vw", "33%"]}
                        direction="column"
                    >
                        <SlideInMotion duration={Number('1.' + index.toString())} >
                            <Center
                                flexDir="column">
                                <Center
                                    padding="2rem"
                                    border="1px solid black"
                                    fontSize={["2rem", "2rem", "3rem"]}
                                >
                                    <FontAwesomeIcon icon={icon} />
                                </Center>
                                <Text
                                    fontWeight="500"
                                    fontSize="1.3rem"
                                    mt="1rem"
                                >{titles[index]}</Text>
                                <Text
                                    textAlign="center"
                                    fontWeight="300"
                                    padding="1.3rem"
                                >{content}</Text>
                            </Center>
                        </SlideInMotion>
                    </Flex>
                ))
                }
            </Center>
        </Center>
    )
}

export default ServicesBelowDiscover

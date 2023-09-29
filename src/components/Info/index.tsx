import { Box, Flex, Text } from "@chakra-ui/react"
import { faClock, faLocationCrosshairs, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BookATable from "components/BookATable"
import SlideInMotion from "components/SlideInMotion"

const Info = () => {
    return (
        <Box
            width={"100vw"}
            backgroundColor="black"
        >
            <Flex
                maxW={"1500px"}
                backgroundColor="black"
                direction={["column", "column", "row"]}
                margin="0 auto"
                position='relative' >
                <Flex
                    width={{ base: "100%", md: "75%", lg: "75%", xl: 'calc(100% - 500px)' }}
                    direction={["column", "column", "row"]}
                    padding={25}
                    color="white">
                    <Box w={["100%", "100%", "100%", "25%"]}>
                        <SlideInMotion y={100} duration={1}>
                            <Flex gap={3} alignItems="top">
                                <FontAwesomeIcon color="#c49b63" icon={faPhone} />
                                <Text fontWeight="bold">000 (123) 456 7890</Text>
                            </Flex>
                            <Text w="80%" ml={30} color="whiteAlpha.700">A small river named Duden flows by their place and supplies. </Text>
                        </SlideInMotion>
                    </Box>
                    <Box w={["100%", "100%", "100%", "25%"]}>
                        <SlideInMotion y={100} duration={1.2}>
                            <Flex gap={3} alignItems="top" >
                                <FontAwesomeIcon color="#c49b63" icon={faLocationCrosshairs} />
                                <Text fontWeight="bold">198 West 21th Street</Text>
                            </Flex>
                            <Text w="80%" ml={30} color="whiteAlpha.700">203 Fake St. Mountain View, San Francisco, California, USA </Text>
                        </SlideInMotion>
                    </Box>
                    <Box w={["100%", "100%", "100%", "25%"]}>
                        <SlideInMotion y={100} duration={1.4}>
                            <Flex gap={3} alignItems="top">
                                <FontAwesomeIcon color="#c49b63" icon={faClock} />
                                <Text fontWeight="bold">Open Monday-Friday</Text>
                            </Flex>
                            <Text w="80%" ml={30} color="whiteAlpha.700">8:00am - 9:00pm </Text>
                        </SlideInMotion>
                    </Box>
                </Flex>
                <Box w={{ base: "100%", md: "25%", lg: "25%", xl: "500px" }} h={"fit-content"} position={{ base: 'relative', xl: 'absolute' }} bottom={0} right={0}>
                    <BookATable />
                </Box>
            </Flex >
        </Box>
    )
}

export default Info

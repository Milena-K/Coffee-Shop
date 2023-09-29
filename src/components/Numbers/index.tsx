import { Box, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Counter from "components/Counter"
import RotatingSquare from "components/RotatingSquare"
import SlideInMotion from "components/SlideInMotion"
import { motion } from "framer-motion"

const data = [
    {
        category: 'Coffee Branches',
        number: 100
    },
    {
        category: 'Number of Awards',
        number: 85
    },
    {
        category: 'Happy Customer',
        number: 10567
    },
    {
        category: 'Staff',
        number: 900
    },
]

const Numbers = () => {
    return (
        <Box
            bgImage="linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), url('/assets/images/backgrounds/bg_2.jpg.webp')"
            bgAttachment="fixed"
            bgPos={{ md: 'center', lg: "top" }}
            bgSize="cover"
            color="black"
        >
            <SimpleGrid
                paddingY={["6rem", "6rem", "6rem", "5rem"]}
                justifyContent={"center"}
                columns={[1, 1, 2, 4]}
                maxW={"1000px"}
                w="70vw"
                gap="2rem"
                margin={"0 auto"}
            >
                {
                    data.map((info, index) => (
                        <SlideInMotion
                            duration={Number(`1.${index}`)}
                            key={index.toString() + 'info'}>
                            <Center
                                flexDir="column"
                                color="yellow.dark"
                            >
                                <RotatingSquare appearOnHover={false}>
                                    <FontAwesomeIcon size="xl" className="faIcon" icon={faMugHot} style={{ color: "inherit" }} />
                                </RotatingSquare>
                                <Counter
                                    fontSize="2rem"
                                    fontWeight="normal"
                                    from={0}
                                    to={info.number}
                                    duration={10} />
                                <Text w="max-content" color="whiteAlpha.700">{info.category}</Text>
                            </Center>
                        </SlideInMotion>
                    ))
                }
            </SimpleGrid>
        </Box>
    )
}
export default Numbers

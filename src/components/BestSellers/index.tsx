import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react"
import Card from "components/Card"
import CustomButton from "components/CustomButton"
import SlideInMotion from "components/SlideInMotion"

const coffee = [
    {
        name: "coffee cappuccino",
        description: "A small river named Duden flows by their place and supplies",
        id: "coffee1",
        price: "$5.90",
    },
    {
        name: "coffee cappuccino",
        description: "A small river named Duden flows by their place and supplies",
        id: "coffee2",
        price: "$5.90",
    },
    {
        name: "coffee cappuccino",
        description: "A small river named Duden flows by their place and supplies",
        id: "coffee3",
        price: "$5.90",
    },
    {
        name: "coffee cappuccino",
        description: "A small river named Duden flows by their place and supplies",
        id: "coffee4",
        price: "$5.90",
    },
]
const BestSellers = () => {
    return (
        <Box
            h="100%"
            bgImage="url('/assets/images/backgrounds/bg_4.jpg.webp')"
            bgAttachment="fixed"
            bgPos="center"
            bgSize="cover"
        >

            <Box
                paddingTop={"5rem"}
                color="white"
                lineHeight={0}
                textAlign={"center"}
                maxW="480px"
                margin="0 auto"
            >
                <SlideInMotion y={100} duration={1}>
                    <Text
                        fontSize="5xl"
                        mt="25px"
                        color="yellow.dark"
                        fontFamily="Great Vibes; cursive"
                        zIndex={2}
                    >Discover</Text>
                    <Text
                        fontSize="4xl"
                        fontWeight="bold"
                        lineHeight={1.5}
                    >BEST COFFEE SELLERS</Text>
                    <Text
                        lineHeight="1.5"
                        mt="53"
                        mb="33"
                        paddingX="1rem"
                        color="whiteAlpha.500"
                    >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
                </SlideInMotion>
            </Box>
            <SimpleGrid
                columns={[1, 1, 4]}
                margin="0 auto"
                maxW="800px"
            >
                {
                    coffee.map((c, index) => (
                        <Card key={index.toString() + 'c'} id={c.id} name={c.name} text={c.description} price={c.price} path={`/assets/images/coffee/menu-${index + 1}.jpg.webp`} />
                    ))
                }
            </SimpleGrid>
        </Box>
    )
}

export default BestSellers

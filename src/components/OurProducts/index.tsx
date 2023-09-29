import { Box, Center, Text } from "@chakra-ui/react"
import SlideInMotion from "components/SlideInMotion"
import DataTabs from "components/DataTabs"
import { FC } from "react"

type Props = {
    menuData: TabMenuData
}

const OurProducts: FC<Props> = ({ menuData }) => {
    return (
        <Box
            bgImage="url('assets/images/backgrounds/bg_4.jpg.webp')"
            bgAttachment="fixed"
            bgRepeat="no-repeat"
            bgSize="cover"
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
                        mt="25px"
                        color="yellow.dark"
                        fontFamily="Great Vibes; cursive"
                    >Discover</Text>
                    <Text
                        fontSize={["3xl", "3xl", "4xl"]}
                        fontWeight="bold"
                    >OUR PRODUCTS</Text>
                    <Text
                        lineHeight="1.5"
                        marginY={33}
                        maxW="400px"
                        color="whiteAlpha.500"
                    >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
                </SlideInMotion>
            </Center>
            <Box paddingX={"1rem"}>
                <DataTabs columns={[1, 1, 3]} data={menuData} />
            </Box>
        </Box>
    )
}

export default OurProducts

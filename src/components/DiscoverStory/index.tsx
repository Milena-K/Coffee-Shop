import { Box, Flex, Text } from "@chakra-ui/react"
import SlideInMotion from "components/SlideInMotion"

const DiscoverStory = () => {
    return (
        <Flex
            position="relative"
            direction={['column', 'column', 'row']}
        >
            <Box
                width={['100vw', '100vw', '50vw']}
                height={['50vh', '50vh', '70vh']}
                bgImage="url('/assets/images/sections/about+ourstory.jpg.webp')"
                bgPos="center"
                bgSize="cover"
            />

            <Box
                position="absolute"
                color="white"
                top={["42%", "50%", "20"]}
                right={[0, 0, "10%"]}
                bottom={["0", "0", "20"]}
                lineHeight={0.6}
            >
                <SlideInMotion>
                    <Box
                        bgColor="blackAlpha.600"
                        padding={["20px", "20px", "45px"]}
                        width="45vw"
                        minW={["100vw", "100vw", "400px"]}
                        height={["70vh", "50vh", "60vh", "fit-content"]}
                        maxH={"900px"}
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
                            >OUR STORY</Text>
                        </SlideInMotion>
                        <Text
                            lineHeight="1.5"
                            mt="53"
                            color="whiteAlpha.500"
                        >On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word &quot;and&quot; and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</Text>
                    </Box>
                </SlideInMotion>
            </Box>
            <Box
                width={['100vw', '100vw', '50vw']}
                height={['70vh', '50vh', '70vh']}
                bgImage="url('/assets/images/backgrounds/bg_4.jpg.webp')"
                bgAttachment="fixed"
                bgPos="center"
                bgSize="cover"
            />
        </Flex >
    )
}

export default DiscoverStory

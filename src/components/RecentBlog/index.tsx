import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react"
import BlogCard from "components/BlogCard"
import SlideInMotion from "components/SlideInMotion"
import { FC } from "react"


type Props = {
    imgs: string[]
}

const RecentBlog: FC<Props> = ({ imgs }) => {
    return (
        <Box
            bgImage="url('assets/images/backgrounds/bg_4.jpg.webp')"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="top"
            h="100%"
        >
            <Center
                textAlign={"center"}
                color="white"
                padding={"1rem"}
            >
                <SlideInMotion y={100} duration={1}>
                    <Text
                        fontSize={["3xl", "3xl", "4xl"]}
                        fontWeight="bold"
                        p="1rem"
                        mt={"4rem"}
                    >RECENT FROM BLOG</Text>
                    <Text
                        lineHeight="1.5"
                        marginY={33}
                        maxW="400px"
                        color="whiteAlpha.500"
                    >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
                </SlideInMotion>
            </Center>
            <Center>
                <SimpleGrid
                    columns={[1, 1, 3]}
                    maxW={"1000px"}
                >
                    {
                        imgs.map((path, i) => (
                            <BlogCard
                                key={i.toString() + 'blog'}
                                date="Sept 10, 2018"
                                user="Admin"
                                path={path}
                                title="The Delicious Pizza"
                                text="A small river named Duden flows by their place and supplies it with the necessary regelialia." />
                        ))
                    }
                </SimpleGrid>
            </Center>
        </Box >
    )
}

export default RecentBlog

import { Box, Center, SimpleGrid } from "@chakra-ui/react"
import BlogCard from "components/BlogCard"
import LandingPage from "components/LandingPage"
import Paging from "components/Paging"
const imgs = [
    "assets/images/food/dish-1.jpg.webp",
    "assets/images/food/dish-2.jpg.webp",
    "assets/images/food/dish-3.jpg.webp",
    "assets/images/food/dish-4.jpg.webp",
    "assets/images/food/dish-5.jpg.webp",
    "assets/images/food/dish-6.jpg.webp",
]

const Blog = () => {
    return (
        <Box color="white">
            <LandingPage imgPath="assets/images/backgrounds/bg_3.jpg.webp" />
            <Box
                h={"fit-content"}
                w={"100vw"}
                bgImage={`url('assets/images/backgrounds/bg_4.jpg.webp')`}
                bgPos={"center"}
                bgSize={"cover"}
                bgAttachment={"fixed"}
                position="relative"
            >

                <Center
                    p="1rem"
                    flexDir={"column"}
                >
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
                    <Paging />
                </Center>
            </Box>
        </Box>
    )
}

export default Blog

import { Box, Center, Text } from "@chakra-ui/react"
import BillingForm from "components/BillingForm"
import FooterBlogCard from "components/FooterBlogCard"
import LandingPage from "components/LandingPage"
import RecentBlog from "components/RecentBlog"
import { StyledFooterTitle } from "components/StyledFooterTitle"

const Checkout = () => {
    return (
        <Box color="white">
            <LandingPage imgPath="assets/images/backgrounds/bg_3.jpg.webp" />
            <Box
                h={"fit-content"}
                w={"100vw"}
                color={"white"}
                bgImage={`url('assets/images/backgrounds/bg_4.jpg.webp')`}
                bgPos={"center"}
                bgSize={"cover"}
                bgAttachment={"fixed"}
                position="relative"
                py={'6rem'}
            >
                <Center
                    gap={"2rem"}
                    padding={"2rem"}
                >
                    <Box
                        bgColor={"black"}
                        w="70%"
                    >
                        <BillingForm />
                    </Box>
                    <Box>
                        <Box>
                            search
                        </Box>
                        <Box>
                            categories
                        </Box>
                        <Box>
                            <StyledFooterTitle>recent blog</StyledFooterTitle>
                            <FooterBlogCard
                                title="Even the all-powerful Pointing has no control about"
                                user="Admin"
                                date="Sept 15, 2018"
                                path="assets/images/food/dish-3.jpg.webp"
                            />
                            <FooterBlogCard
                                title="Even the all-powerful Pointing has no control about"
                                user="Admin"
                                date="Sept 15, 2018"
                                path="assets/images/food/dish-3.jpg.webp"
                            />
                            <FooterBlogCard
                                title="Even the all-powerful Pointing has no control about"
                                user="Admin"
                                date="Sept 15, 2018"
                                path="assets/images/food/dish-4.jpg.webp"
                            />
                        </Box>
                    </Box>
                </Center>
            </Box >
        </Box >
    )
}

export default Checkout

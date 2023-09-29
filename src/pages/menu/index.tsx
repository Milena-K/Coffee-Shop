import { Box } from "@chakra-ui/react"
import LandingPage from "components/LandingPage"
import MenuComponent from "components/Menu"
import OurProducts from "components/OurProducts"
import { discoverOurProductsMenu } from "./discover-our-products"


const Menu = () => {
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
                <MenuComponent />
                <Box
                    mt="12rem"
                >
                    <OurProducts menuData={discoverOurProductsMenu} />
                </Box>
            </Box >
        </Box>
    )
}

export default Menu

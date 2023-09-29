import { Box, Center } from "@chakra-ui/react"
import DataTabs from "components/DataTabs"
import LandingPage from "components/LandingPage"
import { mainDishData } from "components/Menu/main-dish-category-data"
import { drinksData } from "components/Menu/drinks-category-data"
import { dessertsData } from "components/Menu/desserts-category-data"
import { coffeeData } from "components/Menu/coffee-category-data"

const data = {
    "Coffee": coffeeData,
    "Main Dish": mainDishData,
    "Drinks": drinksData,
    "Desserts": dessertsData,
}

const Shop = () => {
    return (
        <Box color="white">
            <LandingPage imgPath="assets/images/backgrounds/bg_3.jpg.webp" />
            <Center
                h={"fit-content"}
                w={"100vw"}
                color={"white"}
                bgImage={`url('assets/images/backgrounds/bg_4.jpg.webp')`}
                bgPos={"center"}
                bgSize={"cover"}
                bgAttachment={"fixed"}
                position="relative"
            >
                <Box
                    padding="5rem"
                    maxW={"1000px"}
                >
                    <DataTabs columns={[1, 1, 4]} data={data} />
                </Box>
            </Center>
        </Box>
    )
}

export default Shop

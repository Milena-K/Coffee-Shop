import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react"
import MenuCategory from "components/MenuCategory"
import { starterData } from "./starter-category-data"
import { mainDishData } from "./main-dish-category-data"
import { dessertsData } from "./desserts-category-data"
import { drinksData } from "./drinks-category-data"

type Categories = {
    [name: string]: CategoryItem[]
}

const categories: Categories = {
    "starter": starterData,
    "main": mainDishData,
    "desserts": dessertsData,
    "drinks": drinksData,
}


const Menu = () => {
    const render = () => {
        const menu = []
        for (const [key, value] of Object.entries(categories)) {
            console.log(key)
            console.log(value)
            menu.push(<MenuCategory category={key} items={value} />)
        }
        return menu
    }
    return (
        <Center>
            <SimpleGrid
                marginY="5rem"
                w="90vw"
                maxW="1200px"
                gridGap="3rem"
                columns={[1, 1, 2]}
            >
                {
                    render()
                }
            </SimpleGrid>
        </Center>
    )
}

export default Menu

/* console.log(key) */

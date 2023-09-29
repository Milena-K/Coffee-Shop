import { Box, Flex, Text } from "@chakra-ui/react"
import MenuItem from "components/MenuItem"
import { FC } from "react"


type Props = {
    category: string
    items: CategoryItem[]
}

const MenuCategory: FC<Props> = ({ category, items }) => {
    return (
        <Box>
            <Text
                textTransform={"uppercase"}
                color={"white"}
                pb={"3rem"}
                fontSize={"2xl"}
            >{category}</Text>
            <Flex
                direction={"column"}
                gap={"1.5rem"}
            >
                {
                    items.map((item: CategoryItem, index) => (
                        <MenuItem
                            key={index}
                            image={item.imgPath}
                            name={item.name}
                            desc={item.desc}
                            price={item.price} />
                    ))
                }
            </Flex>
        </Box>
    )
}

export default MenuCategory

import { Box, Center, Input, Td, Text, Tr } from "@chakra-ui/react"
import { useAppContext } from "context"
import { ChangeEvent, FC, useState } from "react"

type Props = {
    item: CategoryItem
    quantity: number
}

const CartRow: FC<Props> = ({ item, quantity }) => {
    const [quantityLocal, setQuantity] = useState<number>(quantity)
    const { cart, setCart } = useAppContext()

    /*
    const changeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
        const qLocal = Number(e.target.value)
        setQuantity(qLocal)
        const newItem = {
            item,
            quantity: qLocal
        }
        const newCart = {}
        setCart([...cart, newItem])

    }
    */

    const removeItem = () => {
        if (cart) {
            const newCart = cart.filter((cartItem: CartItem) => cartItem.item.id !== item.id)
            setCart([...newCart])
        }
    }
    return (
        <Tr>
            <Td>
                <Box
                    border={"1px solid gray"}
                    p="0.3rem 0.5rem"
                    cursor={"pointer"}
                    onClick={() => removeItem()}
                > x
                </Box>
            </Td>
            <Td>
                <Center
                    margin="1rem"
                    gap={"4rem"}
                >
                    <Box
                        w="100px"
                        h="100px"
                        bgImage={`url('${item.imgPath}')`}
                        bgPos={"center"}
                        bgSize={"cover"}
                    />
                    <Box
                        flexGrow={1}
                        textAlign={"center"}
                    >
                        <Text
                            textTransform={"uppercase"}
                        >{item.name}</Text>
                        <Text
                            color="whiteAlpha.700"
                        >{item.desc}</Text>
                    </Box>
                </Center>
            </Td>
            <Td>{item.price}</Td>
            <Td>
                <Input
                    textAlign={"center"}
                    w="100%"
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    defaultValue={quantity}
                    _hover={{}}
                    color="yellow.dark"
                    rounded={"none"}
                    borderColor={"whiteAlpha.300"} />

            </Td>
            <Td>{'$' + (Number(item.price.slice(1)) * quantityLocal).toFixed(2)}</Td>
        </Tr>
    )
}

export default CartRow

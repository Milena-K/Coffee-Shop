import { Box, Flex, Text } from "@chakra-ui/react"
import CustomButton from "components/CustomButton"
import DiscoverMenu from "components/DiscoverMenu"
import { useAppContext } from "context"
import { useState } from "react"

const CartTotal = () => {
    const { cart } = useAppContext()
    const [discount, setDiscount] = useState<number>(3)

    const cartSubtotal = () => {
        var subtotal = 0
        for (let i = 0; i < cart.length; i++) {
            subtotal += Number(cart[i].item.price.slice(1))
        }
        return subtotal
    }

    const cartTotal = () => {
        if (cart.length > 0) {
            var total = cartSubtotal()
            total -= discount
            return total.toFixed(2)
        }
        return "0.00"
    }

    return (
        <Flex
            direction={"column"}
        >
            <Box
                w="220px"
                padding="1rem"
                border={"1px solid gray"}
                color="whiteAlpha.700"
                marginBottom={"1rem"}
            >
                <Flex
                    borderBottom={"1px solid gray"}
                    gap={"1rem"}
                    direction="column"
                    paddingBottom={"1rem"}
                >
                    <Text
                        textTransform={"uppercase"}
                        color={"white"}
                        letterSpacing={"1px"}
                        fontSize={"xl"}
                    >Cart totals</Text>
                    <Flex
                        gap={"1rem"}
                        justifyContent={"space-between"}
                    >
                        <Text>Subtotal</Text>
                        <Text>${cartSubtotal().toFixed(2)}</Text>
                    </Flex>
                    <Flex
                        justifyContent={"space-between"}
                        gap={"1rem"}
                    >
                        <Text>Delivery</Text>
                        <Text>$0.00</Text>
                    </Flex>
                    <Flex
                        justifyContent={"space-between"}
                        gap={"1rem"}
                    >
                        <Text>Discount</Text>
                        <Text>${cart.length > 0 ? discount.toFixed(2) : "0.00"}</Text>
                    </Flex>
                </Flex>
                <Flex
                    justifyContent={"space-between"}
                    paddingTop={"1rem"}
                    gap={"1rem"}
                >
                    <Text
                        textTransform={"uppercase"}
                    >Total</Text>
                    <Text
                        color={"yellow.dark"}
                    >${cartTotal()}</Text>
                </Flex>
            </Box>
            <CustomButton full text="Proceed to Checkout" />
        </Flex>
    )
}

export default CartTotal

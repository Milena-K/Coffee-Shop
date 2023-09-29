import { Box, Center, Flex, Input, Table, TableContainer, Tbody, Td, Text, Thead, Tr } from "@chakra-ui/react"
import CartRow from "components/CartRow"
import { AppContext, useAppContext } from "context"
import { useCallback, useContext, useEffect, useMemo, useState } from "react"

const CartTable = () => {
    const { cart, setCart } = useAppContext()

    const renderRows = () => {
        return cart.map((cartItem, index) => (
            <CartRow key={index.toString() + "cart"} item={cartItem.item} quantity={cartItem.quantity} />
        ))
    }

    useCallback(renderRows, [cart?.length])

    return (
        <TableContainer
            overflowX={"scroll"}
            w="100%"
        >
            <Table>
                <Thead
                    bgColor={"yellow.dark"}
                    color="white">
                    <Tr>
                        <Td></Td>
                        <Td
                            textAlign={"center"}
                        >Poduct</Td>
                        <Td
                            textAlign={"center"}
                        >Price</Td>
                        <Td
                            textAlign={"center"}
                            paddingX="4rem"
                        >Quantity</Td>
                        <Td
                            textAlign={"center"}
                        >Total</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        renderRows()
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default CartTable

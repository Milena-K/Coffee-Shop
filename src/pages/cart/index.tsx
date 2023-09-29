import { Box, Center, Flex } from "@chakra-ui/react"
import BestSellers from "components/BestSellers"
import CartTable from "components/CartTable"
import CartTotal from "components/CartTotal"
import LandingPage from "components/LandingPage"

const Cart = () => {
    return (
        <Box
            h={"fit-content"}
            w={"100vw"}
            color={"white"}
            bgImage={`url('assets/images/backgrounds/bg_4.jpg.webp')`}
            bgPos={"center"}
            bgSize={"cover"}
            bgAttachment={"fixed"}
            position="relative"
        >
            <LandingPage imgPath="assets/images/backgrounds/bg_3.jpg.webp" />
            <Center>
                <Flex
                    p="1rem"
                    maxW="1400px"
                    w={["95%", "95%", "80%"]}
                    flexDirection="column"
                >
                    <CartTable />
                    <Box
                        alignSelf="end"
                        w="fit-content"
                        marginTop={"2rem"}
                    >
                        <CartTotal />
                    </Box>
                </Flex>
            </Center>
            <BestSellers />
        </Box>
    )
}

export default Cart

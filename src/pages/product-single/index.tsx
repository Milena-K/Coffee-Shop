import { Box, Button, Center, Flex, Input, Select, SelectField, Text } from "@chakra-ui/react"
import LandingPage from "components/LandingPage"
import { useLocation, useParams } from "react-router-dom"
import { everyProduct } from "./every-product"
import { useEffect, useState } from "react"
import CustomButton from "components/CustomButton"
import { useAppContext } from "context"
import DiscoverMenu from "components/DiscoverMenu"
import BestSellers from "components/BestSellers"


type TParams = {
    id: string
}

const orderSize = ['Small', 'Medium', 'Large', 'Extra Large']

const Product = () => {
    const { id } = useParams<TParams>()
    const [product, setProduct] = useState<CategoryItem>()
    const [quantity, setQuantity] = useState<number>(1)
    const { cart, setCart } = useAppContext()
    console.log(product?.imgPath)

    const findProduct = () => {
        const prod = everyProduct.find((p) => p.id === id)
        console.log(prod)
        if (prod)
            setProduct(prod)
    }
    useEffect(() => {
        findProduct()
    }, [])

    const addToCart = () => {
        if (product && quantity) {
            const newItem: CartItem = {
                item: product,
                quantity,
            }
            setCart([...cart, newItem])
        }
    }

    return (
        <Box color="white">
            <LandingPage imgPath="/assets/images/backgrounds/bg_3.jpg.webp" />
            <Box
                paddingY="6rem"
                h={"fit-content"}
                w={"100vw"}
                bgImage="url('/assets/images/backgrounds/bg_4.jpg.webp')"
                bgPos={"center"}
                bgSize={"cover"}
                bgAttachment={"fixed"}
                position="relative"
            >
                <Center
                >
                    <Box
                        padding={["1rem", "1rem", "1rem", "3rem"]}
                        w={["100%", "600px", "800px", "1100px"]}
                    >
                        <Flex
                            direction={["column", "column", "column", "row"]}
                            gap={"3rem"}
                        >
                            <Box
                                bgImage={`url('/${product?.imgPath}')`}
                                bgPos={"top"}
                                bgSize={"cover"}
                                w={["100%", "100%", "100%", "450px"]}
                                h={["70vw", "70vw", "80vw", "450px"]}
                            />
                            <Box w={["100%", "100%", "100%", "50%"]}>
                                <Text
                                    fontSize={"4xl"}
                                    textTransform={"uppercase"}
                                >{product?.name}</Text>
                                <Text
                                    fontSize={"3xl"}
                                    mb="1rem"
                                    color={"yellow.500"}
                                >{product?.price}</Text>
                                <Box
                                    color={"whiteAlpha.700"}
                                    mb={"2rem"}
                                >
                                    <Text
                                        mb={"2rem"}
                                    >
                                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                    </Text>
                                    <Text>
                                        On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                                    </Text>
                                </Box>
                                <Box>
                                    <Select
                                        w="25%"
                                        maxW={"50%"}
                                        textAlign={"center"}
                                        rounded={"none"}
                                        color={"yellow.dark"}
                                        borderColor={"whiteAlpha.300"}
                                        mb={"1rem"}
                                    >
                                        {
                                            orderSize.map((size, i) => (
                                                <option
                                                    style={{
                                                        color: "#c49b63"
                                                    }}
                                                    value={size}
                                                    key={i.toString() + size}>
                                                    {size}
                                                </option>
                                            ))
                                        }
                                    </Select>
                                    <Flex
                                        mb={"1rem"}
                                        maxW={"50%"}
                                        gap={"0.5rem"}>
                                        <Button
                                            color={"yellow.dark"}
                                            rounded={"none"}
                                            backgroundColor={"transparent"}
                                            fontSize={"5xl"}
                                            fontWeight={"light"}
                                            border={"1px solid"}
                                            _hover={{}}
                                            pb="0.3rem"
                                            h={"3rem"}
                                            borderColor={"whiteAlpha.300"}
                                        > - </Button>
                                        <Input
                                            value={quantity}
                                            onChange={(e) => setQuantity(Number(e.target.value))}
                                            color={"yellow.dark"}
                                            rounded={"none"}
                                            backgroundColor={"transparent"}
                                            fontSize={"xl"}
                                            textAlign={"center"}
                                            border={"1px solid"}
                                            _hover={{}}
                                            h={"3rem"}
                                            borderColor={"whiteAlpha.300"}
                                        />
                                        <Button
                                            color={"yellow.dark"}
                                            rounded={"none"}
                                            backgroundColor={"transparent"}
                                            fontSize={"2xl"}
                                            fontWeight={"bolder"}
                                            border={"1px solid"}
                                            _hover={{}}
                                            h={"3rem"}
                                            borderColor={"whiteAlpha.300"}
                                        > + </Button>
                                    </Flex>
                                    <Box onClick={addToCart}>
                                        <CustomButton full text="Add to Cart" />
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Center>
                <BestSellers />
            </Box>
        </Box>
    )
}

export default Product

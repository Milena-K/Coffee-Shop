import { Box, Text } from "@chakra-ui/react"
import CustomButton from "components/CustomButton"
import { useAppContext } from "context"
import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"

type Props = {
    name: string
    text: string
    price: string
    path?: string
    id: string
}

const Card: FC<Props> = ({ path, name, text, price, id }) => {
    const { cart, setCart } = useAppContext()

    const addToCart = () => {
        const item: CartItem = {
            item: {
                imgPath: path ?? "",
                name,
                desc: text,
                price,
                id
            },
            quantity: 1
        }
        setCart([...cart, item])
    }


    return (
        <Box
            mt="2rem"
            h={["60vh", "50vh", "60vh"]}
            paddingX={"3%"}
        >
            <Box
                bgImg={`url('${path}')`}
                bgPos={"center"}
                bgSize={"cover"}
                height={["50%", "50%", "45%", "45%"]}
                width={["100%"]}
                margin="0 auto"
            />
            <Box
                display={["block", "block"]}
                textAlign={"center"}
                color="white"
            >
                <Link to={`/product-single/${id}`}><Text marginY="1rem">{name.toUpperCase()}</Text></Link>
                <Text color="whiteAlpha.500">{text}</Text>
                <Text marginY="1rem">{price}</Text>
                <Box onClick={addToCart}>
                    <CustomButton padding="1rem" full={false} text="Add to Cart" color="yellow.dark" />
                </Box>
            </Box>
        </Box>
    )
}

export default Card

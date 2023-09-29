import { Box, Center, Flex, Text } from "@chakra-ui/react"
import SlideInMotion from "components/SlideInMotion"
import { FC } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

type Path = {
    [key: string]: {
        text: string
    }
}

const paths: Path = {
    "menu": {
        text: "Our Menu",
    },
    "services": {
        text: "Services",
    },
    "blog": {
        text: "Blog",
    },
    "about": {
        text: "About Us",
    },
    "shop": {
        text: "Order Online",
    },
    "product-single": {
        text: "Product Detail",
    },
    "cart": {
        text: "Cart",
    },
    "checkout": {
        text: "checkout",
    },
    "contact": {
        text: "Contact Us",
    },
}

type Props = {
    imgPath: string
}


const LandingPage: FC<Props> = (props) => {
    const location = useLocation()
    const page = location.pathname.split('/')[1]
    return (
        <Center
            h={"80vh"}
            w={"100vw"}
            maxHeight={"750px"}
        >
            <Box
                h={"100%"}
                w={"100%"}
                bgImage={`linear-gradient(to bottom, rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url('${props.imgPath}')`}
                bgPos={"center"}
                bgSize={"cover"}
            />
            <Text
                textTransform={"uppercase"}
                position="absolute"
                textAlign={"center"}
                fontSize={"4xl"}
            >
                <SlideInMotion>
                    {paths[page].text}
                    <Flex
                        fontSize={"small"}
                        justifyContent={"center"}
                        textAlign={"center"}
                        color="whiteAlpha.600"
                        gap={".5rem"}
                    >
                        <Link
                            style={{
                                marginRight: "0.5rem",
                                color: "white",
                                borderBottom: "1px solid rgba(255,255,255, 0.8)"
                            }}
                            to="/">Home</Link>
                        <Text
                            borderColor={"whiteAlpha.700"}
                            borderBottom={"1px solid "}
                        >
                            {paths[page].text}
                        </Text>
                    </Flex>
                </SlideInMotion>
            </Text>
        </Center>
    )
}

export default LandingPage

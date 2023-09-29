import { Box, Center, Heading, Text } from "@chakra-ui/react";
import "./style.scss"
import Carousel from 'nuka-carousel';
import CustomButton from "components/CustomButton";
import { Link } from "react-router-dom";


const backgroundText = [
    {
        heading: "The best coffee testing experience",
        text: "A small river named Duden flows by their place and supplies it with the necessary regelialia",
        imageClass: "background--3"
    },
    {
        heading: "Amazing taste & beautiful place",
        text: "A small river named Duden flows by their place and supplies it with the necessary regelialia",
        imageClass: "background--2"
    },
    {
        heading: "Creamy hot and ready to serve",
        text: "A small river named Duden flows by their place and supplies it with the necessary regelialia",
        imageClass: "background--1"
    },
]

const Landing = () => {
    return (
        <Box
            width={"100vw"}
            className="landing" >
            <Carousel
                wrapAround={true}
                autoplay={true}
                autoplayInterval={4000}
                pauseOnHover={false}
                renderCenterLeftControls={null}
                renderCenterRightControls={null}
                animation="fade"
                speed={2000}
                defaultControlsConfig={{
                    pagingDotsClassName: "pagingDots",
                    pagingDotsStyle: {
                        fill: 'white',
                    }
                }}>
                {
                    backgroundText.map((background, index) => (
                        <Box className={`background ${background.imageClass}`} key={index}>
                            <Center textAlign="center" flexDirection="column" color="white" h="80vh" >
                                <Box px="5px" maxW="500px" w="100vw">
                                    <Heading
                                        fontFamily="Great Vibes, cursive"
                                        color="yellow.dark"
                                        as="h2">Welcome</Heading>
                                    <Heading
                                        as="h1"
                                        fontSize="4xl"
                                        fontWeight="semibold"
                                        letterSpacing="widest"
                                        textTransform="uppercase">{background.heading}</Heading>
                                    <Text fontSize="xl">{background.text}</Text>
                                    <Center gap="5px" mt="20px">
                                        <Link to="/order">
                                            <CustomButton text="Order Now" full={true} />
                                        </Link>
                                        <Link to="/menu">
                                            <CustomButton text="View Menu" full={false} color="white" />
                                        </Link>
                                    </Center>
                                </Box>
                            </Center>
                        </Box>
                    ))
                }
            </Carousel >
        </Box >
    )
}

export default Landing

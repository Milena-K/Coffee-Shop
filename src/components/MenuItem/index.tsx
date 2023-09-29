import { Box, Flex, Text } from "@chakra-ui/react"
import { FC } from "react"

type Props = {
    image: string
    name: string
    desc: string
    price: string
}

const MenuItem: FC<Props> = (props) => {
    return (
        <Flex
            gap="1rem"
        >
            <Box
                h={"60px"}
                w={"60px"}
                bgImage={`url('${props.image}')`}
                bgPos={"center"}
                bgSize={"cover"}
                borderRadius="50px"
            />
            <Box
                w="100%"
            >
                <Flex
                    w="100%"
                    alignItems={"center"}
                >
                    <Text
                        letterSpacing={"0.1rem"}
                        w={["100%", "100%", "max-content"]}
                        marginBottom={"1rem"}
                    >{props.name}</Text>
                    <Text
                        color="yellow.dark"
                        borderBottom={"1px dotted #c49b63"}
                        padding={0}
                        flexGrow={1}
                        alignItems={"end"}
                        h="fit-content"
                    />
                    <Text
                        bgColor={"black"}
                        w="fit-content"
                        color="yellow.dark"
                        pl="1.5rem"
                    >
                        {props.price}
                    </Text>
                </Flex>

                <Text
                    color="whiteAlpha.700"
                >{props.desc}</Text>

            </Box>
        </Flex>
    )
}

export default MenuItem

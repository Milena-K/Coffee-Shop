import { Box, Circle, Flex } from "@chakra-ui/react"

const numbers = [1, 2, 3, 4, 5]


const Paging = () => {
    return (
        <Flex
            color="yellow.dark"
            gap={["0", "0.4rem"]}
            margin={"4rem"}
        >
            <Circle
                size="2.5rem"
                border="1px solid"
                borderColor={"yellow.dark"}
                _hover={{
                    color: "white",
                    backgroundColor: "yellow.dark"
                }}
            >&lt;</Circle>
            {
                numbers.map((n, i) => (
                    <Circle
                        key={i}
                        size="2.5rem"
                        border="1px solid"
                        borderColor={"yellow.dark"}
                        _hover={{
                            color: "white",
                            backgroundColor: "yellow.dark"
                        }}
                    >{n}</Circle>
                ))
            }
            <Circle
                _hover={{
                    color: "white",
                    backgroundColor: "yellow.dark"
                }}
                size="2.5rem"
                border="1px solid"
                borderColor={"yellow.dark"}
            >&gt;</Circle>
        </Flex>
    )
}

export default Paging

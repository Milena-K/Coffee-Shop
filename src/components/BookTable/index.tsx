import { Box, Flex, Text } from "@chakra-ui/react"
import BookATable from "components/BookATable"

const BookTable = () => {
    return (
        <Flex
            bgColor="black"
            direction={["column", "column", "row"]}
        >
            <Box
                w={["100%", "100%", "50%"]}
            />
            <Box
                w={["100%", "100%", "50%"]}
                maxW="700px"
                mb={"3rem"}
                h="100%"
            >
                <Text
                    fontSize={"2xl"}
                    color={"white"}
                    pl={"1.5rem"}
                    pt={"4rem"}
                >Book a Table</Text>
                <BookATable bgColor="black" />
            </Box>
        </Flex>
    )
}

export default BookTable

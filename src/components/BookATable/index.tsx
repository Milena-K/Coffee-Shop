import { Box, Button, Flex, Input, Select, SelectField, Text, Textarea } from "@chakra-ui/react"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
    bgColor?: string
}

const BookATable: FC<Props> = ({ bgColor }) => {
    return (
        <Flex
            height="100%"
            direction="column"
            gap={15}
            padding={25}
            color="white"
            backgroundColor={bgColor ?? "yellow.dark"}
        >
            <Flex
                gap={15}
                direction={["column", "column", "row"]}>
                <Input
                    _placeholder={{ color: "inherit", fontSize: "small" }}
                    focusBorderColor="whiteAlpha.400"
                    borderColor="whiteAlpha.400"
                    variant='flushed'
                    placeholder='First Name' />
                <Input
                    _placeholder={{ color: "inherit", fontSize: "small" }}
                    focusBorderColor="whiteAlpha.400"
                    borderColor="whiteAlpha.400"
                    variant='flushed'
                    placeholder='Last Name' />
            </Flex>
            <Flex
                mt={15}
                direction={["column", "column", "row"]}
                gap={15}>
                <Input
                    type="date"
                    _placeholder={{ color: "inherit", fontSize: "small" }}
                    focusBorderColor="whiteAlpha.400"
                    borderColor="whiteAlpha.400"
                    variant='flushed'
                    style={{
                        colorScheme: 'dark'
                    }}
                    placeholder='Date' />

                <Input
                    type="time"
                    _placeholder={{ color: "inherit", fontSize: "small" }}
                    focusBorderColor="whiteAlpha.400"
                    borderColor="whiteAlpha.400"
                    variant='flushed'
                    style={{
                        colorScheme: 'dark'
                    }}
                    placeholder='Time' />

                <Input
                    _placeholder={{ color: "inherit", fontSize: "small" }}
                    focusBorderColor="whiteAlpha.400"
                    borderColor="whiteAlpha.400"
                    variant='flushed'
                    placeholder='Phone' />
            </Flex>
            <Flex
                mt={15}
                gap={15}
                direction={{ base: 'column', md: 'row', lg: 'row', xl: 'row' }}
                alignItems="flex-end">
                <Textarea
                    width={{ base: "100%", md: "50%", lg: "50%", xl: "50%" }}
                    flexGrow={1}
                    resize="vertical"
                    _placeholder={{ color: "inherit", fontSize: "small" }}
                    focusBorderColor="whiteAlpha.400"
                    borderColor="whiteAlpha.400"
                    variant='flushed'
                    placeholder='Message' />
                <Button
                    width={{ lg: "50%", xl: "50%" }}
                    alignSelf={"stretch"}
                    flexGrow={1}
                    rounded={0}
                    fontWeight="normal"
                    border={bgColor ? "1px solid #c49b63" : "black"}
                    bgColor={bgColor ? "yellow.dark" : "white"}
                    _hover={{
                        backgroundColor: "black",
                        color: bgColor ? "yellow.dark" : "white"
                    }}
                    fontSize="14px">Appointment</Button>
            </Flex >
        </Flex >
    )
}

export default BookATable

import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Select, Text } from "@chakra-ui/react"
import CustomButton from "components/CustomButton"
import { StyledInput } from "components/StyledInput"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    firstName: string
    lastName: string
    state: string
    streetAddr: string
    appartmentNum: string
    city: string
    postcode: number
    phone: string
    email: string
}

const BillingForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <Box padding={"2rem"} color="whiteAlpha.700">
            <Text
                color="white"
                mb={"2rem"}
                textTransform={"uppercase"}
                fontSize={"2xl"}
            >Billing details</Text>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex gap={"2rem"}>
                    <FormControl>
                        <FormLabel>First Name:</FormLabel>
                        <StyledInput rounded={"none"} {...register("firstName")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name:</FormLabel>
                        <StyledInput rounded={"none"} {...register("lastName")} />
                    </FormControl>
                </Flex>
                <FormControl my="1rem">
                    <FormLabel>State / Country</FormLabel>
                    <Select
                        rounded={"none"}>
                        <option
                            style={{
                                background: "black",
                                fontSize: "small",
                            }}
                            value='Germany'>Germany</option>
                        <option
                            style={{
                                background: "black",
                                fontSize: "small",
                            }}
                            value='Austria'>Austria</option>
                        <option
                            style={{
                                background: "black",
                                fontSize: "small",
                            }}
                            value='France'>France</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Street Address</FormLabel>
                    <Flex gap={"2rem"}>
                        <StyledInput placeholder={"House number and street name"} rounded={"none"} {...register("streetAddr")} />
                        <StyledInput placeholder={"Appartment, suite, unit etc. (optional)"} rounded={"none"} {...register("appartmentNum")} />
                    </Flex>
                </FormControl>
                <Flex gap={"2rem"} my="1rem">
                    <FormControl>
                        <FormLabel>Town / City</FormLabel>
                        <StyledInput rounded={"none"} {...register("city")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Postcode / ZIP*</FormLabel>
                        <StyledInput rounded={"none"} {...register("postcode")} />
                    </FormControl>
                </Flex>
                <Flex gap={"2rem"} my="1rem">
                    <FormControl>
                        <FormLabel>Phone</FormLabel>
                        <StyledInput rounded={"none"} {...register("phone")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <StyledInput rounded={"none"} {...register("email")} />
                    </FormControl>
                </Flex>
                <CustomButton text="Place an order" full type="submit" />
            </form>
        </Box>
    )
}

export default BillingForm

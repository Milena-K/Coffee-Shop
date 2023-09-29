import { Button } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

type Props = {
    text: string
    full: boolean
    color?: string
    padding?: string
    type?: "button" | "submit" | "reset"
}

const CustomButton: FC<Props> = (props) => {
    return (
        props.full ? (
            <Button
                type={props.type ?? "button"}
                borderRadius="0px"
                borderColor={props.color ?? "black"}
                px="20px"
                py="25px"
                padding={props.padding ?? "20px 25px"}
                variant="full"
                color={props.color ?? "black"}
                fontSize="sm"
                fontWeight="light"
                backgroundColor={props.color ?? "yellow.dark"}
            >{props.text}</Button>
        ) : (
            <Button
                type={props.type ?? "button"}
                borderRadius="0px"
                borderColor={props.color ?? "black"}
                px="20px"
                py="25px"
                padding={props.padding ?? "20px 25px"}
                variant="outline"
                fontWeight="light"
                color={props.color ?? "white"}
                _hover={{
                    color: "black",
                    backgroundColor: (props.color ?? "yellow.dark")
                }}
                fontSize="sm"
            >{props.text}</Button>
        )
    )
}

export default CustomButton

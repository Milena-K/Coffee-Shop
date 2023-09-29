import { Box, Center, Flex } from "@chakra-ui/react"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RotatingSquare from "components/RotatingSquare"
import { motion } from "framer-motion"

const imageNames = ["gallery-1", "gallery-2", "gallery-3", "gallery-4"]

const parentMotion = {
    initial: {
        borderColor: "#c49b63",
        opacity: 0,
        transform: "rotate(0deg)",
        transition: {
            duration: 0.6,
        },
    },
    hover: {
        opacity: 1,
        transform: "rotate(225deg)",
        transition: {
            duration: 0.6,
        },
    }
}

const iconMotion = {
    initial: {
        backgroundColor: "#c49b63",
        transform: "translate(-50%, -50%)"
    },
    hover: {
        transform: "translate(-50%, -50%)"
    }
}


const ImageRow = () => {
    return (
        <Flex
            w="100%"
            direction={["column", "column", "row"]}
        >
            {
                imageNames.map((name, index) => (
                    <Box
                        key={index.toString() + name}
                        position={"relative"}
                        bgImg={`url('/assets/images/people/${name}.jpg.webp')`}
                        bgPos={"center"}
                        bgSize={"cover"}
                        height="300px"
                        width={["100%", "100%", "25%"]}
                        margin="0 auto"
                    >
                        <motion.div
                            initial="initial"
                            whileHover="hover"
                            animate="initial"
                            variants={parentMotion}
                            className="box"
                            style={{
                                height: "300px",
                                position: "relative",
                                transformOrigin: "center"
                            }}
                        >
                            <motion.div
                                variants={iconMotion}
                                style={{
                                    border: "1px solid #c49b63",
                                    width: "fit-content",
                                    height: "fit-content",
                                    position: "absolute",
                                    transformOrigin: "center",
                                    top: "50%",
                                    left: "50%",
                                    padding: "1rem 1.3rem",
                                }}
                            >

                                <FontAwesomeIcon
                                    size="sm"
                                    className="faIcon"
                                    fontWeight="bolder"
                                    icon={faMagnifyingGlass}
                                    style={{
                                        color: "white",
                                        transform: "rotate(135deg)"
                                    }} />
                            </motion.div>
                        </motion.div>
                    </Box>
                ))
            }
        </Flex>
    )
}

export default ImageRow

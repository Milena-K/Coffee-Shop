import { HamburgerIcon, TriangleDownIcon } from "@chakra-ui/icons"
import { Box, Button, Center, Circle, Flex, Link, Text, useMediaQuery } from "@chakra-ui/react"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link as RLink } from "react-router-dom"
const menuButtons = ['Menu', 'Services', 'Blog', 'About']
const shopButtons = [
    {
        name: 'Shop',
        path: '/shop'
    },
    {
        name: 'Single Product',
        path: '/product-single/coffee2'
    },
    {
        name: 'Cart',
        path: '/cart'
    },
    {
        name: 'Checkout',
        path: '/checkout'
    }
]

const Header = () => {
    const [isLargerThan992] = useMediaQuery('(min-width: 992px)')
    const variants = isLargerThan992 ? { "show": {}, "hide": {} }
        : {
            "show": {
                height: "100%",
                opacity: 1,
            }, "hide": {
                height: "0px",
                opacity: 0,
            }
        }
    const innerMenuVariants = isLargerThan992 ? { "show": {}, "hide": {} }
        : {
            "show": {
                height: "200px",
                opacity: 1,
            }, "hide": {
                height: "0px",
                opacity: 0,
            }
        }
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenShop, setIsOpenShop] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMiddle, setIsMiddle] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > window.screen.height / 2) {
            setIsMiddle(true)
        } else {
            setIsMiddle(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            position={isMiddle ? "fixed" : ["relative", "relative", "relative", "absolute"]}
            zIndex="10"
            backgroundColor={isMiddle ? "gray.bg" : ["gray.bg", "gray.bg", "gray.bg", "transparent"]}
            color="white"
            w="100vw"
            borderBottom={!isMiddle && isLargerThan992 ? { md: "1px solid rgba(255,255,255,0.3)" } : {}}
        >
            <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                padding={["0.5rem 2rem", "0.5rem 2rem", "1rem 3rem"]}
                maxW="1140px"
                margin="0 auto"
            >
                <RLink to='/'>
                    <Box lineHeight={1}>
                        <Text
                            fontSize='2xl'
                            fontWeight='semibold'>COFFEE
                        </Text>
                        <Text
                            letterSpacing={4}
                            textAlign='center'
                            fontSize='small'
                            fontWeight='semibold'>BLEND</Text>
                    </Box>
                </RLink>
                {
                    isLargerThan992 ? (
                        <Flex
                            gap={"2rem"}
                            color='whiteAlpha.800'
                        >
                            <RLink
                                to={'/'}>
                                <Box
                                    display="block"
                                    _focus={{ color: 'yellow.dark' }}
                                    _hover={{ color: 'yellow.dark' }}
                                    textTransform={"uppercase"}
                                >
                                    Home
                                </Box>
                            </RLink>
                            {
                                menuButtons.map((name, index) => (
                                    <RLink
                                        key={index.toString() + name}
                                        to={'/' + name.toLowerCase()}>
                                        <Box
                                            display="block"
                                            _focus={{ color: 'yellow.dark' }}
                                            _hover={{ color: 'yellow.dark' }}
                                            textTransform={"uppercase"}
                                        >
                                            {name}
                                        </Box>
                                    </RLink>
                                ))
                            }
                            <Box
                                position={"relative"}
                            >
                                <Flex
                                    gap={"0.3rem"}
                                    cursor={"pointer"}
                                    alignItems={"center"}
                                    _focus={{ color: 'yellow.dark' }}
                                    _hover={{ color: 'yellow.dark' }}
                                    textTransform={"uppercase"}
                                    onClick={() => setIsOpenShop(!isOpenShop)}
                                >
                                    Shop <TriangleDownIcon fontSize={".5rem"} />
                                </Flex>
                                <AnimatePresence>
                                    {isOpenShop &&
                                        <motion.div
                                            layout
                                            style={isLargerThan992 ? {
                                                height: isOpenShop ? "200px" : "0px",
                                                position: 'absolute',
                                                top: "45px",
                                            } : {
                                                height: isOpenShop ? "200px" : "0px",
                                            }}
                                            exit="hide"
                                            variants={innerMenuVariants}
                                        >
                                            <Flex
                                                bgColor={["whiteAlpha.100", "whiteAlpha.100", "blackAlpha.700"]}
                                                w={["80%", "80%", "180px"]}
                                                p={"1rem"}
                                                gap={"1rem"}
                                                direction="column"
                                                justifyContent={"center"}
                                            >
                                                {shopButtons.map((btn, index) => (
                                                    <RLink
                                                        key={index.toString() + btn.name}
                                                        to={btn.path}>
                                                        <Box
                                                            display="block"
                                                            _focus={{ color: 'yellow.dark' }}
                                                            _hover={{ color: 'yellow.dark' }}
                                                            textTransform={"uppercase"} >
                                                            {btn.name}
                                                        </Box>
                                                    </RLink>
                                                ))}
                                            </Flex>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </Box>
                            <Box
                                _hover={{ color: 'yellow.dark' }}
                                w="100%"
                                textTransform={"uppercase"}
                            >
                                <RLink to="/contact">
                                    Contact
                                </RLink>
                            </Box>
                            <Flex
                                position="relative"
                                justifyContent={"start"}
                            >
                                <RLink to='/cart'>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </RLink>
                                <Circle
                                    px={1.5}
                                    py={0.5}
                                    fontSize={"small"}
                                    color="black"
                                    position={"absolute"}
                                    top="-0.5rem"
                                    right="-1rem"
                                    backgroundColor="orange.300">1</Circle>
                            </Flex>

                        </Flex>

                    ) : (
                        <Flex
                            gap={2}
                            color='whiteAlpha.800'
                            alignItems='center'
                            cursor="pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <HamburgerIcon
                                fontSize={25}
                            />
                            MENU
                        </Flex>

                    )
                }
            </Flex>
            <AnimatePresence>
                {isOpen &&
                    <LayoutGroup>
                        <motion.div
                            layout
                            layoutRoot
                            style={{ height: isOpen ? "100%" : "0px" }}
                            initial="hide"
                            animate="show"
                            exit="hide"
                            variants={variants}
                        >

                            <Flex
                                paddingLeft={"3.5rem"}
                                pt={"2rem"}
                                direction="column"
                                height={"100%"}
                            >
                                {
                                    menuButtons.map((name, index) => (
                                        <RLink
                                            key={index}
                                            to={'/' + name.toLowerCase()}>
                                            <Box
                                                display="block"
                                                pb="2rem"
                                                _focus={{ color: 'yellow.dark' }}
                                                _hover={{ color: 'yellow.dark' }}
                                                textTransform={"uppercase"}
                                            >
                                                {name}
                                            </Box>
                                        </RLink>
                                    ))
                                }

                                <Link
                                    display="flex"
                                    gap=".5rem"
                                    alignItems={"center"}
                                    _focus={{ color: 'yellow.dark' }}
                                    _hover={{ color: 'yellow.dark' }}
                                    textTransform={"uppercase"}
                                    onClick={() => setIsOpenShop(!isOpenShop)}
                                >
                                    Shop <TriangleDownIcon fontSize={".5rem"} />
                                </Link>
                                <AnimatePresence>
                                    {isOpenShop &&
                                        <motion.div
                                            layout
                                            style={{ height: isOpenShop ? "200px" : "0px" }}
                                            exit="hide"
                                            variants={innerMenuVariants}
                                        >
                                            <Flex
                                                bgColor={"whiteAlpha.100"}
                                                w={"80%"}
                                                p={"1rem"}
                                                gap={"1rem"}
                                                direction="column"
                                                justifyContent={"center"}
                                            >
                                                {shopButtons.map((btn, index) => (
                                                    <RLink
                                                        key={index.toString() + btn.name}
                                                        to={btn.path}>
                                                        <Box
                                                            display="block"
                                                            _focus={{ color: 'yellow.dark' }}
                                                            _hover={{ color: 'yellow.dark' }}
                                                            textTransform={"uppercase"} >
                                                            {btn.name}
                                                        </Box>
                                                    </RLink>
                                                ))}
                                            </Flex>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                                <Link
                                    _hover={{ color: 'yellow.dark' }}
                                    w="100%"
                                    pb={"2rem"}
                                    pt={"2rem"}
                                    textTransform={"uppercase"}
                                    href="/contact"
                                >
                                    Contact
                                </Link>
                                <Flex
                                    mb="2rem"
                                    justifyContent='space-between'>
                                    <RLink to='/cart'> <FontAwesomeIcon icon={faCartShopping} /></RLink>
                                    <Circle
                                        px={3}
                                        py={1}
                                        mr="3rem"
                                        color="black"
                                        backgroundColor="yellow.dark">1</Circle>
                                </Flex>
                            </Flex>
                        </motion.div >
                    </LayoutGroup>
                }
            </AnimatePresence>
        </Box >
    )
}

export default Header

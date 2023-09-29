import { Box, Center, Flex, SimpleGrid, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import Card from "components/Card"
import { FC } from "react"

type Props = {
    data: Record<string, CategoryItem[]>
    columns: number[]
}

const DataTabs: FC<Props> = ({ data, columns }) => {
    return (
        <Tabs position="relative" variant="unstyled">
            <TabList
                flexDirection={["column", "column", "row"]}
                alignItems={"center"}
                justifyContent={"center"}
            >
                {Object.keys(data).map((tab, index) => (
                    <Tab
                        width={["100%", "100%", "fit-content"]}
                        maxW={"555px"}
                        fontSize={"large"}
                        borderBottom={"1px solid"}
                        color={"yellow.dark"}
                        mr={"1rem"}
                        p={"1rem"}
                        _selected={{
                            backgroundColor: "yellow.dark",
                            color: "black"
                        }}
                        _hover={{
                            backgroundColor: "yellow.dark",
                            color: "black"
                        }}
                        key={index.toString() + 'tab'}
                    >{tab}</Tab>
                ))}
            </TabList>

            <TabPanels>
                {Object.keys(data).map((tab, i) => (
                    <TabPanel p={4} key={i.toString() + 'panel'}>
                        <Center>
                            <Center
                                mb={"2rem"}
                                maxW={"1000px"}
                                flexDirection={["column", "column", "row"]}
                            >
                                <SimpleGrid
                                    columns={columns}
                                    alignItems={"stretch"}
                                >
                                    {(data[tab]).map((t, i) => (
                                        <Card
                                            key={i.toString() + 'data'}
                                            path={t.imgPath}
                                            name={t.name}
                                            text={t.desc}
                                            id={t.id}
                                            price={t.price} />
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Center>
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    )
}

export default DataTabs

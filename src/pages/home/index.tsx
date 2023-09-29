import { Box } from "@chakra-ui/react"
import Landing from "components/Landing"
import Info from "components/Info"
import DiscoverStory from "components/DiscoverStory"
import ServicesBelowDiscover from "components/SevicesBelowDiscover"
import DiscoverMenu from "components/DiscoverMenu"
import Numbers from "components/Numbers"
import BestSellers from "components/BestSellers"
import ImageRow from "components/ImageRow"
import OurProducts from "components/OurProducts"
import Testimonials from "components/Testimonials"
import RecentBlog from "components/RecentBlog"
import BookTable from "components/BookTable"
import Footer from "components/Footer"
import { menuData } from "components/OurProducts/menuData"

const imgs = [
    "assets/images/food/dish-1.jpg.webp",
    "assets/images/food/dish-2.jpg.webp",
    "assets/images/food/dish-3.jpg.webp",
]

const Home = () => {
    return (
        <Box>
            <Landing />
            <Info />
            <DiscoverStory />
            <ServicesBelowDiscover />
            <DiscoverMenu />
            <Numbers />
            <BestSellers />
            <ImageRow />
            <OurProducts menuData={menuData} />
            <Testimonials />
            <RecentBlog imgs={imgs} />
            <BookTable />
        </Box>
    )
}

export default Home

import { Box } from "@chakra-ui/react"
import DiscoverMenu from "components/DiscoverMenu"
import DiscoverStory from "components/DiscoverStory"
import LandingPage from "components/LandingPage"
import Numbers from "components/Numbers"
import Testimonials from "components/Testimonials"

const About = () => {
    return (
        <Box color="white">
            <LandingPage imgPath="assets/images/backgrounds/bg_3.jpg.webp" />
            <DiscoverStory />
            <Testimonials />
            <DiscoverMenu />
            <Numbers />
        </Box>
    )
}

export default About

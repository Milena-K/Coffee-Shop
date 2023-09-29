import { Box } from "@chakra-ui/react"
import LandingPage from "components/LandingPage"
import ServicesBelowDiscover from "components/SevicesBelowDiscover"

const Services = () => {
    return (
        <Box color="white">
            <LandingPage imgPath="assets/images/backgrounds/bg_3.jpg.webp" />
            <ServicesBelowDiscover />
        </Box>
    )
}

export default Services

import "index.css";
import { theme } from "./theme"
import "./App.scss";
import { PageRoutes } from "./routes"
import {
    createBrowserRouter,
    BrowserRouter,
    Routes,
    Route,
    RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "components/Header";
import Footer from "components/Footer";
import { AppContextProvider } from "context";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <div className="App">
                <AppContextProvider>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            {PageRoutes.map((route, idx) => (
                                <Route {...route} key={idx} />
                            ))}
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </AppContextProvider>
            </div>
        </ChakraProvider >
    );
}

export default App;

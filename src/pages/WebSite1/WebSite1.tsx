import {Footer} from "./section/Footer";
import {Header} from "./section/Header";
import {News} from "./section/News";
import {Container} from "@mui/material";
import {Performar} from "./section/Performar";

export const WebSite1 = () => {
    return (
        <>
            <Header/>
            <Container maxWidth="lg">
                <News/>
                <Performar/>
            </Container>
            <Footer/>
        </>
    )
}
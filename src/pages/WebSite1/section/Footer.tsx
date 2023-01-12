import {Container, Typography} from "@mui/material";

export const Footer = () => {
    return (
        <Container maxWidth={false} sx={{
            height: "60px",
            borderTop: "1px solid #ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Typography>Copyright © Example All Right Reserved.</Typography>
        </Container>
    )
}
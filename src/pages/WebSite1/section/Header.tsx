import {Box, Container, Typography} from "@mui/material";
import logo from './../../../logo.svg';

const MenuItem = (name: string): JSX.Element => (
    <Box
        sx={{
            backgroundColor: "pink",
            lineHeight: "100px",
            width: 150,
            height: 40,
            textAlign: "center",
            fontWeight: "bold",
        }}>
        <Typography sx={({palette}) => { return {
            backgroundColor: "yellow",
            pt:1,
            pb: 1,
            position: "relative",
            height: 40,
            fontWeight:"bold",
            '::after': {
                backgroundColor: palette.primary.main,
                bottom: 0,
                content: '""',
                display: "block",
                height: "2px",
                left: 0,
                position: "absolute",
                transition: ".8s all",
                width: 0,
            },
            ":hover::after": {
                width: "100%",
            }
        }
        }}>
            {name}
        </Typography>
    </Box>
)


export const Header = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{
                backgroundColor: "yellow",
                height: "100px",
                display: "flex"
            }}>
                <Box>
                    <img
                        alt="logo"
                        src={logo}
                        style={{
                            height: "100px",
                            width: "200px",
                            objectFit: "cover"
                        }}
                    ></img>
                </Box>
                <Box
                    sx={{
                        backgroundColor: "skyblue",
                        position: "relative",
                        ml: "auto",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {MenuItem("ホームページ")}
                    {MenuItem("会社概要")}
                    {MenuItem("ブログ")}
                    {MenuItem("お問い合わせ")}
                </Box>
            </Container>
            <Container maxWidth={false} sx={{
                backgroundColor: "red",
                height: "530px"
            }}>
            </Container>
        </>
    )
}
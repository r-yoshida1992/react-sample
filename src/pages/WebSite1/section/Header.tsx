import {Box, Container, Typography} from "@mui/material";

export const Header = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{
                backgroundColor: "yellow",
                height: "100px",
                display: "flex"
            }}>
                <Box
                    sx={{
                        backgroundColor: "blue",
                        height: "100px",
                        width: "200px"
                    }}
                >
                    Logo
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
                    <Typography
                        sx={{
                            backgroundColor: "pink",
                            lineHeight: "100px",
                            mx: 1,
                            width: 150,
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        ホームページ
                    </Typography>
                    <Typography
                        sx={{
                            backgroundColor: "pink",
                            lineHeight: "100px",
                            mx: 1,
                            width: 150,
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        会社概要
                    </Typography>
                    <Typography
                        sx={{
                            backgroundColor: "pink",
                            lineHeight: "100px",
                            mx: 1,
                            width: 150,
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        ブログ
                    </Typography>
                    <Typography
                        sx={{
                            backgroundColor: "pink",
                            lineHeight: "100px",
                            mx: 1,
                            width: 150,
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        お問い合わせ
                    </Typography>
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
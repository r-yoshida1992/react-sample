import {Grid, Typography} from "@mui/material";

export const News = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography sx={{
                        mt: 4,
                        pb: 2,
                        fontWeight: "bold",
                        borderBottom: "1px solid #ddd"
                    }}>News</Typography>
                </Grid>
                <Grid item xs={4} sx={{
                    backgroundColor: "pink",
                    height: 200,
                }}></Grid>
                <Grid item xs={4} sx={{
                    backgroundColor: "hotpink",
                    height: 200,
                }}></Grid>
                <Grid item xs={4} sx={{
                    backgroundColor: "deeppink",
                    height: 200,
                }}></Grid>
            </Grid>
        </>
    )
}
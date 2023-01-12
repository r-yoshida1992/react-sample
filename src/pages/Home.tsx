import {Box, Button, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import {route} from "../constants/route";

const JsxElem = {
    item: (label: string, to: string) => {
        return (
            <Grid item xs={3} p={2} key={to}>
                <Button
                    variant="outlined" // アウトライン
                    disableElevation // 影の削除
                    fullWidth // 幅をいっぱいに使う
                    color="info"
                    component={Link}
                    to={to}
                    sx={{
                        height: 100, // 高さの指定
                        textTransform: "none", // 小文字で出力できるようにする
                    }}
                >
                    {label}
                </Button>
            </Grid>
        )
    }
}

export const Home = () => {
    return (
        <Box>
            <Grid container p={2}>
                {Object.keys(route).filter(k => route[k].label !== "")
                    .map(k => JsxElem.item(route[k].label, route[k].url))}
            </Grid>
        </Box>
    )
}
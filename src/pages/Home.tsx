import {Box, Button, Card, Grid, Link} from "@mui/material";
import {BackButton} from "../component/BackButton";

const JsxElem = {
    item: (value: string) => {
        return (
            <Grid xs={3} p={2}>
                <Button
                    variant="contained" // アウトライン
                    disableElevation // 影の削除
                    fullWidth // 幅をいっぱいに使う
                    sx={{
                        height: 100, // 高さの指定
                        textTransform: "none", // 小文字で出力できるようにする
                    }}
                >
                    {value}
                </Button>
            </Grid>
        )
    }
}

export const Home = () => {
    return (
        <Box>
            <Grid container p={2}>
                {JsxElem.item("hello")}
                {JsxElem.item("hello")}
                {JsxElem.item("hello")}
                {JsxElem.item("hello")}
                {JsxElem.item("hello")}
                {JsxElem.item("hello")}
                {JsxElem.item("hello")}
                {JsxElem.item("hello")}
                {JsxElem.item("hello")}
                {JsxElem.item("hello")}
                {JsxElem.item("hello")}
                {JsxElem.item("hello")}
            </Grid>
        </Box>
    )
}
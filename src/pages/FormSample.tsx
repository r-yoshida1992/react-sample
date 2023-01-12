import {Box, Grid, Stack, TextField, Typography} from "@mui/material";

export const FormSample = () => {
    return (
        <Box sx={{
            display: "flex",
            height: "100vh", // 高さを画面いっぱいにする
            justifyContent: "center", // 左右中央
            alignItems: "center", // 上下中央
        }}>
            <Grid sx={
                ({palette}) => ({
                    p: 2,
                    width: 400,
                    borderStyle: "solid",
                    borderRadius: 2,
                })}>
                <Typography fontWeight="bolder">入力フォーム</Typography>
                <TextField sx={{m: 1}} label="TextField" variant="outlined"/>
                <TextField sx={{m: 1}} label="TextField" variant="filled"/>
                <TextField sx={{m: 1}} label="TextField" variant="standard"/>
                <TextField
                    multiline
                    sx={{m: 1}}
                    label="TextField Multiline"
                    rows={3}
                    maxRows={4}
                />
                <Stack component="form" noValidate spacing={3}>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        color="warning"
                        sx={{width: 220}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="time"
                        label="Alarm clock"
                        type="time"
                        defaultValue="07:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                        sx={{width: 150}}
                    />
                    <TextField
                        id="datetime-local"
                        label="Next appointment"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        sx={{width: 250}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Stack>
            </Grid>
        </Box>
    )
}
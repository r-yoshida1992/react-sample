import {Box, Card, CardContent, CardHeader} from "@mui/material";

export const CardSample = () =>{
    return (
        <Box p={2} width={200}>
            <Card>
                <CardHeader title="CardTitle"/>
                <CardContent>Content</CardContent>
            </Card>
        </Box>
    )
}
import {Button} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link} from "react-router-dom";

/**
 * 戻るボタン
 */
export const BackButton = () => {
    return (
        <Button
            variant="outlined"
            disableElevation
            sx={{
                position: "fixed",
                bottom: 10,
                left: 10,
                borderRadius: 13,
                width: 100,
                height: 100,
                textAlign: "center",
            }}
            component={Link}
            to="/"
        >
            <ArrowBackIosNewIcon
                sx={{
                    fontSize: 60,
                }}
            />
        </Button>
    )
}
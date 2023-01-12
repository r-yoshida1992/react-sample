import {Button} from '@mui/material';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import {useContext} from "react";
import {ColorModeContext} from "../context/ColorModeContext";

/**
 * テーマ切り替えボタン
 */
export const ChangeThemeButton = () => {
    const colorMode = useContext(ColorModeContext);
    return (
        <Button
            id="back-button"
            variant="outlined"
            disableElevation
            color="warning"
            sx={{
                position: "fixed",
                bottom: 20,
                right: 20,
                borderRadius: 13,
                width: 100,
                height: 100,
                textAlign: "center",
            }}
            onClick={colorMode.toggleColorMode}
        >
            <InvertColorsIcon
                sx={{
                    fontSize: 60,
                }}
            />
        </Button>
    )
}
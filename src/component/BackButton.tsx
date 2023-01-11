import {Button} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link} from "react-router-dom";
import React, {useCallback, useEffect} from "react";

/**
 * 戻るボタン
 */
export const BackButton = () => {
    // ctrl + ←で戻るボタンを動かす
    const backAction = useCallback((event: any) => {
        if (event.ctrlKey) {
            if (event.code === "ArrowLeft") {
                document.getElementById('back-button')?.click();
            }
        }
    }, []);
    useEffect(() => {
        document.addEventListener("keydown", backAction, false);
    }, []);
    return (
        <Button
            id="back-button"
            variant="outlined"
            disableElevation
            color="warning"
            sx={{
                position: "fixed",
                bottom: 20,
                left: 20,
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
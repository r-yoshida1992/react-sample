import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Container} from '@mui/system';
import FirstPage from "./pages/FirstPage";
import {Home} from "./pages/Home";
import {BackButton} from "./component/BackButton";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {route} from "./constants/route";
import {CardSample} from "./pages/CardSample";

export const App = () => {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)') // ダークモードを判定する
    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light'
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/> {/* muiのリセットcss */}
            <Container
                maxWidth={false} // 最大幅の制限なし
                disableGutters // 左右の余白を除去
            >
                <Routes> {/* ルート情報の設定 */}
                    <Route path={route.index.url} element={<Home/>}/>
                    <Route path={route.firstPage.url} element={<FirstPage/>}/>
                    <Route path={route.cardSample.url} element={<CardSample/>}/>
                </Routes>
                <BackButton/>
            </Container>
        </ThemeProvider>
    );
};

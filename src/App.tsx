import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import FirstPage from "./pages/FirstPage";
import {Home} from "./pages/Home";
import {BackButton} from "./component/BackButton";
import {createTheme, CssBaseline, PaletteMode, ThemeProvider, useMediaQuery} from "@mui/material";
import {route} from "./constants/route";
import {CardSample} from "./pages/CardSample";
import {ChangeThemeButton} from "./component/ChangeThemeButton";
import {ColorModeContext} from "./context/ColorModeContext";
import {PostSample} from "./pages/PostSample";
import {FormSample} from "./pages/FormSample";
import {AceEditorSample} from "./pages/AceEditorSample";

export const App = () => {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)') // ダークモードを判定する
    const [mode, setMode] = useState(isDarkMode ? "dark" : "light" as PaletteMode);
    const theme = createTheme({
        palette: {
            mode,
        }
    })
    const colorMode = {
        toggleColorMode: () => {
            setMode(mode => mode === 'light' ? 'dark' : 'light');
        },
    };
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/> {/* muiのリセットcss */}
                <Routes> {/* ルート情報の設定 */}
                    <Route path={route.index.url} element={<Home/>}/>
                    <Route path={route.firstPage.url} element={<FirstPage/>}/>
                    <Route path={route.index} element={<Home/>}/>
                    <Route path={route.firstPage} element={<FirstPage/>}/>
                    <Route path={route.postSample} element={<PostSample/>}/>
                    <Route path={route.aceEditor} element={<AceEditorSample/>}/>
                </Routes>
                <BackButton/>
                <ChangeThemeButton/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

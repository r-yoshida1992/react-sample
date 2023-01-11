import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Container} from '@mui/system';
import './App.css';
import FirstPage from "./pages/FirstPage";
import {Home} from "./pages/Home";
import {BackButton} from "./component/BackButton";

export const App = () => {
    return (
        <Container
            maxWidth={false} // 最大幅の制限なし
            disableGutters // 左右の余白を除去
            sx={{
                backgroundColor: "#eee",
            }}
        >
            <Routes> {/* ルート情報の設定 */}
                <Route path="/" element={<Home/>}/>
                <Route path="/firstpage" element={<FirstPage/>}/>
            </Routes>
            <BackButton/>
        </Container>
    );
};

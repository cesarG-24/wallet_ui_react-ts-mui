import React, {lazy, Suspense} from 'react';
import {theme} from "./Theme";
import {ThemeProvider} from "@mui/material";
import {Navigate, Route, Routes} from "react-router-dom";

const Wallet = lazy(() => import('./pages/Wallet'))
const OverView = lazy(() => import('./pages/OverView'))
const YourCard = lazy(() => import('./pages/YourCard'))
const Balance = lazy(() => import('./pages/Balance'))

function App() {


    return (
        <ThemeProvider theme={theme}>
            <Suspense fallback={"Loading..."}>
                <Routes>
                    <Route path="/" element={<Navigate to="/wallet"/>}/>
                    <Route path="/" element={<Navigate to="/yourCard"/>}/>
                    <Route path="/wallet" element={<Wallet/>}/>
                    <Route path="/overView" element={<OverView/>}/>
                    <Route path="/yourCard" element={<YourCard/>}/>
                    <Route path="/balance" element={<Balance/>}/>
                </Routes>
            </Suspense>
        </ThemeProvider>
    );
}

export default App;

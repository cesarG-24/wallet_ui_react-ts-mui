import React from 'react';
import {Wallet} from "./pages/Wallet";
import {theme} from "./Theme";
import {ThemeProvider} from "@mui/material";


function App() {
    return (
        <ThemeProvider theme={theme}>


            <Wallet/>

        </ThemeProvider>
    );
}

export default App;

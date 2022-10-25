import {createTheme} from "@mui/material";
import {deepPurple} from "@mui/material/colors";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#F9F9F9/80%',
        },
        secondary: {
            main: deepPurple[200],
        },
    }
});
import {useState} from "react";
import {Box, Drawer, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {Lists} from "../Lists";


export const MenuBox = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open)


    return (
        <Box sx={{
            display: {xl: 'none', xs: 'block'},
            padding: '10px',
            maxWidth: 100,
        }}>
            <IconButton
                edge='start'
                aria-label='menu'
                onClick={() => handleOpen()}

            >
                <Drawer sx={{
                    maxWidth: '20px', width: '50%',
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#fff',
                    },
                }}
                        anchor='left'
                        open={open}
                >
                    <Lists/>
                </Drawer>
                <MenuIcon sx={{color: '#000',}}/>
            </IconButton>
        </Box>

    )
}

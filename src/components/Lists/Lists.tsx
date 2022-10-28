import React from 'react'
import {Box, Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BarChartIcon from '@mui/icons-material/BarChart';


export const Lists = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            overflow: 'wrap',
            maxWidth: '100px', width: '100%',
        }}>
            <List component='nav'>
                <NavLink to="/wallet" style={{textDecoration: 'none',}}>
                    <ListItemButton sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        overflow: 'wrap',
                        maxWidth: '100px', width: '100%',
                    }}
                    >
                        <ListItemIcon>
                            <CreditCardIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Card' secondary='State, transfers, payments'/>
                    </ListItemButton>
                </NavLink>

                <NavLink to="/balance" style={{textDecoration: 'none',}}>
                    <ListItemButton sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        overflow: 'wrap',
                        maxWidth: '100px', width: '100%',
                    }}>
                        <ListItemIcon>
                            <AccountBalanceIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Balance' secondary='State, transfers, payments'/>
                    </ListItemButton>
                </NavLink>

                <NavLink to="/overView" style={{textDecoration: 'none',}}>
                    <ListItemButton sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        overflow: 'wrap',
                        maxWidth: '100px', width: '100%',
                    }}>
                        <ListItemIcon>
                            <BarChartIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Over View' secondary='statistics, recurring payments'/>
                    </ListItemButton>
                </NavLink>
                <Divider/>
            </List>
        </Box>)
}
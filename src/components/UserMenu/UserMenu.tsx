import React from 'react'
import {Box, Button, Card} from "@mui/material";

import {IconBtn} from "../IconBtn";
import avatarGirl1 from '../../assets/icons/avatarGirl1.svg';
import keyboardDown from "../../assets/icons/keyboardDown.svg";


export const UserMenu = () => {

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '305px',
            background: '#F9F9F9',
            border: '0',
            borderRadius: '16px',
            boxShadow: 0,
            padding: '16px',
        }}>
            <Box sx={{
                width: '250px'
            }}>
                <IconBtn
                    title='Leonardo'
                    subTitle='leonardocc@gmail.com'
                    iconImg={avatarGirl1}
                    btnBgColor='transparent'
                    btnInactive={true}
                />
            </Box>

            <Button>
                <img src={keyboardDown} alt=""/>
            </Button>

        </Card>
    )
}
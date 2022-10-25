import React from 'react'
import {Box} from "@mui/material";

import profilePic from '../../assets/icons/profilePic.svg'
import menu from '../../assets/icons/menuIcon.svg'
import searchIcon from '../../assets/icons/search-normal.svg'
import cartIcon from '../../assets/icons/cartIcon.svg'
import calendarIcon from '../../assets/icons/calendarIcon.svg'
import settingIcon from '../../assets/icons/settingIcon.svg'
import switchIcon from '../../assets/icons/switchIcon.svg'
import vectorMenu1 from '../../assets/icons/vectorMenu1.svg'


export const Menu = () => {

    return (
        <>
            <Box position='static' sx={{

                border: 0,
                borderRadius: 0,
                boxShadow: 0,
                filter: 'drop-shadow(0px 12px 50px rgba(0, 0, 0, 0.04))',
                backgroundColor: '#FFFFFF',
                backgroundImage: `url(${vectorMenu1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 102px ',
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                maxWidth: '95px',
                width: '100%',
                gap: 7,
            }}>


                {/*Menu*/}
                <img width='40' height='40' src={profilePic}/>

                <Box sx={{
                    display: 'flex',
                    flexDirection: "column",
                    // height: ,
                    gap: 58,
                }}>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: "column",
                        // height: '192',
                        gap:4,
                    }}>
                        <img width='24' height='24' src={menu}/>
                        <img width='24' height='24' src={searchIcon}/>
                        <img width='24' height='24' src={cartIcon}/>
                        <img width='24' height='24' src={calendarIcon}/>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: "column",
                        gap: '32px',

                    }}>
                        <img width='24' height='24' src={settingIcon}/>
                        <img width='24' height='24' src={switchIcon}/>

                    </Box>

                </Box>


            </Box>

        </>

    )
}
import React from 'react'
import {Box, Link, Typography} from "@mui/material";
import {Btn} from "../Button";

interface Properties {
    readonly title?: string | number;
    readonly subTitle?: string;
    readonly txt?: string | number | any;
    readonly iconImg?: string;
    readonly amount?: string | number;
    readonly btnText?: string | number | any;
    readonly btnBgColor?: string | any;
    readonly btnInactive?: boolean;

}


export const IconBtn = (props: Properties) => {
    const {
        title = '',
        subTitle,
        txt,
        iconImg,
        amount,
        btnText,
        btnBgColor,
        btnInactive,
        ...rest
    } = props;


    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }} {...rest}>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '16px',
                    alignItems: 'center',
                    alignContent: 'center',
                    // mr: "80px",
                }}>
                    <Box sx={{minWidth: '40px'}}>
                        <img src={iconImg} alt=""/>
                    </Box>
                    <Box>
                        <Typography sx={{
                            fontSize: '16px',
                            fontWeight: '600',
                            mt: '20px',
                            lineHeight: '8px'
                        }}>
                            {title}
                        </Typography>

                        <Typography sx={{
                            color: '#1E2029',
                            opacity: 0.6,
                            fontSize: '12px',
                            fontWeight: '500',
                            mt: '14px',
                            mb: '10px',
                        }}>
                            {subTitle}
                        </Typography>

                        <Link sx={{
                            color: '#9664FF',
                            opacity: 0.6,
                            fontSize: '16px',
                            fontWeight: '600',
                        }}>
                            {txt}
                        </Link>

                    </Box>
                </Box>

                <Typography sx={{mr: '50px'}}>{amount}</Typography>

                <Btn btnBgColor={btnBgColor} disabled={btnInactive}>{btnText}</Btn>

            </Box>

        </>
    )
}
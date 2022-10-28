import React from 'react'
import {Box, Button as MuiButton, ButtonProps, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

interface Properties extends ButtonProps {
    readonly btnBgColor?: 'purple' | 'transparent' | 'borders' | 'roundWhite' | 'lightPurple2' | 'lightPurple' | 'black';
    readonly disabled?: boolean;
    readonly btnImgIcon?: string | any;
    readonly btnIconDisplay?: string | any;
}

const Button = styled(MuiButton)<Properties>((props: Properties) => {


    switch (props.btnBgColor) {
        case  'black':
            return {
                borderRadius: '16px',
                fontSize: '1px',
                background: '#000000',
                color: 'white',
                padding: '15px ',
                minWidth: '112px',
                width: '143.96px',
                '&:hover': {
                    background: '#9d71fa',
                    boxShadow: 'none',
                },
                '&:active': {
                    boxShadow: 'none',
                    backgroundColor: '#3c52b2',
                },
            }
        case  'purple':
            return {
                borderRadius: '16px',
                background: 'linear-gradient(180deg, #9664FF 0%, #854EF9 100%)',
                color: 'white',
                minWidth: '112px',
                maxHeight: '40px',
                '&:hover': {
                    background: 'white',
                    color: '#854EF9',
                    border: '1px solid #854EF9',
                    // boxShadow: 'none',
                },
                '&:active': {
                    boxShadow: 'none',
                    color: 'white',
                    backgroundColor: '#3c52b2',
                },
            }
        case  'lightPurple2':
            return {
                borderRadius: '16px',
                // fontSize: '1px',
                background: 'white',
                minWidth: '112px',
                color: '#854EF9',
                border: '1px solid #854EF9',
                '&:hover': {
                    background: 'linear-gradient(180deg, #9664FF 0%, #854EF9 100%)',
                    color: 'white',
                    boxShadow: 'none',
                },
                '&:active': {
                    boxShadow: 'none',
                    backgroundColor: '#3c52b2',
                },
            }
        case  'lightPurple':
            return {
                borderRadius: '16px',
                fontSize: '1px !important',
                background: '#9664FF5A',
                color: '#9664FF',
                minWidth: '112px',
                opacity: '100%',
                '&:hover': {
                    background: 'white',
                    border: '1px solid #854EF9',
                    boxShadow: 'none',
                },
                '&:active': {
                    boxShadow: 'none',
                    color: 'white',
                    backgroundColor: '#3c52b2',
                },
            }
        case 'transparent':
            return {
                color: '#1E2029',
                opacity: 0.6,
                '&:hover': {
                    opacity: 1,
                },
            };
        case 'roundWhite':
            return {
                color: '#9664FF',
                background: '#FFFFFF',
                border: '2px solid #F2F2F2',
                borderRadius: '50%',
                height: '40px',
                minWidth: '40px',
                fontWeight: 700,
                '&:hover': {
                    opacity: 0.50,
                },
            };
        case 'borders':
            return {
                borderRadius: '16px',
                fontSize: '1px !important',
                background: 'transparent',
                border: '1px solid #1E2029',
                padding: '4px 16px 4px 16px',
                color: '#1E2029',
                opacity: 0.6,
                '&:hover': {
                    opacity: 1,
                },
            };
        default:
            return {}
    }
});


export const Btn = (props: Properties) => {
    const {children, disabled, btnBgColor, btnIconDisplay = 'none', btnImgIcon, ...rest} = props;

    return (
        <Button btnBgColor={btnBgColor} disabled={disabled} {...rest}>
            <Typography variant={"subtitle2"} fontWeight='500'>{children}</Typography>
            <Box sx={{ml: '8px', display: `${btnIconDisplay}`,}}>
                <img src={btnImgIcon} alt='btnImgIcon'/>
            </Box>
        </Button>
    )
}
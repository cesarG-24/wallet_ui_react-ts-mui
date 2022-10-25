import React from 'react'
import {Box, Button, Card, CardContent, CardProps, Typography} from "@mui/material";

import redRectForCard from '../../assets/icons/redRectForCard.svg'
import purpleRectForCard from '../../assets/icons/purpleRectForCard.svg'
import backgroundBlur from '../../assets/images/backgroundBlur.png'

import {Statistics} from '../Statistics'

interface Properties extends CardProps {
    readonly bgImage?: '' | 'purple' | 'red' | 'blurPurple'
    readonly radius?: number;
    readonly bgPosition?: number;
    readonly body?: number | string;
    readonly date?: number | string;
    readonly percentage?: number;
    readonly btnImg?: string;
    readonly width?: number;
    readonly height?: number;
    readonly stcDisplay?: string;
    readonly fntColorT?: '' | 'white' | 'black' | 'grey';
    readonly fntColorB?: '' | 'white' | 'black' | 'grey';
    readonly btnInactive?: boolean;
}


export const Cards = (properties: Properties) => {
    const {
        stcDisplay = 'flex',
        bgImage = '',
        width = 236,
        height = 140,
        radius = 16,
        bgPosition = '0 17',
        children,
        title,
        body,
        date = '',
        percentage = 0,
        btnImg,
        btnInactive = true,
        fntColorT = 'grey',
        fntColorB = 'black',

        ...rest
    } = properties;

    let backgroundImage;
    switch (bgImage) {
        case 'purple':
            backgroundImage = purpleRectForCard;
            break;
        case 'red':
            backgroundImage = redRectForCard;
            break;
        case 'blurPurple':
            backgroundImage = backgroundBlur;
            break;
    }

    let color;
    switch (fntColorT) {
        case 'white':
            color = '#FFFFFF';

            break;
        case 'black':
            color = '#1E2029';
            break;
        case 'grey':
            color = '#1E2029';
            break;

    }

    switch (fntColorB) {
        case 'white':
            color = '#FFFFFF';

            break;
        case 'black':
            color = '#000000';
            break;
        case 'grey':
            color = '#1E2029';
            break;

    }


    return (
        <Card sx={{
            border: 0,
            minWidth: 29.5,
            backgroundColor: '#FFFFFF',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `${bgPosition}px`,
            borderRadius: `${radius}px`,
            boxShadow: 0,
            filter: 'drop-shadow(0px 12px 50px rgba(0, 0, 0, 0.04))',
            width: `${width}px`,
            height: `${height}px`,
        }} {...rest}>

            <CardContent sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '93%',
                gap: '40.31px',
                justifyContent: 'space-between',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Typography sx={{
                        color: `${fntColorT}`,
                        mb: '8px',
                    }}>
                        {title}
                    </Typography>
                    <Typography sx={{
                        color: `${fntColorB}`,
                        fontWeight: 700,
                        fontSize: '24px',
                        mb: '8px',
                    }}>
                        {body}
                    </Typography>

                    <Statistics
                        show={stcDisplay}
                        percentage={percentage}/>
                    <Box sx={{
                        mt: '33px',
                    }}>
                        {children}
                    </Box>
                </Box>

                <Box>
                    <Button sx={{
                        mb: '62.24px',
                    }} disabled={btnInactive}><img src={btnImg} alt=""/></Button>
                    <Typography sx={{
                        color: `${fntColorB}`,
                        fontWeight: 400,
                        fontSize: '16px',
                    }}>
                        {date}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

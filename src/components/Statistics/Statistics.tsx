import React, {HtmlHTMLAttributes} from "react";
import {Box, Typography} from "@mui/material";

import vectorUpIcon from '../../assets/icons/vectorUpIcon.svg';
import vectorDownIcon from '../../assets/icons/vectorDownIcon.svg';


interface Properties extends HtmlHTMLAttributes<HTMLDivElement> {
    readonly percentage?: number | any;
    readonly valueAny?: number | any;
    readonly show?: string;
    readonly displayPercent?: string;
    readonly displayNumber?: string;
}


export const Statistics = (props: Properties) => {
    const {percentage, show, displayPercent, displayNumber = 'none', valueAny} = props;


    const backgroundImage = percentage > 0 ? vectorUpIcon : vectorDownIcon;


    return (
        <Box sx={{
            display: `${show}`,
            flexDirection: 'row',
            gap: '5.7px'
        }}>
            <img src={backgroundImage} alt=""/>
            <Box display={`${displayPercent}`}>
                <Typography>{Math.abs(percentage)}%</Typography>
            </Box>

            <Box display={`${displayNumber}`}>
                <Typography>${Math.abs(percentage)}</Typography>
            </Box>
        </Box>

    )
}

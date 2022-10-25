import React, {HtmlHTMLAttributes} from "react";
import {Box, Typography} from "@mui/material";

import vectorUpIcon from '../../assets/icons/vectorUpIcon.svg';
import vectorDownIcon from '../../assets/icons/vectorDownIcon.svg';


interface Properties extends HtmlHTMLAttributes<HTMLDivElement> {
    readonly percentage: number;
    readonly show: string;
}


export const Statistics = (props: Properties) => {
    const {percentage, show} = props;


    const backgroundImage = percentage > 0 ?  vectorUpIcon : vectorDownIcon;
    

    return (
        <Box sx={{
            display:`${show}`,
            flexDirection: 'row',
            gap: '5.7px'
        }}>
            <img src={backgroundImage} alt=""/>
                <Typography>{Math.abs(percentage)}%</Typography>
        </Box>

    )
}

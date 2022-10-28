import {Box, styled} from "@mui/material";

import Balance from "../Balance";
import OverView from "../OverView";
import YourCard from "../YourCard";
import {Menu} from "../../components/Menu";

import divider from "../../assets/icons/Line3.svg";
import {theme} from "../../Theme";


const Root = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '370px',
        width: '100%',
        alignItems: 'center',
    },
}));

export default function Wallet() {

    return (
        // main container
        <Root>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                border: '16px',
                maxWidth: '1445px',
                width: '100%',
                p: '5',

                [theme.breakpoints.down('sm')]: {
                    maxWidth: '370px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    my: '10px',
                    mx: '10px',
                },
            }}>

                {/*LeftSide*/}
                <Box sx={{
                    width: '655px',
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%',
                    background: '#F9F9F9',
                    [theme.breakpoints.down('sm')]: {
                        my: '10px',
                        mx: '10px',
                        maxWidth: '370px',
                        width: '370px',
                        alignItems: 'center',
                    },
                }}>
                    <Menu/>

                    <OverView/>

                </Box>

                {/*Right Side*/}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%',
                    background: '#FFFFFF',
                    [theme.breakpoints.down('sm')]: {
                        maxWidth: '370px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    },

                }}>
                    {/*right side part1*/}

                    <YourCard/>
                    <Box sx={{
                        mx: '12px',
                        [theme.breakpoints.down('sm')]: {
                            display: 'none'
                        },
                    }}>
                        <img height='944px' src={divider} alt="divider"/>
                    </Box>
                    {/*right side part2*/}

                    <Balance/>

                </Box>
            </Box>
        </Root>
    )
}

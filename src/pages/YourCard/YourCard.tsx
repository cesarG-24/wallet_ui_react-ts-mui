import React from 'react'
import {Box, Card, styled, Typography} from "@mui/material";

import {Btn} from "../../components/Button";
import {Cards} from "../../components/Card";
import {IconBtn} from "../../components/IconBtn";

import VectorMajor from "../../assets/icons/VectorMajor.svg";
import creditCardBkOrange from "../../assets/images/creditCardBkOrange.png";
import chipIcon from "../../assets/icons/chipIcon.svg";
import bar1 from "../../assets/icons/bar1.svg";
import hideIcon from "../../assets/icons/eye-slash.svg";
import tokopaedi from "../../assets/icons/tokopaedi.svg";
import blibli from "../../assets/icons/blibliIcon.svg";
import amazon1 from "../../assets/icons/amazon-icon 1.svg";
import amazon2 from "../../assets/icons/amazon-icon2.svg";
import {theme} from "../../Theme";
import {MenuBox} from "../../components/MenuBox";

const Root = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.down('md')]: {
    },

    [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexDirection: 'column',
        my: '35px',
        mx: '33px',
    },

    [theme.breakpoints.up('lg')]: {},

}));
export default function YourCard() {

    return (

        <Root>
            <MenuBox/>

            <Box sx={{
                my: '35px',
                mx: '33px',

                [theme.breakpoints.down('md')]: {
                    my: '30px',
                    maxWidth: '370px',
                },
            }}>


                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '136px',
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '14px',
                        flexDirection: 'column',
                        gap: '20px',
                        alignItems: 'center',
                    }
                }}>
                    <Typography sx={{fontSize: '24px', fontWeight: 600,}}>Your Card</Typography>
                    <Btn btnBgColor={'borders'}> Add Card +</Btn>
                </Box>

                {/*leftSide button*/}
                <Box sx={{
                    ml: '-53px',
                    [theme.breakpoints.down('md')]: {
                        display: 'none',
                    },
                }}>
                    <Btn btnBgColor={"roundWhite"}><img width='8px' src={VectorMajor} alt=""/></Btn>
                </Box>

                {/*creditCard*/}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignContent: 'center',
                }}>
                    <Box position='absolute'>
                        <img src={creditCardBkOrange} alt=""/>
                    </Box>

                    <Box sx={{
                        pt: '15px',
                        pl: '11px',
                    }}>
                        <Cards
                            fntColorT={'white'}
                            fntColorB={'white'}
                            title='Card Balance'
                            body='$32,819.00'
                            radius={17}
                            btnImg={chipIcon}
                            width={347.22}
                            height={202.29}
                            bgImage={'blurPurple'}
                            bgPosition={0}
                            stcDisplay={'none'}
                            date={'05/26'}
                        >
                            <Typography color='white'> visa</Typography>
                            <Typography color='white'> **** **** **** 1890</Typography>
                        </Cards>

                        <Box sx={{
                            ml: '334px', mt: '-125px', position: 'absolute',
                            [theme.breakpoints.down('md')]: {
                                display: 'none',
                            },
                        }}>
                            <Btn btnBgColor={"roundWhite"}><img width='8px' src={VectorMajor} alt=""/></Btn>
                        </Box>

                    </Box>

                    <Box sx={{
                        mt: '15px',
                        alignSelf: 'center',
                    }}>

                        <img src={bar1} alt=""/>
                    </Box>

                </Box>

                {/*card inf */}

                <Box sx={{
                    mt: '35px',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Typography sx={{fontSize: '16px', fontWeight: 400,}}>Card
                            information</Typography>
                        <Btn btnBgColor={'transparent'}><img src={hideIcon} alt=""/></Btn>
                    </Box>

                    <Box>
                        <Card sx={{
                            background: '#F9F9F9',
                            border: '0',
                            borderRadius: '16px',
                            boxShadow: 0,
                        }}>
                            <Box sx={{
                                padding: '0',
                                display: 'flex',
                                flexDirection: 'row',
                                my: '20px',
                                mx: '23px',
                                gap: '93px',
                            }}>
                                <Box>
                                    <Typography mb='8px'> Card Name</Typography>
                                    <Typography mb='16px' fontWeight='700'> Leonardo Cap</Typography>
                                    <Typography mb='8px'> CVV</Typography>
                                    <Typography fontWeight='700'>***</Typography>
                                </Box>

                                <Box>
                                    <Typography mb='8px'>Card no</Typography>
                                    <Typography mb='16px' fontWeight='700'>**** **** ****
                                        1890</Typography>
                                    <Typography mb='8px'> Valid until</Typography>
                                    <Typography variant='body1' fontWeight='700'>05/26</Typography>
                                </Box>

                            </Box>
                        </Card>
                    </Box>
                </Box>

                {/* marketplace & history $ payments*/}
                <Box>
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '28px',
                            mt: '26px',

                        }}>
                            <Typography sx={{
                                borderBottom: '2px solid #9664FF',
                                pb: '10px',
                            }}>Marketplace</Typography>
                            <Typography sx={{
                                color: '#1E2029',
                                opacity: 0.6,
                            }}>History</Typography>
                            <Typography sx={{
                                color: '#1E2029',
                                opacity: 0.6,
                            }}> Payment</Typography>
                        </Box>
                        <Box>
                            <Box pt='24px'>
                                <IconBtn
                                    title='Tokopaedi'
                                    iconImg={tokopaedi}
                                    btnText='Connected'
                                    btnBgColor='lightPurple'
                                />
                            </Box>

                            <Box pt='24px'>
                                <IconBtn
                                    title='Blibli'
                                    iconImg={blibli}
                                    btnText='Connected'
                                    btnBgColor='lightPurple'
                                />
                            </Box>

                            <Box pt='24px'>
                                <IconBtn
                                    title='amazon1'
                                    iconImg={amazon1}
                                    btnText='Connect'
                                    btnBgColor='purple'
                                />
                            </Box>

                            <Box pt='24px'>
                                <IconBtn
                                    title='amazon2'
                                    iconImg={amazon2}
                                    btnText='Connect'
                                    btnBgColor='purple'
                                />
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Root>
    )
}
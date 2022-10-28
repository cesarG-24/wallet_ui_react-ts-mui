import {Box, styled, Typography} from "@mui/material";

import {Cards} from "../../components/Card";
import {Btn} from "../../components/Button";
import {Chart} from "../../components/Chart";
import {IconBtn} from "../../components/IconBtn";

import helloIcon from "../../assets/icons/helloIcon.svg";
import menu3Dots from "../../assets/icons/menu3Dots.svg";
import signalIcon from "../../assets/icons/signalIcon.svg";
import electricityIcon from "../../assets/icons/electricity.svg";
import {theme} from "../../Theme";


const Root = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '370px',
        width: '100%',
        mx: 2,
        my: 0,
    },
}));


export default function OverView() {

    return (
        <Root>

            <Box sx={{
                mx: 4.4,
                my: 2.5,
                [theme.breakpoints.down('sm')]: {
                    mx: 2,
                    my: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    gap: '0',
                    maxWidth: 370,
                    width: '100%'
                }
            }}>
                {/*<MenuBox/>*/}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    mb: 5,
                    [theme.breakpoints.down('sm')]: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }
                }}>
                    <Typography sx={{
                        fontSize: '24px',
                        fontWeight: '600',
                    }}> OverView</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#1E2029',
                        opacity: 0.6,
                    }}
                    > Good morning Leonardo <img src={helloIcon} alt='profile Avatar'/></Typography>
                </Box>

                {/*cards*/}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '15.3px',
                    [theme.breakpoints.down('sm')]: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        alignItems: 'center',
                    }
                }}>
                    <Cards
                        bgImage='purple'
                        title='Earning'
                        body='$21.,500.00'
                        percentage={12}
                        btnImg={menu3Dots}
                        btnInactive={false}
                    />


                    <Cards
                        bgImage='red'
                        title=' Spending'
                        body='$5,392.00'
                        percentage={-8}
                        btnImg={menu3Dots}
                        btnInactive={false}
                    />
                </Box>

                {/*Statistic section*/}
                <Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '195px',
                        mt: '39px',
                        [theme.breakpoints.down('sm')]: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0',
                            mt: '12px',
                        }
                    }}>
                        <Typography sx={{
                            fontWeight: '600',
                            fontSize: '24px',
                        }}>Statistic</Typography>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '48px',
                            background: '#FFFFFF',
                            border: 0,
                            borderRadius: '15px',
                            mb: '2px',
                            [theme.breakpoints.down('sm')]: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '0',
                                maxWidth: '300px',
                                width: '100%'
                            }
                        }}>

                            <Btn
                                btnBgColor="purple"
                            >Earning</Btn>

                            <Btn
                                btnBgColor="transparent"
                                variant='text'
                            >Spending</Btn>
                        </Box>

                    </Box>

                    {/*dates*/}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '28px',
                        mt: '26px',
                        mb: 2,

                        [theme.breakpoints.down('sm')]: {
                            mx: 2.3,
                            mb: 0,
                        }
                    }}>
                        <Typography sx={{borderBottom: '2px solid #9664FF', pb: '10px',}}>Weekly</Typography>
                        <Typography sx={{
                            color: '#1E2029',
                            opacity: 0.6,
                        }}>Monthly</Typography>
                        <Typography sx={{
                            color: '#1E2029',
                            opacity: 0.6,
                        }}> Last year</Typography>
                    </Box>

                    {/*chart*/}
                    <Box sx={{
                        [theme.breakpoints.down('sm')]: {
                            maxWidth: '370px',
                            width: '100%',
                            mb: '50px',
                        }
                    }}>
                        <Chart/>
                    </Box>

                    {/*monthly payments*/}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'white',
                        borderRadius: '15px',
                        px: '23px',
                        py: '18px',
                        mt: '40px',
                        [theme.breakpoints.down('sm')]: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            px: 0,
                            py: 2,
                            mt: 0,
                            mx: '8px',
                            mb: 2,
                        }
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignContent: 'center',
                            flexDirection: 'row',
                            gap: '240px',
                            [theme.breakpoints.down('sm')]: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                            }
                        }}>
                            <Typography sx={{
                                fontWeight: '400',
                                fontSize: '16px',
                            }}> Monthly payment </Typography>
                            <Btn btnBgColor='borders'> Add +</Btn>
                        </Box>

                        {/*payments*/}
                        <Box sx={{
                            pt: '24px',
                            [theme.breakpoints.down('sm')]: {
                                display: 'flex',
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                                alignItems: 'stretch',
                                alignContent: 'center',
                                gap: 2,
                            }
                        }}>
                            <IconBtn
                                iconImg={signalIcon}
                                title='Electricity'
                                subTitle='Pay before 15 July'
                                amount={'$30,10'}
                                btnText='Pay now'
                                btnBgColor='purple'

                            />
                        </Box>

                        <Box pt='24px'>
                            <IconBtn
                                iconImg={electricityIcon}
                                title='internet'
                                subTitle='Pay before 17 July'
                                amount={'$20,30'}
                                btnText='Pay now'
                                btnBgColor='purple'
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Root>

    )
}
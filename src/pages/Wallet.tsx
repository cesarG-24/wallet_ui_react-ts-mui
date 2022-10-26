import React from 'react'
import {Box, Card, Divider, Typography,} from "@mui/material";

import {Menu} from "../components/Menu";
import {Cards} from "../components/Card";
import {Btn} from "../components/Button";
import {IconBtn} from "../components/IconBtn";
import {UserMenu} from "../components/UserMenu";
import {Statistics} from "../components/Statistics";

import helloIcon from '../../src/assets/icons/helloIcon.svg'
import VectorMajor from '../../src/assets/icons/VectorMajor.svg'
import menu3Dots from '../assets/icons/menu3Dots.svg'
import chipIcon from '../assets/icons/chipIcon.svg'
import bar1 from '../assets/icons/bar1.svg'
import hideIcon from '../assets/icons/eye-slash.svg'
import electricityIcon from "../assets/icons/electricity.svg";
import signalIcon from "../assets/icons/signalIcon.svg";
import tokopaedi from "../assets/icons/tokopaedi.svg";
import blibli from "../assets/icons/blibliIcon.svg";
import amazon1 from "../assets/icons/amazon-icon 1.svg";
import amazon2 from "../assets/icons/amazon-icon2.svg";
import exportIcon from "../assets/icons/export.svg";
import importIcon from "../assets/icons/import.svg";
import divider from "../assets/icons/Line3.svg";
import avatarGuy1 from "../assets/icons/avatarIcons/avatarGuy1.svg";
import avatarGuy2 from "../assets/icons/avatarIcons/avatarGuy2.svg";
import avatarGirl2 from "../assets/icons/avatarIcons/avatarGirl2.svg";
import avatarGirl3 from "../assets/icons/avatarIcons/avatarGirl3.svg";
import addIcon1 from "../assets/icons/addIcon1.svg";
import notificationDot from "../assets/icons/notificationDot.svg";
import settingIcon2 from "../assets/icons/settingIcon2.svg";
import waterIcon from "../assets/icons/waterIcon.svg";
import vectorDown1 from "../assets/icons/vectorDown1.svg";
import lineChart from '../assets/images/Group 106.svg'
import frame from '../assets/images/Frame 115.svg'
import Ellipse from '../assets/images/Ellipse 8.svg'
import LineV from '../assets/images/Line 8.svg'
import creditCardBkOrange from '../assets/images/creditCardBkOrange.png'
import {Chart} from "../components/Chart";


export const Wallet = () => {

    return (
        // main container
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            border: '16px',
            maxWidth: '1445px',
            width: '100%',
            height: '900px',
            p: '5',
            overflow: 'none',
            borderCollapse: 'collapse',
        }}>

            {/*LeftSide*/}
            <Box sx={{
                width: '670px',
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
                background: '#F9F9F9',
            }}>

                <Menu/>

                <Box sx={{
                    // width: '580px',
                    mx: 4.4,
                    my: 2.5,
                }}>
                    <Box mb={6}>
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
                        }}>
                            <Typography sx={{
                                fontWeight: '600',
                                fontSize: '24px',
                            }}>Statistic</Typography>

                            <Box sx={{
                                background: '#FFFFFF',
                                border: 0,
                                borderRadius: '15px',
                                mb: '2px',
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
                        <Box>
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

                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignContent: 'center',
                                flexDirection: 'row',
                                gap: '240px',

                            }}>
                                <Typography sx={{
                                    fontWeight: '400',
                                    fontSize: '16px',
                                }}> Monthly payment </Typography>
                                <Btn btnBgColor='borders'> Add +</Btn>
                            </Box>

                            {/*payments*/}
                            <Box pt='24px'>
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

            </Box>


            {/*Right Side*/}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
                background: '#FFFFFF',
            }}>
                {/*right side part1*/}
                <Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        my: '35px',
                        mx: '33px',
                    }}>
                        <Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '136px',
                            }}>
                                <Typography sx={{fontSize: '24px', fontWeight: 600,}}>Your Card</Typography>
                                <Btn btnBgColor={'borders'}> Add Card +</Btn>
                            </Box>

                            {/*leftSide button*/}
                            <Box sx={{ml: '-53px'}}>
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

                                    <Box sx={{ml: '334px', mt: '-125px', position: 'absolute',}}>
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
                                    <Typography sx={{fontSize: '16px', fontWeight: 400,}}>Card information</Typography>
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
                                                <Typography mb='16px' fontWeight='700'>**** **** **** 1890</Typography>
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
                    </Box>

                </Box>


                <Box sx={{mx: '12px'}}>
                    <img height='944px' src={divider} alt="divider"/>
                </Box>


                {/*right side part2*/}
                <Box sx={{
                    ml: '20px', width: '381px',
                }}>
                    <Box mt='18px'>
                        <UserMenu/>
                    </Box>


                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        alignItems: 'center',
                        mt: '42px',

                    }}>
                        <Typography fontWeight='400' fontSize='16px'>Total Balance</Typography>
                        <Typography fontWeight='700' fontSize='40px'>$81,910.00</Typography>
                        <Statistics
                            show='flex'
                            percentage={12.81}/>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: '20px',
                        mt: '32px',
                    }}>
                        <Btn
                            btnBgColor={'black'}
                            btnImgIcon={exportIcon}
                            btnIconDisplay='block'
                        >
                            Send
                        </Btn>
                        <Btn btnBgColor='black'
                             btnImgIcon={importIcon}
                             btnIconDisplay='block'>
                            Receive
                        </Btn>
                    </Box>

                    <Box sx={{
                        mt: '38px',
                        gap: '28px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography fontWeight='400' fontSize='16px'>Quick transfer</Typography>

                        <Box sx={{
                            mt: '10px',
                            gap: '10px',
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <img src={avatarGuy1} alt=""/>
                            <img src={avatarGuy2} alt=""/>
                            <img src={avatarGirl2} alt=""/>
                            <img src={avatarGirl3} alt=""/>
                            <img src={addIcon1} alt=""/>
                        </Box>
                    </Box>

                    <Box mt='36px'>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '8px',
                            }}>
                                <Typography fontWeight='400' fontSize='16px'>Notifications</Typography>
                                <img src={notificationDot} alt="notificationDot"/>
                            </Box>

                            <img src={settingIcon2} alt="settingIcon2"/>
                        </Box>

                        <Box sx={{mt: '24px',}}>
                            <Box>
                                <IconBtn
                                    iconImg={avatarGuy1}
                                    title='Joseph akbar'
                                    subTitle='Just sent you $10,000'
                                    txt='Click for detail'
                                    btnText='Just now'
                                    btnInactive={true}
                                />
                            </Box>

                            <Box sx={{my: '16px'}}>
                                <Divider/>
                            </Box>
                            <Box>
                                <IconBtn
                                    iconImg={waterIcon}
                                    title='Water bill ($15,00)'
                                    subTitle='Pay before 28 July'
                                    txt='Click for detail'
                                    btnText='15m ago'
                                    btnInactive={true}
                                />
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    gap: '20px',
                                    mt: '32px',
                                }}>
                                    <Btn btnBgColor={"purple"}> Pay now</Btn>
                                    <Btn btnBgColor={'lightPurple2'}> Later</Btn>
                                </Box>

                            </Box>

                            <Box sx={{my: '16px'}}>
                                <Divider/>
                            </Box>

                            <Box>
                                <IconBtn
                                    iconImg={vectorDown1}
                                    title='Spending'
                                    subTitle='You spent more than $5,000'
                                    txt='Click for detail'
                                    btnText='6h ago'
                                    btnInactive={true}
                                />
                            </Box>

                        </Box>
                    </Box>

                </Box>

            </Box>


        </Box>

    )
}

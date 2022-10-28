import {Box, Divider, Typography} from "@mui/material";

import {UserMenu} from "../../components/UserMenu";
import {Statistics} from "../../components/Statistics";
import {Btn} from "../../components/Button";
import {IconBtn} from "../../components/IconBtn";
import {theme} from "../../Theme";

import exportIcon from "../../assets/icons/export.svg";
import importIcon from "../../assets/icons/import.svg";
import avatarGuy1 from "../../assets/icons/avatarIcons/avatarGuy1.svg";
import avatarGuy2 from "../../assets/icons/avatarIcons/avatarGuy2.svg";
import avatarGirl2 from "../../assets/icons/avatarIcons/avatarGirl2.svg";
import avatarGirl3 from "../../assets/icons/avatarIcons/avatarGirl3.svg";
import addIcon1 from "../../assets/icons/addIcon1.svg";
import notificationDot from "../../assets/icons/notificationDot.svg";
import settingIcon2 from "../../assets/icons/settingIcon2.svg";
import waterIcon from "../../assets/icons/waterIcon.svg";
import vectorDown1 from "../../assets/icons/vectorDown1.svg";



export default function Balance() {

    return (
        <Box>
            {/*<MenuBox/>*/}

            <Box sx={{
                ml: '20px', width: '370px',

                [theme.breakpoints.down('sm')]: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '370px',
                    width: '100%',
                    ml: 0,
                },
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                    mt: '18px',
                }}>
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

    )
}
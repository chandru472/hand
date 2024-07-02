import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import b1 from '../src/product/b1.jpg';
import b2 from '../src/product/b2.jpg';
import b3 from '../src/product/b3.jpg';
import b4 from '../src/product/b4.jpg';

import j1 from '../src/product/j1.jpg';
import j2 from '../src/product/j2.jpg';
import j3 from '../src/product/j3.jpg';


import l1 from '../src/product/l1.jpg';
import l2 from '../src/product/l2.jpg';
import l3 from '../src/product/l3.jpg';
import l4 from '../src/product/l4.jpg';

import p1 from '../src/product/p11.jpg';
import p2 from '../src/product/p2.jpg';
import p3 from '../src/product/p3.jpg';
import p4 from '../src/product/p4.jpg';

// Define your custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#009688',
        },
        secondary: {
            main: '#9f3e72',
        },
    },
});

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function Pro() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 0.5, borderColor: 'white', mt: 2 }}>
                    <Tabs
                        textColor="primary"
                        indicatorColor="secondary"

                        centered
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        sx={{
                            '& .MuiTab-root': {
                                textTransform: 'capitalize',
                                fontSize: { xs: '10px', sm: '14px', md: '16px' },
                            }, mb: 2
                        }}
                    >
                        <Tab label="Bangles" {...a11yProps(0)} disableTouchRipple sx={{ color: 'white' }} />
                        <Tab label="Jhumukas" {...a11yProps(1)} disableTouchRipple sx={{ color: 'white' }} />
                        <Tab label="Letter Keychain" {...a11yProps(2)} disableTouchRipple sx={{ color: 'white' }} />
                        <Tab label="Photo Keychain" {...a11yProps(3)} disableTouchRipple sx={{ color: 'white' }} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', }}>
                        <Box component='img' src={b1} alt='bangle' width={320} height={350} sx={{
                            mt: 4,
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                        <Box component='img' src={b2} alt='bangle' width={320} height={350} sx={{
                            mt: 4, transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                        <Box component='img' src={b3} alt='bangle' width={320} height={350} sx={{
                            mt: 4, transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                        <Box component='img' src={b4} alt='bangle' width={320} height={350} sx={{
                            mt: 4, transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Box component='img' src={j1} alt='bangle' width={320} height={350} sx={{
                            mt: 4,
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                        <Box component='img' src={j2} alt='bangle' width={320} height={350} sx={{
                            mt: 4, transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                        <Box component='img' src={j3} alt='bangle' width={320} height={350} sx={{
                            mt: 4, transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />



                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Box component='img' src={l1} alt='bangle' width={320} height={350} sx={{
                            mt: 4,
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                        <Box component='img' src={l2} alt='bangle' width={320} height={350} sx={{
                            mt: 4, transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                        <Box component='img' src={l3} alt='bangle' width={320} height={350} sx={{
                            mt: 4, transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                        <Box component='img' src={l4} alt='bangle' width={320} height={350} sx={{
                            mt: 4, transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', mt: -2 }}>
                        <Box component='img' src={p1} alt='bangle' width={320} height={350} sx={{
                            mt: 4,
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                        <Box component='img' src={p2} alt='bangle' width={320} height={350} sx={{
                            mt: 4, transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                        <Box component='img' src={p3} alt='bangle' width={320} height={350} sx={{
                            mt: 4, transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />
                        <Box component='img' src={p4} alt='bangle' width={320} height={350} sx={{
                            mt: 4, transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-10px)',
                            },
                        }} />


                    </Box>
                </CustomTabPanel>
            </Box>
        </ThemeProvider>
    );
}

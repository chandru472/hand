import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
                            },
                        }}
                    >
                        <Tab label="Bangles" {...a11yProps(0)} disableTouchRipple sx={{color:'white'}}/>
                        <Tab label="Jhumukas" {...a11yProps(1)} disableTouchRipple sx={{color:'white'}}/>
                        <Tab label="Letter Keychain" {...a11yProps(2)} disableTouchRipple sx={{color:'white'}}/>
                        <Tab label="Photo Keychain" {...a11yProps(3)} disableTouchRipple sx={{color:'white'}}/>
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>

                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', mt: -4 }}>
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

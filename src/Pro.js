import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Pro() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };



    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>

                <Tabs 
                     centered value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
                        '& .MuiTab-root': {
                            textTransform: 'capitalize',
                            fontSize:'10px'
                        }


                    }}>

                    <Tab label="Bangles" {...a11yProps(0)} disableTouchRipple />
                    <Tab label="Jhumukas" {...a11yProps(1)} disableTouchRipple />
                    <Tab label="Letter Keychain" {...a11yProps(2)} disableTouchRipple />
                    <Tab label="Photo Keychain" {...a11yProps(3)} disableTouchRipple />

                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}

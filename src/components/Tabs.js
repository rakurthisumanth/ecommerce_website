import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from './cart';

const tabPanelStyles = {
  fadeOut: {
    opacity: 0,
    transform: 'translateY(-20px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease'
  },
  fadeIn: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 0.5s ease, transform 0.5s ease'
  }
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={value === index ? tabPanelStyles.fadeIn : tabPanelStyles.fadeOut}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ textAlign: 'center' }}>
            <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            sx={{ '& .MuiTabs-indicator': { backgroundColor: 'green' } }}
            >
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="Oranges" {...a11yProps(1)} />
        <Tab label="Fresh Meat" {...a11yProps(2)} />
        <Tab label="Vegetables" {...a11yProps(3)} />
        <Tab label="Fast Food" {...a11yProps(4)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={5} justifyContent="center">
          {[...Array(5)].map((_, index) => (
            <Grid item key={index}>
              <MediaCard type="all" />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container spacing={5} justifyContent="center">
          {[...Array(3)].map((_, index) => (
            <Grid item key={index}>
              <MediaCard type="oranges" />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Grid container spacing={5} justifyContent="center">
          {[...Array(2)].map((_, index) => (
            <Grid item key={index}>
              <MediaCard type="fresh meat" />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Grid container spacing={5} justifyContent="center">
          {[...Array(3)].map((_, index) => (
            <Grid item key={index}>
              <MediaCard type="vegetables" />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Grid container spacing={5} justifyContent="center">
          {[...Array(5)].map((_, index) => (
            <Grid item key={index}>
              <MediaCard type="fast food" />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
    </div>
  );
}

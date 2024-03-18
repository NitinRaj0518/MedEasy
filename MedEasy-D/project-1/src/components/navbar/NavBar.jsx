import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    fontSize: '20px',
    textDecoration: 'none',
    color: 'white', // Default color for tabs
    '&:hover': {
      color: 'white',
    },
  },
  app: {
    backgroundColor: 'black',
  },
}));

function NavvBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} stryle={{width:'100%'}}>
      <AppBar className={classes.app} position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="Info"
            className={classes.tab}
            component={Link}
            to="/plasma"
          />
          <Tab
            label="Request Blood"
            className={classes.tab}
            component={Link}
            to="/plasma/requestplasma"
          />
          <Tab
            label="Donate Blood"
            className={classes.tab}
            component={Link}
            to="/plasma/donateplasma"
          />
          <Tab
            label="Request List"
            className={classes.tab}
            component={Link}
            to="/plasma/getrequesters"
          />
          <Tab
            label="Donors List"
            className={classes.tab}
            component={Link}
            to="/plasma/getdonors"
          />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default NavvBar;

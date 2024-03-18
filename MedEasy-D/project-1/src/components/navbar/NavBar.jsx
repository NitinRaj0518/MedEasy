import React, { useState } from 'react'
import { AppBar, Tabs, Tab, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  items: {
    fontSize: '20px',
    textDecoration: 'none',

    '&:hover': {
      color: "white",
    },
  },
  menuitems: {
    fontSize: '20px',
    textDecoration: 'none',
  },

  app: {
    backgroundColor: 'black',
  },


}));

function NavvBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState('');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenu(event.target.innerHTML)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.app} position="static">
        <Tabs onChange={handleChange} value={value}>
          <Tab label="Info" className={classes.items} onClick={handleClick} component={Link} to="/plasma" />
          <Tab label="Request Blood" className={classes.items} onClick={handleClick} component={Link} to="/plasma/requestplasma" />
          <Tab label="Donate Blood" className={classes.items} onClick={handleClick} component={Link} to="/plasma/donateplasma" />
          <Tab label="Request List" className={classes.items} onClick={handleClick} component={Link} to="/plasma/getrequesters" />
          <Tab label="Donors List" className={classes.items} onClick={handleClick} component={Link} to="/plasma/getdonors" />
        </Tabs>
      </AppBar>
      {
        (menu === 'Blood Donor ⬇️') ? (
          <Menu
            id="hospital"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} className={classes.menuitems} component={Link} to="/plasma/requestplasma">Request Blood</MenuItem>
            <MenuItem onClick={handleClose} className={classes.menuitems} component={Link} to="/plasma/donateplasma">Donate Blood</MenuItem>
            <MenuItem onClick={handleClose} className={classes.menuitems} component={Link} to="/plasma/getrequesters">Request List</MenuItem>
            <MenuItem onClick={handleClose} className={classes.menuitems} component={Link} to="/plasma/getdonors">Donors List</MenuItem>
          </Menu>
        ) : (
          <div></div>
        )
      }

    </div>
  )
}

export default NavvBar

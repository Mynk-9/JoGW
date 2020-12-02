import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import Notifs from '../Popups/notifs';
import Profile from '../Popups/profile';
import AdminCards from '../admincards/admincards';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  appBar: {
    backgroundColor: 'grey',
    zIndex: 1,
  },
  title: {
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    float: 'right',
    width: '2rem',
    height: '2rem',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  margin: {
    borderBottom: '3px solid green',
  },
  card: {
    backgroundColor: ' #E7B8B8',
  },
  margi: {
    borderBottom: '3px solid purple',
  },
}));

export default function Navbar({ navHeading, name, bitsId }) {
  const classes = useStyles();
  if (navHeading == null) {
    navHeading = 'DashBoard';
  }
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container>
            <Grid item xs>
              <Typography variant="h4" edge="start">
                <b>JoGW</b>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography className={classes.title} variant="h4">
                <b>{navHeading}</b>
              </Typography>
            </Grid>
            <Grid item xs alignContent="flex-end">
              <Profile name={name} bitsId={bitsId} />

              {/* <IconButton className={classes.menuButton}><NotificationsActiveIcon  /></IconButton> */}
              <Notifs />

              <IconButton className={classes.menuButton}>
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}

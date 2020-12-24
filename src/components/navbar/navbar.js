import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Notifs from '../popups/notifs';
import Profile from '../popups/profile';
import Search from '../popups/search';
import '../navbar/navbar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  appBar: {
    backgroundColor: '#EF4646',
    zIndex: 1,
  },
  title: {
    textAlign: 'center',
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
    borderRadius: '50px',
  },
  top: {
    marginTop: '17px',
    padding: '4px',
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
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs sm md={4} lg={4}>
              <div className="trux">JoGW</div>
            </Grid>
            <Grid item xs sm md={4} lg={4}>
              <div className="trux1">{navHeading}</div>
            </Grid>
            <Grid
              item
              xs
              sm
              md={4}
              lg={4}
              alignContent="flex-end"
              className={classes.top}
            >
              <Profile name={name} bitsId={bitsId} />

              {/* <IconButton className={classes.menuButton}><NotificationsActiveIcon  /></IconButton> */}
              <Notifs />
              <Search />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../personal/personal.css';
import Login from '../Login/Login';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
console.log(screen.width);
console.log(screen.height);
const height = screen.height;
const width = screen.width;

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',
    width: `${width}px`,
    height: `${height * 0.885}px`,
    background: '#EF4646',
  },
  mid: {
    position: 'fixed',
    width: `${(481 * width) / 1440}px`,
    height: `${(452 * height) / 1024}px`,
    left: `${(194 * width) / 1440}px`,
    top: `${(140 * height) / 1024}px`,
    overflow: 'hidden',
    background: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      // backgroundColor: 'red',
    },
  },
  message: {
    position: 'fixed',
    width: `${(373 * width) / 1440}px`,
    height: `${(56 * height) / 1024}px`,
    left: `${width > 1320 ? (222 * width) / 1440 : (162 * width) / 1440}px`,
    //left: `${(222 * width) / 1440}px`,
    top: `${(641 * height) / 1024}px`,
    overflow: 'hidden',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: `${(44 * height * width) / (1024 * 1440)}px`,
    lineHeight: `${(48 * height) / 1024}px`,
    textAlign: 'right',

    color: '#FFFDE8',
    [theme.breakpoints.down('md')]: {
      // backgroundColor: 'red',
    },
  },
  scaff2: {
    //position: 'absolute',
    position: 'fixed',
    width: `${(533 * width) / 1440}px`,
    height: `${height > 820 ? (910 * height) / 1024 : (850 * height) / 1024}px`,
    // left:  `${907*width/1440}px`,
    //overflow: 'hidden' ,
    top: `${(0 * height) / 1024}px`,
    background: '#FFFDE8',
    border: '0.01px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px 0px 0px 20px',
    right: `${(0 * width) / 1440}px`,
    [theme.breakpoints.down('md')]: {
      // backgroundColor: 'red',
    },
    // [`@media (min-height: ${0 *height/960 })px`]: {
    // backgroundColor: 'red',
    // bottom: `${150*height/960}px`,
    //},
  },
  point: {
    position: 'absolute',
    display: 'none',
    width: `${(153 * width) / 1440}px`,
    height: `${(71 * height) / 1024}px`,
    left: `${(360 * width) / 1440}px`,
    top: `${(30 * height) / 1024}px`,
    opacity: 0.87,
    background: 'rgba(207, 0, 0, 0.77)',
    borderRadius: '15px',
    // overflow: 'hidden' ,
    [theme.breakpoints.down('md')]: {
      // backgroundColor: 'red',
    },
  },
  joint: {
    position: 'absolute',
    width: `${(459 * width) / 1440}px`,
    height: `${(722 * height) / 1024}px`,
    left: `${(30 * width) / 1440}px`,
    top: `${(69 * height) / 1024}px`,
    // overflow: 'hidden' ,
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: `${(32 * height * width) / (1024 * 1440)}px`,
    lineHeight: `${(38 * height) / 1024}px`,
    textAlign: 'right',

    color: '#000000',
    [theme.breakpoints.down('md')]: {
      // backgroundColor: 'red',
    },
  },
  log: {
    position: 'absolute',
    width: `${(376 * width) / 1440}px`,
    height: `${(100 * height) / 1024}px`,
    left: `${(80 * width) / 1440}px`,
    bottom: `${height > 820 ? (75 * height) / 1024 : (155 * height) / 1024}px`,
    // overflow: 'hidden' ,
    background: '#FFFFFF',
    border: '0.05px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    //[`@media (min-height: ${0 *height/960 })px`]: {
    // backgroundColor: 'red',
    //bottom: `${150*height/960}px`,
    // },
  },
  inner: {
    minHeight: '100%',
  },
}));

export default function Welcome1() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.main} id="main">
        <div className={classes.mid} id="mid"></div>
        <div className={classes.message} id="message">
          Message of Joy
        </div>
        <div className={classes.scaff2} id="scaff2">
          <div className={classes.inner}>
            <div className={classes.point} id="point"></div>
            <div className={classes.joint} id="joint">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam
            </div>
            <div className={classes.log} id="log">
              <Box display="flex">
                <Box width="19%" paddingLeft="2.5rem" paddingTop="1.3rem">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.86484 24.1726L7.4725 29.3704L2.38352 29.478C0.862656 26.6572 0 23.4297 0 20.0001C0 16.6836 0.806563 13.5561 2.23625 10.8022H2.23734L6.76797 11.6329L8.75266 16.1363C8.33727 17.3473 8.11086 18.6473 8.11086 20.0001C8.11102 21.4682 8.37695 22.8748 8.86484 24.1726Z"
                      fill="#FBBB00"
                    />
                    <path
                      d="M39.6503 16.2642C39.88 17.474 39.9998 18.7235 39.9998 20.0004C39.9998 21.4323 39.8492 22.829 39.5624 24.1763C38.5888 28.7609 36.0448 32.7642 32.5207 35.5971L32.5196 35.596L26.813 35.3049L26.0054 30.2631C28.3438 28.8917 30.1713 26.7455 31.134 24.1763H20.4395V16.2642H31.29H39.6503Z"
                      fill="#518EF8"
                    />
                    <path
                      d="M32.5203 35.5954L32.5214 35.5965C29.094 38.3514 24.7401 39.9998 20.0005 39.9998C12.384 39.9998 5.76208 35.7427 2.38403 29.4778L8.86536 24.1724C10.5543 28.68 14.9027 31.8888 20.0005 31.8888C22.1917 31.8888 24.2445 31.2965 26.006 30.2624L32.5203 35.5954Z"
                      fill="#28B446"
                    />
                    <path
                      d="M32.7658 4.60437L26.2866 9.90875C24.4636 8.76922 22.3086 8.11094 19.9998 8.11094C14.7866 8.11094 10.3569 11.467 8.75257 16.1362L2.23718 10.8022H2.23608C5.56468 4.38461 12.2701 0 19.9998 0C24.8526 0 29.302 1.72859 32.7658 4.60437Z"
                      fill="#F14336"
                    />
                  </svg>
                </Box>
                <Box width="80%" paddingTop="1.5rem">
                  <Login />
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

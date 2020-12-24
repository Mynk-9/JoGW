import { React, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Navbar from '../navbar/navbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import '../navbar/navbar.css';
import '../personal/personal.css';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
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
  auto: {},
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
    // border: '3px solid black',
    backgroundColor: '#FFE171',
    margin: '5px',
    borderRadius: '18px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  Gin: {
    marginTop: '12px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    flex: 1,
  },
  Gin1: {
    marginTop: '12px',
    marginRight: '2rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    float: 'right',
    flex: 1,
  },
  imgt: {
    flex: 1,
  },
  leg: {
    [theme.breakpoints.down('sm')]: {
      flex: 5.5,
    },
    [theme.breakpoints.up('sm')]: {
      flex: 11.5,
    },
    [theme.breakpoints.down('md')]: {
      flex: 10.5,
    },
    [theme.breakpoints.up('md')]: {
      flex: 11.5,
    },
    [theme.breakpoints.down('lg')]: {
      flex: 11.5,
    },
    [theme.breakpoints.up('lg')]: {
      flex: 10.5,
    },
    [theme.breakpoints.down('xl')]: {
      flex: 5.5,
    },
    [theme.breakpoints.up('xl')]: {
      flex: 1.5,
    },
  },
  ter: {
    width: '1rem',
    height: '1rem',
    //background: '#EF4646',
  },
  Gi: {
    flex: 2,
  },
  rad: {
    borderRadius: '10px',
  },
  hot: {
    color: '#EF4646',
    fontFamily: 'Oxygen',
  },
  date: {
    margin: '.8rem 1rem 0 0',
    fontFamily: 'oxygen',
    fontSize: '1rem',
  },
  height: {
    height: `${screen.height - 265}px`,
    //height:'100%',
  },
}));

export default function Personal({ name, bitsId }, props) {
  const classes = useStyles();
  var det = [
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
  ];

  const [color, setColor] = useState('#FB8989');

  const boxClick = (e) => {
    setColor('#FFFDE8');
    setColor1('#FB8989');
  };

  const [color1, setColor1] = useState('#FB8989');

  const boxClick1 = (e) => {
    setColor1('#FFFDE8');
    setColor('#FB8989');
  };
  const [i, seti] = useState(0);
  const [x1, setX1] = useState('#C4C4C4');
  const [x2, setX2] = useState('#EF4646');

  const hc1 = (e) => {
    if (i > 15) {
      seti(i - 15);

      setX1('#EF4646');
      setX2('#EF4646');
    } else if (i <= 15) {
      seti(0);
      setX1('#C4C4C4');
    }
    console.log(i);
  };
  const hc2 = (e) => {
    console.log(i);

    if (i < 15) {
      seti(i + 15);
      setX1('#EF4646');
      setX2('#EF4646');
    } else if (i >= 15) {
      seti(30);
      setX2('#C4C4C4');
    }

    console.log(i);
  };
  return (
    <Fragment>
      {/*Nav bar*/}

      <Navbar navHeading="DashBoard" name={name} bitsId={bitsId} />
      {/*Inbox and sent buttons*/}
      <div className="crux1" bgcolor="#EF4646">
        <Box display="flex" bgcolor="#EF4646">
          <Box width="10%"></Box>
          <Box
            p={0.8}
            style={{ backgroundColor: color, textTransform: 'none' }}
            className="rad1"
            width="61%"
            textAlign="center"
          >
            <Button
              onClick={boxClick}
              style={{ fontWeight: '700', textTransform: 'none' }}
              size="large"
              className="margi1"
            >
              <b> Inbox</b>
            </Button>
          </Box>
          <Box bgcolor="#EF4646" width="20%"></Box>
          <Box
            p={0.8}
            style={{ backgroundColor: color1, textTransform: 'none' }}
            width="61%"
            className="rad1"
            textAlign="center"
            flexShrink={1}
          >
            <Button
              onClick={boxClick1}
              style={{ fontWeight: '700', textTransform: 'none' }}
              size="large"
              className="margi1"
            >
              <b> Sent</b>
            </Button>
          </Box>
          <Box width="10%"></Box>
        </Box>
      </div>

      {/*Welcome message and heading*/}
      <div className={classes.height} id="color1">
        <Container>
          <h1 className={classes.hot}>Welcome Nipun </h1>
        </Container>
        <Box textAlign="center">
          <h1 style={{ fontFamily: 'Oxygen' }}>Messages</h1>
        </Box>
        {/*Container to show all messages*/}
        <div className="terov1">
          {det.slice(i, i < 25 ? i + 15 : i + 10).map((text, index) => (
            <Grid container direction={'column'}>
              <Container className={classes.margi}>
                <Grid container direction={'row'}>
                  <Grid item xs className={classes.Gin}>
                    <IconButton>{text}</IconButton>
                  </Grid>
                  <Grid
                    item
                    xs
                    alignContent="flex-end"
                    className={classes.Gi}
                  ></Grid>
                  <Grid item xs lg={2} className={classes.Gin1}>
                    <Typography variant="h6" edge="start">
                      <b key="index">
                        <p className={classes.date}>28th Dec 2020, 2:31 a.m.</p>
                      </b>
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          ))}
        </div>

        <Grid container direction={'row'} className={classes.fix}>
          <Grid item xs className={classes.leg}></Grid>
          <Grid item className={classes.imgt}>
            <IconButton className={classes.ter} style={{ color: '#EF4646' }}>
              <AddCircleIcon className="tera" />
            </IconButton>
          </Grid>
          {/*Scroll to top FAB*/}
        </Grid>
        <Box display="flex" justifyContent="center">
          <Box justifyContent="center" marginTop="9px" marginRight="1.5rem">
            <svg
              onClick={hc1}
              width="48"
              height="23"
              viewBox="0 0 48 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.46392e-07 11.5L47.25 22.3253L47.25 0.674681L5.46392e-07 11.5Z"
                fill={x1}
              />
            </svg>
          </Box>
          <Box justifyContent="center">
            <Button
              style={{
                fontWeight: '700',
                textTransform: 'none',
                fontFamily: 'Oxygen',
                fontSize: '1.25rem',
              }}
            >
              Showing {i}-{i < 26 ? i + 15 : i + 10} of {det.length}
            </Button>
          </Box>
          <Box justifyContent="center" marginTop="9px" marginLeft="1.5rem">
            <svg
              onClick={hc2}
              width="48"
              height="23"
              viewBox="0 0 48 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48 11.5L0.749999 22.3253L0.75 0.674681L48 11.5Z"
                fill={x2}
              />
            </svg>
          </Box>
        </Box>
        <Grid container direction={'row'} style={{ color: '#EF4646' }}></Grid>
      </div>
    </Fragment>
  );
}

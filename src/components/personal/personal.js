import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Navbar from '../navbar/navbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import '../navbar/navbar.css';

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
  Gin: {
    marginTop: '8px',
    marginRight: '10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    flex: 1,
  },
  margi: {
    border: '3px solid black',
    backgroundColor: ' grey',
  },
  imgt: {
    flex: 1,
  },
  leg: {
    flex: 13,
  },
  ter: {
    width: 11,
    height: 11,
  },
  Gi: {
    flex: 2,
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
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
  ];
  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor'
      );

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }
  return (
    <React.Fragment>
      {/*Nav bar*/}
      <Navbar navHeading="Dashboard" name={name} bitsId={bitsId} />
      {/*Inbox and sent buttons*/}
      <Box textAlign="center">
        <Button size="medium" className={classes.margin}>
          <b>Inbox</b>
        </Button>
        <Button size="medium" className={classes.margin}>
          <b>Sent</b>
        </Button>
      </Box>
      {/*Welcome message and heading*/}
      <Container>
        <h1>Welcome Nipun </h1>
      </Container>
      <Box textAlign="center">
        <h3>Messages</h3>
      </Box>

      {/* <Container>


      {['Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',  'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add'].map((text, index) => (
        <Card variant="outlined" className={classes.card} key={text}>
  <CardContent>
    <List>
        <ListItem button  key={text} >
          <ListItemIcon></ListItemIcon>

          <ListItemText primary={text} className={classes.margi}/>
        
        </ListItem>
        </List>
    </CardContent>
    </Card>
       
      ))}
    
    </Container> */}
      {/*Container to show all messages*/}
      {det.slice(0, 20).map((text, index) => (
        <Grid container direction={'column'}>
          <Container className={classes.margi}>
            <Grid container direction={'row'}>
              <Grid item xs className={classes.jin}>
                <IconButton>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </IconButton>
              </Grid>
              <Grid item xs className={classes.Gi}>
                <Typography variant="h6" p={1}>
                  <b>
                    <IconButton>Subject</IconButton>
                  </b>
                </Typography>
              </Grid>

              <Grid
                item
                xs
                alignContent="flex-end"
                className={classes.Gi}
              ></Grid>
              <Grid item xs lg={2} className={classes.Gin}>
                <Typography variant="h6" edge="start">
                  <b>{text}</b>
                </Typography>
              </Grid>
              <Grid item xs lg={2} className={classes.Gi}></Grid>
            </Grid>
          </Container>
        </Grid>
      ))}

      <Grid container direction={'row'} className={classes.fix}>
        <Grid item xs className={classes.leg}></Grid>
        <Grid item className={classes.imgt}>
          <IconButton className={classes.ter}>
            <AddCircleIcon className="tera" />
          </IconButton>
        </Grid>

        {/*Scroll to top FAB*/}
        <Grid item className={classes.imgt}>
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

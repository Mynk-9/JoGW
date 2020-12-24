import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Button,
  IconButton,
} from '@material-ui/core';
import Navbar from '../navbar/navbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import {
  ChevronRightRounded,
  ChevronLeftRounded,
  ArrowUpwardRounded,
} from '@material-ui/icons';
import MessageCard from './MessageCard';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFDE8',
  },
  headerBox: {
    backgroundColor: '#525252',
    textAlign: 'center',
    marginTop: '20px',
    padding: '15px 0px',
    borderRadius: '10px',
    display: 'flex',
  },
  headerText: {
    margin: 0,
    color: 'white',
    width: '90%',
    fontSize: '24px',
    paddingLeft: '1%',
  },
  msgNumberText: {
    margin: 0,
    color: 'white',
    fontSize: '18px',
  },
}));

const Dashboard = (messages, props) => {
  const classes = useStyles();
  const [msgs, setMsgs] = useState(
    Array(32).fill(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    )
  );
  const [msgPage, setMsgPage] = useState(0);
  const handleChangePage = (goToNext) => {
    if (goToNext) {
      if (msgPage < Math.ceil(msgs.length / 10) - 1) {
        setMsgPage((newPage) => (newPage = msgPage + 1));
      }
    } else {
      if (msgPage > 0) {
        setMsgPage((newPage) => (newPage = msgPage - 1));
      }
    }
  };
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
      <Zoom in={trigger} style={{ margin: '0 auto' }}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }
  return (
    <div className={classes.root}>
      <Navbar navHeading="Core Dashboard" />
      <div
        style={{
          backgroundColor: '#EF4646',
          padding: '20px 0 0 50px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          component="span"
          borderRadius={5}
          style={{
            backgroundColor: '#FFFDE8',
          }}
        >
          <Button
            style={{
              fontWeight: '700',
              backgroundColor: '#FFFDE8',
              fontSize: '20px',
              padding: '7px',
              textTransform: 'none',
            }}
          >
            Messages to review
          </Button>
        </Box>
        <div
          style={{
            display: 'flex',
            paddingRight: '75px',
          }}
        >
          <IconButton>
            <ChevronLeftRounded onClick={() => handleChangePage(false)} />
          </IconButton>
          <p>
            {msgPage * 10 + 1} -
            {(msgPage + 1) * 10 > msgs.length ? msgs.length : msgPage * 10 + 10}{' '}
            of {msgs.length}
          </p>
          <IconButton>
            <ChevronRightRounded onClick={() => handleChangePage(true)} />
          </IconButton>
        </div>
      </div>
      <Container>
        {msgs.slice(msgPage * 10, msgPage * 10 + 9).map((message) => (
          <MessageCard
            rollNumber={'2019A8PS0666G'}
            message={message}
            date={'28th Dec 2020, 2:31 a.m.'}
          />
        ))}
      </Container>
      <div
        style={{
          margin: '25px',
          display: 'flex',
        }}
      >
        <ScrollTop>
          <a style={{ textDecoration: 'none' }}>Back to Top</a>
          <ArrowUpwardRounded />
        </ScrollTop>
        <div
          style={{
            display: 'flex',
            paddingRight: '75px',
          }}
        >
          <IconButton>
            <ChevronLeftRounded onClick={() => handleChangePage(false)} />
          </IconButton>
          <p>
            {msgPage * 10 + 1} -
            {(msgPage + 1) * 10 > msgs.length ? msgs.length : msgPage * 10 + 10}{' '}
            of {msgs.length}
          </p>
          <IconButton>
            <ChevronRightRounded onClick={() => handleChangePage(true)} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

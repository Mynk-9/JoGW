import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Navbar from '../navbar/navbar';
import { KeyboardArrowRight } from '@material-ui/icons';
import MessageCard from './MessageCard';

const useStyles = makeStyles((theme) => ({
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

const Dashboard = (messages) => {
  const classes = useStyles();
  const [msgs, setMsgs] = useState(Array(30).fill('Ye bhi thik hai. :/'));
  const [msgPage, setMsgPage] = useState('1-10 of 30');
  return (
    <React.Fragment>
      {/*Nav Bar*/}
      <Navbar navHeading="Core Dashboard" />
      {/*Header*/}
      <Container className={classes.headerBox}>
        <p className={classes.headerText}>Messages to review</p>
        <Box display="flex">
          <p className={classes.msgNumberText}>{msgPage}</p>
          <KeyboardArrowRight style={{ color: 'white' }} />
        </Box>
      </Container>
      {/*List of messages*/}
      <Container>
        {msgs.map((message) => (
          <MessageCard
            rollNumber={'2019A8PS0666G'}
            message={message}
            date={'28th Dec 2020, 2:31 a.m.'}
          />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;

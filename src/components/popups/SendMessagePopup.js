import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import LetterImage from './../../imageassets/letter.svg';

const useStyles = makeStyles((theme) => ({
  root: {},
  message: {
    position: 'absolute',

    backgroundImage: `url(${LetterImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '50vw',
    height: '50vw',

    maxWidth: '70vh',
    maxHeight: '70vh',
  },
  sendto: {
    position: 'absolute',
    top: '50%',
    left: '20%',
    width: '60%',
  },
  messageBody: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    width: '60%',
    height: '30%',

    overflowY: 'scroll',
  },
  messageTextField: {
    width: '100%',
  },
  sendtoTextField: {
    width: '100%',
  },
  sendButton: {
    position: 'absolute',
    left: '50%',
    top: '80%',

    transform: 'translateX(-50%)',
  },
}));

export default function SendMessagePopup(props) {
  const classes = useStyles();
  const [messageText, setMessageText] = useState('');
  const [sendtoAddress, setSendtoAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitFunction(messageText, sendtoAddress);
  };

  return (
    <>
      <div className={classes.root}>
        <Paper elevation={0} className={classes.message}>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className={classes.messageBody}>
              <TextField
                multiline
                className={classes.messageTextField}
                value={messageText}
                onChange={(e) => {
                  setMessageText(e.target.value);
                }}
              />
            </div>
            <div className={classes.sendto}>
              <TextField
                className={classes.sendtoTextField}
                value={sendtoAddress}
                onChange={(e) => {
                  setSendtoAddress(e.target.value);
                }}
              />
            </div>
            <div className={classes.sendButton}>
              <Button variant="outlined" type="submit">
                Send
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    </>
  );
}

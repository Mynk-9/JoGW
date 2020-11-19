import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
  datetimediv: {
    position: 'absolute',
    top: '10%',
    left: '72%',
    width: 'fit-content',

    transform: 'translateX(-50%)',

    fontStyle: 'italic',
    fontSize: '1.125rem',
  },
  contentdiv: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    width: '60%',
    height: '37%',

    overflowY: 'scroll',
    fontSize: '1.5rem',
  },
}));

export default function ReadMessagePopup({ content, dateTime }, props) {
  const classes = useStyles();
  if (content == null)
    content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  if (dateTime == null) dateTime = '15 Aug 1947';

  return (
    <>
      <div className={classes.root}>
        <Paper elevation={0} className={classes.message}>
          <div className={classes.datetimediv}>{dateTime}</div>
          <div className={classes.contentdiv}>{content}</div>
        </Paper>
      </div>
    </>
  );
}

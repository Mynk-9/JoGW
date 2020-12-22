import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Snackbar,
} from '@material-ui/core';
import { CancelRounded, CheckCircleRounded } from '@material-ui/icons';
import ShowMoreText from 'react-show-more-text';

const useStyles = makeStyles((theme) => ({
  msgCard: {
    padding: '15px',
    marginTop: '20px',
    backgroundColor: '#FFD94D',
  },
  cardHeaderRollNum: {
    fontSize: '20px',
    fontFamily: 'Oxygen, sans-serif',
    padding: 0,
    marginTop: '10px',
  },
  cardContent: {
    padding: 0,
    margin: 0,
    overflow: 'hidden',
    fontFamily: 'Raleway, sans-serif',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
  },
  date: {
    margin: '20px 15px 0 0',
    fontStyle: 'italic',
    fontSize: '17px',
    fontFamily: 'Roboto. sans-serif',
  },
  iconButton: {
    padding: 0,
    margin: '5px 10px',
  },
  anchorClass: {
    textDecoration: 'none',
  },
}));

const MessageCard = ({ rollNumber, message, date }) => {
  const classes = useStyles();
  // State variables
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');
  const [viewMore, setViewMore] = useState(false);
  // click handlers
  const handleClick = (msg) => {
    setOpen(true);
    setText('This message has been' + msg);
    setStatus(msg);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleStatus = () => {
    if (status === 'accepted') return 'inset -7px 0 0 0 #00CF53';
    else if (status === 'rejected') return 'inset -7px 0 0 0 #EF4646';
    else if (status === 'flagged for review') return 'inset -7px 0 0 0 #4B4B4B';
    else return;
  };
  // button react fragment
  const buttons = (
    <React.Fragment>
      <IconButton
        classes={{ root: classes.iconButton }}
        onClick={() => handleClick('accepted')}
      >
        <CheckCircleRounded
          style={{
            color: '#00CF53',
            fontSize: '45px',
          }}
        />
      </IconButton>
      <IconButton
        classes={{ root: classes.iconButton }}
        onClick={() => handleClick('rejected')}
      >
        <CancelRounded
          style={{
            color: '#EF4646',
            fontSize: '45px',
          }}
        />
      </IconButton>
      <IconButton
        classes={{ root: classes.iconButton }}
        onClick={() => handleClick('flagged for review')}
      >
        <svg
          width="42"
          height="41"
          viewBox="0 0 42 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20.55" cy="20.5" r="19" fill="#4B4B4B" />
          <path
            d="M15.5532 31.3904H14.1438V11.6592H31.0563L26.9691 18.0014L31.0563 24.3436H15.5532V31.3904Z"
            fill="white"
          />
        </svg>
      </IconButton>
    </React.Fragment>
  );
  // complete component
  return (
    <Card
      className={classes.msgCard}
      style={{ boxShadow: handleStatus() }}
      raised={true}
    >
      <CardHeader
        title={'To: ' + rollNumber}
        className={classes.cardHeaderRollNum}
        titleTypographyProps={{
          variant: 'paragraph',
        }}
      />
      <div>
        <ShowMoreText
          lines={3}
          more="Show more"
          less="Show less"
          expanded={false}
          anchorClass={classes.anchorClass}
          className={classes.cardContent}
        >
          <p>{message}</p>
        </ShowMoreText>
        <div className={classes.cardFooter}>
          <p className={classes.date}>{date}</p>
          <CardActions disableSpacing>{buttons}</CardActions>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={() => setTimeout(handleClose, 1000)}
        message={text}
        key={text}
      />
    </Card>
  );
};

export default MessageCard;
